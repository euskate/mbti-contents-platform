import { useEffect, useState } from "react";

export const Quiz = ({ setMode, questions, mbtiScore, setMbtiScore }) => {
  const [questionNum, setQuestionNum] = useState(0);
  const onOptionClick = () => {
    setQuestionNum((prev) => prev + 1);
  };

  useEffect(() => {}, [questionNum]);
  return (
    <>
      <h3>{questions[questionNum]?.question}</h3>
      <button onClick={onOptionClick}>
        {questions[questionNum]?.answers[0]?.content}
      </button>
      <button onClick={onOptionClick}>
        {questions[questionNum]?.answers[1]?.content}
      </button>
      <div>프로그레스바</div>
    </>
  );
};

export default Quiz;
