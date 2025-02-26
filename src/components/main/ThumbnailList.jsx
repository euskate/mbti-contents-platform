import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { base_url } from "../../App";
import { Link } from "react-router-dom";

function ThumbnailList() {
  const [testList] = useState(TESTS);

  return (
    <>
      {testList?.map((test) => (
        <Link
          to={`${base_url}/${test?.info?.mainUrl}`}
          key={test?.info?.mainUrl}
        >
          <img
            src={test?.info?.thumbImage}
            alt={test?.info?.mainUrl}
            style={{ width: "100%" }}
          />
        </Link>
      ))}
    </>
  );
}

export default ThumbnailList;
