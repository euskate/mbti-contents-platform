import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AffiliateButton } from "./AffiliateButton";
import styles from "./affiliateButton.module.css";
import Cookies from "js-cookie";

export const TestResultRenderer = ({ renderResultInfo }) => {
  const params = useParams();
  const [isOpened, setIsOpened] = useState(false);
  const [affiliateCookie, setAffiliateCookie] = useState(
    Cookies.get("affiliate")
  );

  useEffect(() => {
    setAffiliateCookie(Cookies.get("affiliate"));
  }, []);
  return (
    <>
      <h1>결과는</h1>

      {/* 광고를 열었거나(isOpened) 최근 광고 쿠키가 있으면(affiliateCookie) 결과를 모두 보일 것 */}
      <div
        className={styles.resultImageDiv}
        style={{ height: isOpened || affiliateCookie ? "100%" : "15rem" }}
      >
        <img
          src={renderResultInfo?.img_src}
          alt={renderResultInfo?.type}
          style={{ width: "100%" }}
        />
      </div>
      {/* 광고를 열었거나(isOpened) 최근 광고 쿠키가 있으면(affiliateCookie) 있지 않으면 버튼을 생성할 것 */}
      {!(isOpened || affiliateCookie) && (
        <AffiliateButton setIsOpened={setIsOpened} />
      )}
    </>
  );
};
