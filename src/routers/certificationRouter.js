import express from "express";
import { routes } from "../routes";
import {
  certificationList,
  certificationDetail,
  certificationCreate
} from "../controllers/certificationController";

const certificationRouter = express.Router();

// 인증 리스트 요청
certificationRouter.get(routes.home, certificationList);

// 인증 상세 정보 요청
certificationRouter.get(routes.certi_detail, certificationDetail);

// 인증 등록
certificationRouter.post(routes.certi_create, certificationCreate);

export default certificationRouter;