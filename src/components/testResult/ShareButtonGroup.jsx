import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { base_url } from "../../App";

export const ShareButtonGroup = ({
  testParam,
  resultParam,
  renderTestInfo,
}) => {
  const share_url = `${base_url}/${testParam}/result/${resultParam}`;
  const mainTitle = renderTestInfo?.info?.mainTitle;
  return (
    <>
      <h1>친구에게 공유하기</h1>
      <FacebookShareButton url={share_url} hashtag={`#${mainTitle}`}>
        <FacebookIcon round={true} size={48} />
      </FacebookShareButton>
      <TwitterShareButton
        title={mainTitle}
        url={share_url}
        hashtags={[mainTitle]}
      >
        <XIcon round={true} size={48} className={``} />
      </TwitterShareButton>
    </>
  );
};
