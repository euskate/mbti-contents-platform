import { HomeOutlined, LinkOutlined } from "@ant-design/icons";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../App";
import { eventSenderGA } from "../../tools/tools";
import styles from "./introButtonGroup.module.css";

const IntroButtonGroup = ({ testParam }) => {
  const navigate = useNavigate();
  const [copiedText, copy] = useCopyToClipboard();
  const share_url = `${base_url}/${testParam}`;

  const onClickCopyUrl = () => {
    eventSenderGA("Copy", "Copy Url Button", "Result");
    copy(share_url);
    alert("URL이 복사되었습니다.");
  };

  const onClickHome = () => {
    eventSenderGA("Paging", "Click Go Home Button", "Result");
    navigate("/");
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.upperDiv}>
          <button className={styles.upperButton} onClick={onClickCopyUrl}>
            {/* <LinkOutlined /> */}
            <LinkOutlined />
            &nbsp;링크 복사
          </button>
        </div>
        <div className={styles.bottomDiv}>
          <button className={styles.bottomButton} onClick={onClickHome}>
            <HomeOutlined />
            &nbsp;다른 테스트하러가기
          </button>
        </div>
      </div>
    </>
  );
};

export default IntroButtonGroup;
