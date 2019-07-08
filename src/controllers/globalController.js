import passport from "passport";
import User from "../models/User";

export const requestJoin = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.find({ $or: [{ email }, { name }] });
    if (user) {
      res.json({ message: "fail, already user name or email", status: 0, user });
    } else {
      const result = await User.create({
        name,
        email
      });
      res.send({ message: "success", status: 1, result });
      // res.json({
      //   message: "success, add user info",
      //   status: 1,
      //   successData: result
      // });
    }
  } catch (e) {
    console.log(e);
  }
};

export const requestLogin = async (req, res) => {
  const { email } = req.body;
  try {
    console.log(await User.findOne({ email }));
  } catch (e) {
    console.log(e);
  }
};

export const requestKakaoLogin = passport.authenticate("kakao");
export const postKakaoLogin = (req, res) => {
  res.send(1);
};
