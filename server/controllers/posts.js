const db = require("../config/db");

const posts = async (req, res) => {
  let userId = req.body.id || null; // 로그인한 유저의 ID
  let limit = req.body.limit || 5; // 한 번에 로드할 게시글 수
  let offset = req.body.offset || 0; // 현재까지 로드된 게시글 수

  try {
    // SQL 쿼리 작성 (페이징 처리)
    const QUERY = `
      SELECT 
        p.post_id,
        p.post_title,
        p.post_content,
        p.user_name,
        p.create_at,
        IF(l.user_id IS NOT NULL, TRUE, FALSE) AS liked,
        (SELECT COUNT(*) FROM LIKES l2 WHERE l2.post_id = p.post_id) AS like_count,
        (SELECT COUNT(*) FROM COMMENTS c2 WHERE c2.post_id = p.post_id) AS comment_count
      FROM 
        POSTS p
      LEFT JOIN 
        LIKES l ON p.post_id = l.post_id AND l.user_id = ?
      ORDER BY 
        p.create_at DESC
      LIMIT ? OFFSET ?;
    `;

    // db.execute로 쿼리 실행
    const [posts] = await db.execute(QUERY, [userId, limit, offset]);

    // 결과 반환
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "게시글 목록을 가져오지 못했습니다." });
  }
};

module.exports = posts;