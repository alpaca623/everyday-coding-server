import passport from "passport";
import kakaoStrategy from "passport-kakao";
import { routes } from "./routes";
import User from "./models/User";

passport.use(User.createStrategy());

passport.use(
  new kakaoStrategy(
    {
      clientID: process.env.KAKAO_SECRET,
      // clientSecret: process.env.KAKAO_SECRET,
      callbackURL: routes.kakaoCallback
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile, done);
    }
  )
);
