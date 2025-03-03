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
  const [renderTestInfo, setRenderTestInfo] = useState({});

  useEffect(() => {
    console.log("testParam", testParam);
    console.log("resultParam", resultParam);
    const testInfo = TESTS.find((test) => test.info?.mainUrl === testParam);
    if (!testInfo) {
      //alert("존재하지 않는 테스트입니다.");
      navigate("/");
    }
    setRenderResultInfo(testInfo);

    const resultInfo = testInfo?.results?.find(
      (result) => result.query === resultParam
    );

    // 결과 주소가 틀리면 테스트로
    if (!resultInfo) {
      navigate(`/${testInfo?.info?.mainUrl}`);
    }

    // O
    setRenderResultInfo(resultInfo);
  }, [navigate, resultParam, testParam]);

  return (
    <div>
      <TestResultRenderer renderResultInfo={renderResultInfo} />
      <ShareButtonGroup
        testParam={testParam}
        resultParam={resultParam}
        renderTestInfo={renderTestInfo}
      />
      <ResultButtonGroup
        testParam={testParam}
        resultParam={resultParam}
        renderTestInfo={renderTestInfo}
      />
      <ResultThumbnailList testParam={testParam} />
    </div>
  );
}

export default TestResult;
