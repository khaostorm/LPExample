import { Router } from "express";
import { userRouter, userRouterBaseRoute } from "./users";

const rootRouter = Router();

rootRouter.get("/", (_req, res) => {
  return res.status(200).json({
    status: "ok",
  });
});

rootRouter.use(userRouterBaseRoute, userRouter);

export { rootRouter };
