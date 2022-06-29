import { Request, Response } from "express";
import { User } from "../models/user";
import * as bcrypt from "bcrypt";

class UserController {
	async createUser(req: Request, res: Response) {
		const { name, email, password } = req.body;
		const user = new User({ name, email, password });

		if (!name || !email || !password) {
			return res.status(422).json({
				message: "Some field's are incomplete, check your data!",
			});
		}

		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await user.save();

		return res.status(201).json(user);
	}

	async getUsers(req: Request, res: Response) {
		const users = await User.find().sort("-createdAt").exec();

		return res.status(200).json(users);
	}
}

export default UserController;
