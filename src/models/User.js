import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  kakaoId: Number
});

const model = mongoose.model("User", UserSchema);

export default model;
