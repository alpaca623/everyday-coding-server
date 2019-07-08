/**
 * 인증 컨트롤러
 */
import Certification from "../models/Certification";

/**
 * 인증 생성
 */
export const certificationCreate = async (req, res) => {
  const { auth_type, auth_content } = req.body;
  try {
    res.send(
      await Certification.create({
        auth_type,
        auth_content
      })
    );
  } catch (e) {
    console.log(e);
  }
};

/**
 * 오늘의 인증자 목록 요청
 * @param {} req 
 * @param {*} res 
 * @param {*} next 
 */
export const certificationUsers = async (req, res, next) => {
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
