import express from "express";
import { routes } from "../routes";
import {
  certificationUsers,
  certificationDetail,
  certificationCreate
} from "../controllers/certificationController";

const certificationRouter = express.Router();

certificationRouter.get(routes.home, certificationUsers);
certificationRouter.get(routes.certi_detail, certificationDetail);
certificationRouter.post(routes.certi_create, certificationCreate);

export default certificationRouter;
