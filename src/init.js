import dotenv from "dotenv";

import "./db";
import app from "./app";

import "./schemas/User";
import "./schemas/Auth";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`✅ server open! ${PORT}`));
