/**
 * 인증 컨트롤러
 */
import Certification from "../models/Certification";

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
  try {
    // const data = await Auth.find({
    //   created_at: {
    //     "&gte": new Date("2010","6","1"),
    //     "&lt": new Date("2022","6","5")
    //   }
    // });
    res.send(await Certification.find({}).sort({ create_at: -1 }));
    // res.send(data);
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
