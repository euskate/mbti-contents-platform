import Lottie from "react-lottie";
import * as animationData from "../../assets/loading-animation.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Loading = ({ mbtiScore, currentTest }) => {
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");

  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // 로딩타임 -> 3.7초
  const loadingTime = 3700; // ms

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
    setFinalQuery(resultQuery);
  }, [mbtiScore, currentTest]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      finalQuery &&
        navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentTest?.info?.mainUrl, finalQuery, loadingTime, navigate]);

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
