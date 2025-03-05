import { HomeOutlined } from "@ant-design/icons";
import { eventSenderGA } from "../../tools/tools";

export const GoToHomeButton = ({ page }) => {
  const onClickBtn = () => {
    eventSenderGA("Click", "Go Home Floating Button", page);
  };
  return (
    <div
      onClick={onClickBtn}
      style={{
        position: "fixed",
        bottom: "30px",
        left: "20px",
        fontSize: "1.5rem",
        border: "3px solid brown",
        borderRadius: "100%",
        width: "3rem",
        height: "3rem",
        fontWeight: "bold",
      }}
    >
      <a href="/">
        <HomeOutlined style={{ color: "brown", verticalAlign: "-0.5rem" }} />
      </a>
    </div>
  );
};
