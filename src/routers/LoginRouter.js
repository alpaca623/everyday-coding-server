import express from "express";
import passport from "passport";
import { routes } from "../routes";
import {
  requestKakaoLogin,
  postKakaoLogin
} from "../controllers/LoginController";

const loginRouter = express.Router();

loginRouter.get(routes.kakaoAuth, requestKakaoLogin);
loginRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/" }, postKakaoLogin)
);

export default loginRouter;
