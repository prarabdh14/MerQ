import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { apiRouter } from "./routes";
import { env } from "./config/env";
import { errorHandler } from "./middlewares/error.middleware";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.frontendOrigin,
      credentials: true,
    }),
  );

  app.use(helmet());
  app.use(morgan(env.nodeEnv === "development" ? "dev" : "combined"));
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", service: "merq-backend" });
  });

  app.use("/api", apiRouter);

  app.use(errorHandler);

  return app;
}

