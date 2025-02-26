import Lottie from "react-lottie";
import * as animationData from "../../assets/loading-animation.json";
import { useEffect } from "react";

export const Loading = ({ mbtiScore, currentTest }) => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["N", "S"],
      ["T", "F"],
      ["J", "P"],
    ];
    let resultType = "";
    for (let pair of mbtiPairs) {
      let firstType = pair[0];
      let secondType = pair[1];
      let firstTypeScore = mbtiScore[firstType];
      let secondTypeScore = mbtiScore[secondType];
      firstTypeScore >= secondTypeScore
        ? (resultType += firstType)
        : (resultType += secondType);
    }

    console.log("resultType", resultType);
    const resultQuery = currentTest?.results?.find(
      (result) => result?.type === resultType
    )?.query;
    console.log("resultQuery", resultQuery);
  }, [mbtiScore, currentTest]);

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
// 채점 [[E, I], [N, S], [T, F], [J, P]] =>
// N초 후 -> Result 페이지로 라우팅
