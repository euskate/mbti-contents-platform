import { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";

const IntroRenderer = ({ currentTest }) => {
  // 점수판
  const [mbtiScore, setMbtiScore] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  const [mode, setMode] = useState("intro");
  if (mode === "intro") {
    return <Intro info={currentTest?.info} setMode={setMode} />;
  } else if (mode === "quiz") {
    return (
      <Quiz
        setMode={setMode}
        mbtiScore={mbtiScore}
        setMbtiScore={setMbtiScore}
        questions={currentTest?.questions}
      />
    );
  } else if (mode === "loading") {
    return <Loading />;
  } else {
    return <div> 잘못된 페이지입니다 </div>;
  }
};

export default IntroRenderer;
