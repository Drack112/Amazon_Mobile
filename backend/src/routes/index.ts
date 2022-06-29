import { Request, Response, Router } from "express";
import UserController from "../controller/UserController";

const routes = Router();

const userController = new UserController();

routes.get("/api", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Hello Dev" });
});

routes.post("/api/users/signup", userController.createUser);
routes.post("/api/users/login", userController.login);
routes.get("/api/users", userController.getUsers);

export default routes;
