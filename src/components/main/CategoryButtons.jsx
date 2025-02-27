import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./categoryButtons.module.css";
function CategoryButtons() {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState("Kor");
  const navigate = useNavigate();

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "Kor";
    setLanguage(currentLang);
  }, [searchParams]);

  const onCategoryButtonClick = (category) => {
    if (category === "all") {
      navigate(`/?lang=${language}`);
      // 의미없는 검증, 버튼 클릭이 아닌 입력에는 동작하지 않기 때문
    } else if (["love", "characteristic"].includes(category)) {
      navigate(`/?lang=${language}&cat=${category}`);
    } else {
      alert("잘못된 카테고리입니다.");
      navigate(`/?lang=${language}`);
    }
  };
  return (
    <>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("all")}
      >
        전체
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("love")}
      >
        연애
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("characteristic")}
      >
        성격
      </button>
    </>
  );
}

export default CategoryButtons;
