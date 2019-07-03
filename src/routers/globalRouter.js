import express from "express";
import passport from "passport";
import { routes } from "../routes";
import {
  requestKakaoLogin,
  postKakaoLogin,
  requestLogin,
  requestJoin
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.post(routes.join, requestJoin);
globalRouter.post(routes.login, requestLogin);
globalRouter.get(routes.kakaoAuth, requestKakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/" }, postKakaoLogin)
);

export default globalRouter;
