import passport from 'passport';

export const requestKakaoLogin = passport.authenticate("kakao");

export const postKakaoLogin = (req,res)=>{
  res.send(1);
}