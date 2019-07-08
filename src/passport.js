import passport from "passport";
import { routes } from "./routes";
import User from "./models/User";

passport.use(User.createStrategy());