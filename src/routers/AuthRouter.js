import express from "express";
import { routes } from "../routes";
import { authRequest, authUserRequest } from "../controllers/AuthController";

const authRouter = express.Router();

authRouter.get(routes.home, authUserRequest);
authRouter.post(routes.auth_request, authRequest);

export default authRouter;
