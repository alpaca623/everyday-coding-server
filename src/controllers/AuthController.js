import Auth from "../models/Auth";

export const authRequest = async (req, res) => {
  const { auth_type, auth_content } = req.body;
  try {
    res.send(
      await Auth.create({
        auth_type,
        auth_content
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const authUserRequest = async (req, res, next) => {
  try {
    // const data = await Auth.find({
    //   created_at: {
    //     "&gte": new Date("2010","6","1"),
    //     "&lt": new Date("2022","6","5")
    //   }
    // });
    res.send(await Auth.find({}).sort({ create_at: -1 }));
    // res.send(data);
  } catch (e) {
    console.log(e);
  }
};
