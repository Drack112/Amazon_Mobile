import { Request, Response } from "express";
import { User } from "../models/user";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
	async createUser(req: Request, res: Response) {
		try {
			const { name, email, password } = req.body;
			const user = new User({ name, email, password });

			if (!name || !email || !password) {
				return res.status(400).json({
					msg: "Some field's are incomplete, check your data!",
				});
			}

			const emailUser = await User.findOne({
				email,
			});

			if (emailUser) {
				return res.status(500).json({ error: "User already exist." });
			}

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();
			return res.status(201).json(user);
		} catch (error: any) {
			return res.status(500).json({ error: error.message });
		}
	}

	async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ msg: "User with this email does not exist" });
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({ msg: "Incorrect Password" });
			}

			const token = jwt.sign({ id: user._id }, "passwordKey");

			return res.status(200).json({
				token,
				user,
			});
		} catch (error: any) {
			return res.status(500).json({ error: error.message });
		}
	}

	async getUsers(req: Request, res: Response) {
		const users = await User.find().sort("-createdAt").exec();
		return res.status(200).json(users);
	}
}

export default UserController;