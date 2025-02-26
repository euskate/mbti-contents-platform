import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";

export const ResultThumbnailList = ({ testParam }) => {
  const [testList, setTestList] = useState(TESTS);

  return (
    <>
      {testList
        .filter((test) => test?.info?.mainUrl !== testParam)
        .map((item) => (
          <Link to={`/${item?.info.mainUrl}`} key={item?.info.mainTitle}>
            <img
              style={{ width: "100%", marginBottom: "1rem" }}
              src={item?.info?.thumbImage}
              alt={item?.info?.mainTitle}
            ></img>
          </Link>
        ))}
    </>
  );
};
