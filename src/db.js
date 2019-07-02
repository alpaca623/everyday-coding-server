import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", () => console.log(error));
db.once("open", () => console.log("✅ DB connected!"));
