import type { Request, Response, NextFunction } from "express";
import { registerUser, loginUser, getCurrentUser } from "./auth.service";
import type { AuthPayload } from "../../middlewares/auth.middleware";

export async function registerHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await registerUser(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
}

export async function loginHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await loginUser(req.body);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
}

export async function meHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const auth = req.auth as AuthPayload | undefined;
    if (!auth) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const user = await getCurrentUser(auth.userId);
    return res.status(200).json({ user });
  } catch (err) {
    return next(err);
  }
}

