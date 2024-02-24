import express, { Express, Router } from "express";
import RouteGroup from "express-route-grouping";
import cors from "cors";
import helmet from "helmet";
import cookieSession from "cookie-session";
import { AppRouter } from "./Routes/App.router";
import { morganMiddleware } from "../middlewares/morgan.middleware";

export const App: Express = express();

App.use(cors());
App.use(helmet());
App.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 100,
    keys: [process.env.COOKIE_KEY_1 || "", process.env.COOKIE_KEY_2 || ""],
  })
);

// Add the morgan middleware
App.use(morganMiddleware);

const root = new RouteGroup("/api", Router());

root.group("v1", (router) => {
  router.use("", AppRouter);
});

App.use("/", root.export());

// App.use('/api', AppRouter);
