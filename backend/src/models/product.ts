/* eslint-disable no-useless-escape */
import mongoose, { Schema, Model, Document } from "mongoose";
import { RatingDocument, ratingSchema } from "./rating";

type ProductDocument = Document & {
  name: string;
  description: string;
  images: string[];
  quantity: number;
  price: number;
  category: string;
  ratings: RatingDocument[];
};

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ratings: [ratingSchema],
  },
  {
    collection: "ratings",
    timestamps: true,
  },
);

const Product: Model<ProductDocument> = mongoose.model<ProductDocument>(
  "Product",
  productSchema,
);

export { Product };
