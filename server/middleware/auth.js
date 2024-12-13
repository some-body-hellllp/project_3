const db = require("../config/db");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  // 토큰 어디에 넣음??
  /*
  header :{
  Authorization : Bearer {{Token}}
  }
  */

  // 헤더의 authorization가 없음
  const authorization = req.headers.authorization; // Bearer {{Token}}
  if (!authorization) {
    return res.status(401).json({ status: "error", message: "토큰이 없습니다.", data: null });
  }

  // header : authorization 키가 있는 경우인데 토큰이 없음
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ status: "error", message: "토큰이 없습니다.", data: null });
  }

  // 정상적인 토큰이 들어옴
  const secretKey = process.env.JWT_SECRET;
  let decoded;
  try {
    decoded = jwt.decode(token, secretKey);
  } catch (error) {
    // 여기서 토큰이 유효한지 보는듯?
    return res.status(401).json({ status: "error", message: "토큰이 유효하지 않습니다.", data: null });
  }

  // decode id가 없을수도 있지만 검증하지는 않음
  // user_id를 찾아옴
  const userId = decoded.id;

  const QUERY1 = `
      SELECT
        user_id,
        user_login_id,
        user_login_pw,
        user_name
    FROM
        USERS
    WHERE
        user_id= ?`;

  const user = await db.execute(QUERY1, [userId]).then((result) => result[0][0]);
  req.user = user;
  // 토큰 인증 성공
  console.log("토근 인증 성공!");
  next();
};
module.exports = auth;
