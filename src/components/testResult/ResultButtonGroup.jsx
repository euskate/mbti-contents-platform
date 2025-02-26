import { useCopyToClipboard } from "@uidotdev/usehooks";
import {
  HomeOutlined,
  LinkOutlined,
  RedoOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { base_url } from "../../App";
import { useNavigate } from "react-router-dom";
import styles from "./resultButtonGroup.module.css";

export const ResultButtonGroup = ({
  testParam,
  resultParam,
  renderTestInfo,
}) => {
  const navigate = useNavigate();
  const [copiedText, copy] = useCopyToClipboard();
  const share_url = `${base_url}/${testParam}/result/${resultParam}`;

  const onClickRedo = () => {
    navigate(`/${testParam}`);
  };
  const onClickHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button
          className={styles.upperButton}
          onClick={() => {
            copy(share_url);
            alert("URL이 복사되었습니다.");
          }}
        >
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
