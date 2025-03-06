import { useCopyToClipboard } from "@uidotdev/usehooks";
import {
  HomeOutlined,
  LinkOutlined,
  RedoOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "./resultButtonGroup.module.css";
import { eventSenderGA } from "../../tools/tools";
import { base_url } from "../../App";

export const ResultButtonGroup = ({
  testParam,
  resultParam,
  renderTestInfo,
}) => {
  const navigate = useNavigate();
  const [copiedText, copy] = useCopyToClipboard();
  const share_url = `${base_url}/${testParam}/result/${resultParam}`;

  const onClickCopyUrl = () => {
    eventSenderGA("Copy", "Copy Url Button", "Result");
    copy(share_url);
    alert("URL이 복사되었습니다.");
  };

  const onClickRedo = () => {
    eventSenderGA("Paging", "Click Re-do Button", "Result");
    navigate(`/${testParam}`);
  };
  const onClickHome = () => {
    eventSenderGA("Paging", "Click Go Home Button", "Result");
    navigate("/");
  };
  return (
    <div className={styles.mainDiv}>
      <Link to={`/blog/${testParam}`}>
        <button className={styles.blogButton}>블로그 보러가기</button>
      </Link>
      <div className={styles.upperDiv}>
        <button className={styles.upperButton} onClick={onClickCopyUrl}>
          {/* <LinkOutlined /> */}
          <LinkOutlined />
          &nbsp;링크 복사
        </button>

        <button className={styles.upperButton} onClick={onClickRedo}>
          <RedoOutlined />
          &nbsp;다시 하기
        </button>
      </div>
      <div className={styles.bottomDiv}>
        <button className={styles.bottomButton} onClick={onClickHome}>
          <HomeOutlined />
          &nbsp;다른 테스트하러가기
        </button>
      </div>
    </div>
  );
};
