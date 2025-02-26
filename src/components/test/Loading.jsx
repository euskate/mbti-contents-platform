import Lottie from "react-lottie";
import * as animationData from "../../assets/loading-animation.json";

export const Loading = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultOption}
      height={250}
      width={250}
      style={{ marginTop: "10rem" }}
    />
  );
};

export default Loading;

// Loading 애니메이션
// mbtiScore 계산 -> result MBTI Type ex. "ENFP"
// N초 후 -> Result 페이지로 라우팅
