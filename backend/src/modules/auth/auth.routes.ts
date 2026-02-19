import { Router } from "express";
import { registerHandler, loginHandler, meHandler } from "./auth.controller";
import { validateBody } from "../../middlewares/validate.middleware";
import { authGuard } from "../../middlewares/auth.middleware";
import { loginSchema, registerSchema } from "./auth.validators";

const router = Router();

router.post("/register", validateBody(registerSchema), registerHandler);
router.post("/login", validateBody(loginSchema), loginHandler);
router.get("/me", authGuard, meHandler);

export const authRouter = router;

