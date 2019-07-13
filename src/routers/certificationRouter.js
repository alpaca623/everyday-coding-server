import express from "express";
import { routes } from "../routes";
import {
  certificationList,
  certificationDetail,
  certificationCreate
} from "../controllers/certificationController";

const certificationRouter = express.Router();

certificationRouter.get(routes.home, certificationList);
certificationRouter.get(routes.certi_detail, certificationDetail);
certificationRouter.post(routes.certi_create, certificationCreate);

export default certificationRouter;
