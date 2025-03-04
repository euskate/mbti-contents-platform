import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";
import { CoupangDynamicBanner } from "../CoupangDynamicBanner";
import { AdsenseUnit } from "../AdsenseUnit";

export const ResultThumbnailList = ({ testParam }) => {
  const [testList, setTestList] = useState(TESTS);

  return (
    <>
      {testList
        .filter((test) => test?.info?.mainUrl !== testParam)
        .map((item, idx) => (
          <div key={item?.info.mainUrl}>
            <Link to={`/${item?.info.mainUrl}`}>
              <img
                style={{ width: "100%", marginBottom: "1rem" }}
                src={item?.info?.thumbImage}
                alt={item?.info?.mainTitle}
              ></img>
            </Link>
            {idx % 2 === 0 && <CoupangDynamicBanner unit={"resultBanner"} />}
            {idx % 2 === 0 && <AdsenseUnit slot={"8329265787"} />}
          </div>
        ))}
    </>
  );
};
