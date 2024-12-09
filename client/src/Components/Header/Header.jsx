import { useNavigate, useLocation } from "react-router-dom";
import { BackIcon, WriteIcon, CancelIcon } from "../../assets/img/Header/Header_image";
import styles from "./Header.module.css";

export default function Header({
  children, // 헤더에 들어 갈 글자
  showBackButton = false, // 뒤로가기 버튼을 보여주는 프롭스
  showCancleButton = false, // 취소 버튼을 보여주는 프롭스
  showWriteButton = false, // 글 작성 버튼을 보여주는 프롭스
  showSubmitButton = false, // 제출 버튼을 보여주는 프롭스
  buttonText = null, // 제출 버튼에 들어갈 텍스트
  submitFunction = null, // 제출 버튼에 들어갈 함수
  write = null, // 글 작성 헤더에 사용 true로 설정하면 흰색 글자로 출력
  color = "#42688B", // 글자색을 푸른색으로 기본 설정
  backButtonColor = "#42688B", // 뒤로가기 버튼을 푸른색으로 기본 설정
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // 클래스 구분을 위한 url
  const page = location.pathname; // 현재 경로

  // 배열에 들어간 url들은 헤더에 문장 하나만 들어있음
  const validPages = new Set(["/", "/location", "/stamp", "/account"]);

  // 헤더 클래스 조건부 설정
  const headerClass = validPages.has(page) ? styles.header_content : styles.header_contents;

  // 뒤로 가기 버튼 클릭 처리
  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className={headerClass}>
      {showCancleButton && <CancelIcon onClick={handleBackClick} />}
      {showBackButton && <BackIcon color={color} onClick={handleBackClick} />}
      {children}
      {showSubmitButton && (
        <button
          // 괄호 안 넣으면 실행 안 됨
          onClick={() => submitFunction()}
          type="submit"
          className={`submit ${write ? styles.submit_white : ""}`}
          style={{ color: backButtonColor }}
          // 이거 글자색이야!!!
        >
          {buttonText}
        </button>
      )}

      {showWriteButton && <WriteIcon />}
    </div>
  );
}
