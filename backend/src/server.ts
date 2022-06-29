import express from "express";
import cors from "cors";
import express_pino from "express-pino-logger";
import { logger } from "./utils/logger";
import "./database/connection";
import routes from "./routes";

const loggerMiddleware = express_pino({
  logger: logger,
  autoLogging: true,
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      body: req.raw.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
      host: req.headers.host,
    }),
  },
  enabled: true,
});

const server = express();

server.use(express.json());
server.use(
  cors({
    origin: ["*"],
  }),
);
server.use(loggerMiddleware);
server.use(routes);

export { server };
