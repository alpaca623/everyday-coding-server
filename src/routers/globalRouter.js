import express from "express";
import { routes } from "../routes";
import {
  requestLogin,
  requestJoin
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.post(routes.join, requestJoin);
globalRouter.post(routes.login, requestLogin);

export default globalRouter;
