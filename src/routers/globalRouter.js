import express from "express";
import passport from "passport";
import { routes } from "../routes";
import {
  requestKakaoLogin,
  postKakaoLogin
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.kakaoAuth, requestKakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/" }, postKakaoLogin)
);

export default globalRouter;
