import { useEffect, useRef } from "react";

export const CoupangDynamicBanner = ({ unit }) => {
  const unitMapper = {
    introBanner: {
      src: "https://ads-partners.coupang.com/widgets.html?id=843994&template=carousel&trackingCode=AF6308038&subId=&width=300&height=300&tsource",
      width: "300",
      height: "300",
    },
    resultBanner: {
      src: "https://ads-partners.coupang.com/widgets.html?id=843994&template=carousel&trackingCode=AF6308038&subId=&width=300&height=300&tsource",
      width: "300",
      height: "300",
    },
  };
  return (
    <>
      <iframe
        src={unitMapper[unit].src}
        width={unitMapper[unit].width}
        height={unitMapper[unit].height}
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
      ></iframe>
    </>
  );
};
