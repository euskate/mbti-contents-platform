import { Divider } from "antd";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { eventSenderGA } from "../../tools/tools";
export const BlogRenderer = ({ content }) => {
  const image_server = "https://d3p8r96g1ckoyt.cloudfront.net";
  const onClickBtn = () => {
    eventSenderGA("Paging", "Click Blog to Test", "Blog");
  };
  return (
    <>
      <h1>{content?.title}</h1>

      <div
        style={{
          marginBottom: "3rem",
          textAlign: "left",
          lineHeight: "1.6rem",
        }}
      >
        <ReactMarkdown>{content?.text}</ReactMarkdown>
      </div>

      <Divider />
      <Link to={`/${content?.testUrl}`} onClick={onClickBtn}>
        <img
          style={{ width: "100%" }}
          src={`${image_server}/intro/personalColor-intro.avif`}
          alt={`${content?.testUrl}`}
        />
      </Link>
      <h3>관련된 테스트를 만나보세요!</h3>
    </>
  );
};
