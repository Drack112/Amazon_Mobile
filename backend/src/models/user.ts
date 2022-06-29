import mongoose, { Schema, Model, Document } from "mongoose";

type UserDocument = Document & {
	name: string;
	email: string;
	password: string;
};

const userSchema = new Schema(
	{
		name: {
			type: Schema.Types.String,
			required: true,
		},
		email: {
			type: Schema.Types.String,
			required: true,
			unique: true,
		},
		password: {
			type: Schema.Types.String,
			required: true,
		},
		address: {
			type: Schema.Types.String,
			default: "",
		},
		type: {
			type: Schema.Types.String,
			default: "user",
		},
	},
	{
		collection: "users",
		timestamps: true,
	},
);

const User: Model<UserDocument> = mongoose.model<UserDocument>(
	"User",
	userSchema,
);

export { User };
