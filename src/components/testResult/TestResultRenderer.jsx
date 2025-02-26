import { useParams } from "react-router-dom";

export const TestResultRenderer = ({ renderResultInfo }) => {
  const params = useParams();
  return (
    <>
      <h1>결과는</h1>
      <img
        src={renderResultInfo?.img_src}
        alt={renderResultInfo?.type}
        style={{ width: "100%" }}
      />
    </>
  );
};
