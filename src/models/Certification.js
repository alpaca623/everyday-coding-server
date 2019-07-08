import mongoose from "mongoose";

const certificationSchema = mongoose.Schema({
  auth_type: {
    type: Number,
    default: 0,
    required: "type is required"
  },
  auth_content: {
    type: String,
    required: "data is required"
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: "author is required",
    default:"관리자"
  }
});

const model = mongoose.model("certification", certificationSchema);

export default model;
