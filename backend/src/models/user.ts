/* eslint-disable no-useless-escape */
import mongoose, { Schema, Model, Document } from "mongoose";

type UserDocument = Document & {
  name: string;
  email: string;
  password: string;
};

const userSchema = new Schema(
  {
    name: {
      required: true,
      type: Schema.Types.String,
      trim: true,
    },
    email: {
      required: true,
      type: Schema.Types.String,
      trim: true,
      validate: {
        validator: (value: string) => {
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return value.match(re);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      required: true,
      type: Schema.Types.String,
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
