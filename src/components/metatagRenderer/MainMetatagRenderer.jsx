import React from "react";
import { base_url } from "../../App";
import { useSearchParams } from "react-router-dom";

const MainMetatagRenderer = () => {
  const [searchParams] = useSearchParams();

  // 국제화 완료되지 않음
  const language = searchParams.get("lang") || "Kor";
  if (language === "Kor") {
    return (
      <>
        {/* <!-- Primary Meta Tags --> */}
        <title>MBTI 콘텐츠 플랫폼</title>
        <meta name="title" content="MBTI 콘텐츠 플랫폼" />
        <meta
          name="description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={base_url} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={base_url} />
        <meta property="og:title" content="MBTI 콘텐츠 플랫폼" />
        <meta
          property="og:description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={base_url} />
        <meta property="twitter:title" content="MBTI 콘텐츠 플랫폼" />
        <meta
          property="twitter:description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta
          property="twitter:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
      </>
    );
  } else if (language === "JP") {
    return (
      <>
        {/* <!-- Primary Meta Tags --> */}
        <title>MBTI 콘텐츠 플랫폼</title>
        <meta name="title" content="MBTI 콘텐츠 플랫폼" />
        <meta
          name="description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={base_url} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={base_url} />
        <meta property="og:title" content="MBTI 콘텐츠 플랫폼" />
        <meta
          property="og:description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={base_url} />
        <meta property="twitter:title" content="MBTI 콘텐츠 플랫폼" />
        <meta
          property="twitter:description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta
          property="twitter:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
      </>
    );
  } else {
    return (
      <>
        {/* <!-- Primary Meta Tags --> */}
        {/* English */}
        <title>MBTI CONTENTS PLATFORM</title>
        <meta name="title" content="MBTI CONTENTS PLATFORM" />
        <meta
          name="description"
          content="A playground where you can take various MBTI tests"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={base_url + "/?lang=Eng"} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={base_url + "/?lang=Eng"} />
        <meta property="og:title" content="MBTI CONTENTS PLATFORM" />
        <meta
          property="og:description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={base_url + "?lang=Eng"} />
        <meta property="twitter:title" content="MBTI CONTENTS PLATFORM" />
        <meta
          property="twitter:description"
          content="다양한 MBTI 테스트를 할 수 있는 놀이터"
        />
        <meta
          property="twitter:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
      </>
    );
  }
};

export default MainMetatagRenderer;
