import mongoose from "mongoose";

import db from "../config/database";
import { logger } from "../utils/logger";

const connection = mongoose.connect(
  db.uri,
  {
    autoIndex: true,
  },
  async (err) => {
    if (err) {
      logger.error("🚨 Error trying connect do MongoDB\n" + err);
    } else {
      logger.info("📪 Connected to MongoDB.");
    }
  },
);

export default connection;
