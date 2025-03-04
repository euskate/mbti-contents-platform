import { useEffect, useRef } from "react";

export const AdsenseUnit = ({ slot }) => {
  const adRef = useRef(null); // 광고 태그 참조

  useEffect(() => {
    if (typeof window !== "undefined" && adRef.current) {
      if (!adRef.current.hasAttribute("data-adsbygoogle-status")) {
        // 광고가 아직 로드되지 않았다면 실행
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }, []);

  return (
    <ins
      ref={adRef} // 광고 태그를 참조
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3012834514193053"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
