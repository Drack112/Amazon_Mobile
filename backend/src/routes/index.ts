import { Request, Response, Router } from "express";
import AuthController from "../controller/AuthController";

const routes = Router();

const authController = new AuthController();

routes.get("/api", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Hello Dev" });
});

routes.post("/api/users/signup", authController.createUser);
routes.post("/api/users/login", authController.login);
routes.post("/api/users/tokenIsValid", authController.tokeIsValid);
routes.get("/api/users", authController.getUsers);

export default routes;
