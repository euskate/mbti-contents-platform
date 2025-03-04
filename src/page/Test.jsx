import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IntroRenderer from "../components/test/IntroRenderer";
import { TESTS } from "../data/TESTS";
import { IntroMetatagRenderer } from "../components/metatagRenderer/IntroMetatagRenderer";

function Test() {
  const { testParam } = useParams();
  const [currentTest, setCurrentTest] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(testParam);
    const theTest = TESTS?.find((test) => test?.info?.mainUrl === testParam);
    if (!theTest) {
      alert("해당 테스트는 존재하지 않습니다.");
      return navigate("/");
    }
    setCurrentTest(theTest);
  }, [testParam]);

  return (
    <div>
      <IntroMetatagRenderer currentTest={currentTest} />
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
}

export default Test;
