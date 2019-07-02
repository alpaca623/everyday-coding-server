import dotenv from "dotenv";

import "./db";
import app from "./app";

import "./models/User";
import "./models/Auth";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`✅ server open! ${PORT}`));
