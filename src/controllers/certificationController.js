/**
 * 인증 컨트롤러
 */
import Certification from "../models/Certification";
import { convertDateToString, todayString } from "../util";

/**
 * 인증 생성
 *
 * 변수 설명
 * certification_content : 인증 내용
 * certification_type : 인증 타입(ex) 깃허브 인증, 텍스트 인증 구분용도)
 */
export const certificationCreate = async (req, res) => {
  const { certification_content, certification_type } = req.body;
  console.log(req.body);
  try {
    res.send(
      await Certification.create({
        certification_type,
        certification_content
      })
    );
  } catch (e) {
    console.log(e);
  }
};

/**
 * 인증 리스트 요청
 * @param {} req
 * @param {*} res
 * @param {*} next
 */
export const certificationList = async (req, res, next) => {
  const { s_date, e_date } = req.query;
  let data = [];
  try {
    /**
     * 매개변수로 날짜가 들어올 경우 날짜 검색을 해준다.
     */
    if (s_date && e_date) {
      data = await Certification.find({
        create_at: {
          $gte: convertDateToString(s_date),
          $lt: convertDateToString(e_date)
        }
      });
    } else {
      data = await Certification.find({
        create_at: {
          $gte: new Date(
            todayString().year,
            todayString().month,
            todayString().date,
            0,
            0,
            0
          ),
          $lt: new Date(
            todayString().year,
            todayString().month,
            todayString().date,
            23,
            59,
            59
          )
        }
      });
    }
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};

/**
 * 인증 상세 보기 요청
 * @param {*} req
 * @param {*} res
 */
export const certificationDetail = async (req, res) => {
  const { id } = req.query;
  try {
    const detail = await Certification.findById(id);
    res.send(detail);
  } catch (e) {
    res.send(e);
  }
};
