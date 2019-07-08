const HOME = "/";

const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

/********************
 *    인증 관련(로그인 아님)
 ********************/

// 인증 관련
const CERTI = "/certification";
const CERTI_CREATE = "/create";
const CERTI_UPDATE = "/update";
const CERTI_DELETE = "/delete";
const CERTI_DETAIL = "/detail";

/********************
 *    로그인 관련
 ********************/

const AUTH = "/auth";
// 카카오
const KAKAO_AUTH = "/kakao";
const KAKAO_CALLBACK = "/kakao/callback";
// 네이버
const NAVER_AUTH = "/naver";
const NAVER_CALLBACK = "/naver/callback";
// github
const GITHUB_AUTH = "/github";
const GITHUB_CALLBACK = "/github/callback";

export const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  certi: CERTI,
  certi_create: CERTI_CREATE,
  certi_update: CERTI_UPDATE,
  certi_delete: CERTI_DELETE,
  certi_detail: CERTI_DETAIL,
  auth: AUTH,
  kakao_auth: KAKAO_AUTH,
  kakao_callback: KAKAO_CALLBACK
};
