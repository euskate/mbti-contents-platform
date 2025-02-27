import { useNavigate, useSearchParams } from "react-router-dom";
import CategoryButtons from "../components/main/CategoryButtons";
import LanguageIcons from "../components/main/LanguageIcons";
import MainBanner from "../components/main/MainBanner";
import ThumbnailList from "../components/main/ThumbnailList";
import { useEffect } from "react";

function Main() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const cat = searchParams.get("cat");
  const lang = searchParams.get("lang");

  useEffect(() => {
    const langList = ["Kor", "Eng", "JP"];
    const catList = ["love", "characteristic"];

    if (!langList.includes(lang)) {
      alert("올바르지 않은 언어입니다.");
      navigate("/");
    }

    if (!catList.includes(cat)) {
      alert("올바르지 않은 카테고리입니다.");
      navigate("/");
    }
  }, []);
  return (
    <>
      <LanguageIcons />
      <MainBanner />
      <CategoryButtons />
      <ThumbnailList />
    </>
  );
}

// mbti.com?lang=Eng?cat=character
export default Main;
