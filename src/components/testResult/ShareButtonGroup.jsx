import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { base_url } from "../../App";
import styles from "./shareButtonGroup.module.css";
import { useCopyToClipboard } from "@uidotdev/usehooks";

export const ShareButtonGroup = ({
  testParam,
  resultParam,
  renderTestInfo,
}) => {
  const share_url = `${base_url}/${testParam}/result/${resultParam}`;
  const mainTitle = renderTestInfo?.info?.mainTitle;
  const [copiedText, copy] = useCopyToClipboard();
  return (
    <>
      <h3>친구에게 공유하기</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton url={share_url} hashtag={`#${mainTitle}`}>
          <FacebookIcon
            className={styles.socialMediaIcon}
            round={true}
            size={48}
          />
        </FacebookShareButton>
        <TwitterShareButton
          title={mainTitle}
          url={share_url}
          hashtags={[mainTitle]}
        >
          <XIcon className={styles.socialMediaIcon} round={true} size={48} />
        </TwitterShareButton>
        <button
          className={styles.urlShareButton}
          onClick={() => {
            copy(share_url);
            alert("URL이 복사 되었습니다.");
          }}
        >
          URL
        </button>
      </div>
    </>
  );
};
