import passport from "passport";
import User from "../models/User";

export const requestJoin = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      res.json({ message: "fail, already user email", status: 0 });
    } else {
      const result = await User.create({
        name,
        email
      });
      res.send('hi');
      // res.json({
      //   message: "success, add user info",
      //   status: 1,
      //   successData: result
      // });
    }
    // res.send(await User.create({ name, email }));
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
