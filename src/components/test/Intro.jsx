import { eventSenderGA } from "../../tools/tools";
import { AdsenseUnit } from "../AdsenseUnit";
import { CoupangDynamicBanner } from "../CoupangDynamicBanner";
import KakaoAdfit from "../KakaoAdfit";
import { GoToHomeButton } from "./GoToHomeButton";
import IntroButtonGroup from "./IntroButtonGroup";

const Intro = ({ info, setMode }) => {
  const onImageClick = () => {
    eventSenderGA("Paging", "Test Start Button", "Intro");
    setMode("quiz");
  };
  const lang = info?.lang || "Kor";

  const foreignTextObject = {
    Kor: {
      startButton: "시작하기",
      comment: "로 여러분의 성향을 테스트해보세요!",
      copyLink: "링크 복사",
      goToOtherTests: "다른 테스트 보러가기",
    },
    Eng: {
      startButton: "Start",
      comment: " to test your personality!",
      copyLink: "Copy Link",
      goToOtherTests: "Go to other tests",
    },
    JP: {
      startButton: "スタート",
      comment: "であなたの性格をテストしてみてください！",
      copyLink: "リンクをコピー",
      goToOtherTests: "他のテストを見る",
    },
  };

  return (
    <>
      <h1>{info?.mainTitle}</h1>
      <h3>{info?.subTitle}</h3>
      <img
        // onClick={onImageClick}
        src={info?.mainImage}
        alt={info?.mainTitle}
        style={{ width: "100%", cursor: "pointer" }}
      />
      <AdsenseUnit slot={"9287124230"} />
      <KakaoAdfit />
      <CoupangDynamicBanner unit={"introBanner"} />
      <button
        style={{
          backgroundColor: "brown",
          color: "white",
          width: "14rem",
          border: "none",
          borderRadius: "1rem",
          height: "4rem",
          fontSize: "1.5rem",
          cursor: "pointer",
          margin: "0.5rem",
          fontWeight: "bold",
        }}
        onClick={onImageClick}
      >
        {foreignTextObject[lang].startButton}
      </button>
      <p>
        <span style={{ fontWeight: "bold", color: "brown" }}>
          {info?.mainTitle}
        </span>
        {foreignTextObject[lang].comment}
      </p>
      <IntroButtonGroup testParam={info?.mainUrl} lang={info?.lang} />
      <GoToHomeButton page="Intro" />
    </>
  );
};

export default Intro;
