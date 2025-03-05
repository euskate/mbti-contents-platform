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
        시작하기
      </button>
      <p>
        <span style={{ fontWeight: "bold", color: "brown" }}>
          {info?.mainTitle}
        </span>
        로 여러분의 성향을 테스트해보세요!
      </p>
      <IntroButtonGroup testParam={info?.mainUrl} />
      <GoToHomeButton page="Intro" />
    </>
  );
};

export default Intro;
