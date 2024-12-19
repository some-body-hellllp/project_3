import styles from "./Stamp.module.css"; // CSS 모듈 파일 임포트
import stampCheck from "../../assets/img/stamp/stampcheck.svg";
import stampNoneCheck from "../../assets/img/stamp/stampdoncheck.svg";
import StampInfo from "./StampInfo/StampInfo";
import Header from "../Header/Header";
import { useContext, useEffect, useState } from "react";
import { PageData } from "../../provider/PageProvider";
import axios from "axios";

export default function Stamp() {
  const { userData, setUserData } = useContext(PageData); // PageData Context에서 userData 가져오기
  const [stampCount, setStampCount] = useState(userData.stampCount); // 현재 스탬프 개수 상태
  const [stampImages, setStampImages] = useState([]); // 스탬프 이미지 배열 상태
  const [stampInfoList, setStampInfoList] = useState([]); // StampInfo 컴포넌트를 관리하는 상태
  const postUrl = import.meta.env.VITE_API_URL;
  const token = window.localStorage.getItem("token");
  // 스탬프 이미지 배열 생성
  const createStampImages = () => {
    const remainder = stampCount % 8; // 8로 나눈 나머지 계산
    // 나머지 만큼 stampCheck, 나머지는 stampNoneCheck
    return Array.from({ length: 8 }, (_, index) => (index < remainder ? stampCheck : stampNoneCheck));
  };

  useEffect(() => {
    const fetchStamp = async () => {
      const headers = {
        Authorization: `Bearer ${token}`, // 인증 토큰
        "Content-Type": "application/json", // 요청의 Content-Type
      };

      try {
        // axios 요청: URL, 요청 데이터 (body), 그리고 설정(config) 순으로 전달
        const getStamp = await axios.get(
          `${postUrl}/auth/stamp`,
          { userId: userData.userId }, // 요청 본문 (body) 데이터
          { headers } // 설정 (headers)
        );

        console.log(getStamp); // 서버로부터 받은 응답
        // setUserData(prevData => ({
        //   ...prevData, // 기존의 userData를 유지
        //   stamp: getStamp.stamp,
        //   stampCount:getStamp.stamp.length//
        // }));
      } catch (error) {
        console.error("Error fetching stamp:", error);
      }
    };

    fetchStamp();
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  // 스탬프 출력 함수
  useEffect(() => {
    setStampImages(createStampImages());
  }, []);

  return (
    <>
      <Header>스탬프</Header>
      <section className={styles.stampSection}>
        <div className={styles.stampBox}>
          <div className={styles.stampBoxHeader}>
            <strong className={styles.stampName}>코딩몬스터</strong>님
            <br />
            모으신 스탬프를 확인해보세요
          </div>
          <div className={styles.stampBoxBody}>방문시 스탬프 1개, 책 구매시 스탬프를 1개 더 드립니다.</div>
          <div className={styles.stampCardName}>Stamp Card</div>
          <div className={styles.stampCard}>
            <div className={styles.stampGrid}>
              {stampImages.map((stamp, index) => (
                <img key={index} src={stamp} alt={`Stamp ${index + 1}`} />
              ))}
            </div>
            <div className={styles.stampText}>
              <p>스탬프 3개를 완료하면 5%쿠폰</p>
              <p>스탬프 5개를 완료하면 10%쿠폰</p>
              <p>스탬프 8개를 완료하면 15%쿠폰을 드립니다!</p>
            </div>
          </div>
        </div>

        <section className={styles.stampWrap}>{stampInfoList}</section>
      </section>
    </>
  );
}
