import { Router } from "express";
import { UserModel } from "../models";

const userRouter = Router();

const userRouterBaseRoute = "/users";

userRouter.get("/", async (_req, res) => {
  try {
    const users = await UserModel.findAll();
    return res
      .json({ status: "success", users: users.map((user) => user.toJSON()) })
      .status(200);
  } catch (e) {
    return res
      .json({
        status: "error",
        error: e.toString(),
      })
      .status(500);
  }
});

userRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res
        .json({
          status: "error",
          error: "missing user id",
        })
        .status(400);
    }
    const user = await UserModel.findOne({ where: { id: userId } });
    if (user === null) {
      return res
        .json({
          status: "error",
          error: "no user found",
        })
        .status(400);
    }
    return res.json({
      status: "success",
      user: user.toJSON(),
    });
  } catch (e) {
    return res
      .json({
        status: "error",
        error: e.toString(),
      })
      .status(500);
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    if (
      !firstName ||
      typeof firstName !== "string" ||
      !lastName ||
      typeof lastName !== "string"
    ) {
      return res
        .json({ status: "error", error: "invalid user params" })
        .status(400);
    }
    const newUser = await UserModel.create({ firstName, lastName });
    return res.json({
      status: "success",
      user: newUser.toJSON(),
    });
  } catch (e) {
    return res.json({ status: "error", error: e.toString() }).status(500);
  }
});

export { userRouter, userRouterBaseRoute };
