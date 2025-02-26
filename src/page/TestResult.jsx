import { useParams, useNavigate } from "react-router-dom";
import { ResultButtonGroup } from "../components/testResult/ResultButtonGroup";
import { ResultThumbnailList } from "../components/testResult/ResultThumbnailList";
import { ShareButtonGroup } from "../components/testResult/ShareButtonGroup";
import { TestResultRenderer } from "../components/testResult/TestResultRenderer";
import { useEffect, useState } from "react";
import { TESTS } from "../data/TESTS";

function TestResult() {
  const navigate = useNavigate();
  const { testParam, resultParam } = useParams();
  const [renderResultInfo, setRenderResultInfo] = useState({});

  useEffect(() => {
    console.log("testParam", testParam);
    console.log("resultParam", resultParam);
    const testInfo = TESTS.find((test) => test.info?.mainUrl === testParam);
    if (!testInfo) {
      //alert("존재하지 않는 테스트입니다.");
      navigate("/");
    }

    const resultInfo = testInfo?.results?.find(
      (result) => result.query === resultParam
    );

    // 결과 주소가 틀리면 테스트로 
    if (!resultInfo) {
      navigate(`/${testInfo?.info?.mainUrl}`);
    }

    // O
    setRenderResultInfo(resultInfo)
  }, [navigate, resultParam, testParam]);
  return (
    <div>
      <h1>TestResult</h1>
      <TestResultRenderer renderResultInfo={renderResultInfo}/>
      <ShareButtonGroup />
      <ResultButtonGroup />
      <ResultThumbnailList />
    </div>
  );
}

export default TestResult;
