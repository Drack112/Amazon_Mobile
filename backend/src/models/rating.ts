/* eslint-disable no-useless-escape */
import mongoose, { Schema, Model, Document } from "mongoose";

type RatingDocument = Document & {
  userID: string;
  rating: string;
};

const ratingSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "ratings",
    timestamps: true,
  },
);

const Rating: Model<RatingDocument> = mongoose.model<RatingDocument>(
  "Rating",
  ratingSchema,
);

export { Rating, ratingSchema, RatingDocument };
