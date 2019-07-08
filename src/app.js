import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";

import { routes } from "./routes";
import certificationRouter from "./routers/certificationRouter";
import globalRouter from "./routers/globalRouter";
import "./passport";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes.home, globalRouter);
app.use(routes.certi, certificationRouter);

export default app;
