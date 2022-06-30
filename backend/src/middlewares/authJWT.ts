import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";

export const SECRET_KEY: Secret = "passwordKey";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) {
      return res.status(401).json({ msg: "No auth token, access denied" });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;

    next();
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
