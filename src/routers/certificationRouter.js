import express from "express";
import { routes } from "../routes";
import {
  certificationUsers,
  certificationDetail,
  certificationCreate
} from "../controllers/certificationController";

const authRouter = express.Router();

authRouter.get(routes.home, certificationUsers);
authRouter.get(routes.certi_detail, certificationDetail);
authRouter.post(routes.certi_create, certificationCreate);

export default authRouter;
