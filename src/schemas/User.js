import mongoose from "mongoose";
import plm from "passport-local-mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  kakaoId: Number
});

UserSchema.plugin(plm, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
