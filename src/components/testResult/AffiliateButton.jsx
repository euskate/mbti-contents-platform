import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import styles from "./affiliateButton.module.css";

export const AffiliateButton = ({ setIsOpened }) => {
  const cookieTime = (1 / 24) * 2;


  const onBtnClick = () => {
    setIsOpened(true);
    Cookies.set("affiliate", true, {
      expires: cookieTime,
      path: "",
      secure: true,
    });
  };
  return (
    <a
      href="https://link.coupang.com/a/chthbw"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className={styles.coverDiv}>
        <button onClick={onBtnClick} className={styles.coverButton}>
          버튼 누르고 결과 보기
        </button>
      </div>
    </a>
  );
};
