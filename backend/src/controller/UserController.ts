import { Request, Response } from "express";
import { User, UserInput } from "../models/user";
import crypto from "crypto";

class UserController {
	async createUser(req: Request, res: Response) {
		const { name, email, password } = req.body;

		const hashPassword = (password: string) => {
			const salt = crypto.randomBytes(16);

			return crypto.pbkdf2Sync(password, salt, 100, 64, "sha512").toString();
		};

		if (!name || !email || !password) {
			return res.status(422).json({
				message: "Some field's are incomplete, check your data!",
			});
		}

		const userInput: UserInput = {
			name,
			email,
			password: hashPassword(password),
		};

		const userCreated = await User.create(userInput);

		return res.status(201).json(userCreated);
	}

	async getUsers(req: Request, res: Response) {
		const users = await User.find().sort("-createdAt").exec();

		return res.status(200).json(users);
	}
}

export default UserController;
