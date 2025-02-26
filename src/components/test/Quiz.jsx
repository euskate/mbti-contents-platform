import { useEffect, useState } from "react";
import styles from "./quiz.module.css";
import { Progress } from "antd";
import { arrayShuffler } from "../../tools/tools";

export const Quiz = ({ setMode, questions, mbtiScore, setMbtiScore }) => {
  const [questionNum, setQuestionNum] = useState(0);
  const onOptionClick = (type) => {
    mbtiScore[type] += 1;
    setMbtiScore({ ...mbtiScore });
    setQuestionNum((prev) => prev + 1);
  };
  

  useEffect(() => {
    if (questionNum === questions.length) {
      setMode("loading");
    }
  }, [questionNum, questions.length, setMode]);

  return (
    <>
      <h3 className={styles.questionText}>
        {questions[questionNum]?.question}
      </h3>

      {questions[questionNum]?.answers &&
        arrayShuffler(questions[questionNum]?.answers)?.map((option, index) => (
          <button
            key={index}
            className={styles.questionButton}
            onClick={() => onOptionClick(option.type)}
          >
            {option.content}
          </button>
        ))}
      <Progress
        percent={(questionNum / questions.length) * 100}
        showInfo={false}
      />
    </>
  );
};

export default Quiz;
