import express from "express";
import cors from "cors";
import express_pino from "express-pino-logger";
import { logger } from "./utils/logger";

const loggerMiddleware = express_pino({
	logger: logger,
	autoLogging: true,
	serializers: {
		req: (req) => ({
			method: req.method,
			url: req.url,
			user: req.raw.user,
			host: req.headers.host,
		}),
	},
});

const server = express();

server.use(express.json());
server.use(cors());
server.use(loggerMiddleware);

export { server };
