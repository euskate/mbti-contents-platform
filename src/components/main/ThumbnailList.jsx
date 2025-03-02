import { useEffect, useState } from "react";
import { TESTS } from "../../data/TESTS";

import { Link, useSearchParams } from "react-router-dom";

function ThumbnailList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [testList, setTestList] = useState(TESTS);

  useEffect(() => {
    const currentLanguage = searchParams.get("lang") || "Kor";
    const currentCategory = searchParams.get("cat");
    if (currentCategory) {
      const FilteredTest = TESTS.filter(
        (test) =>
          test?.info?.lang === currentLanguage &&
          test?.info.category === currentCategory
      );
      setTestList(FilteredTest);
    } else {
      const FilteredTest = TESTS.filter(
        (test) => test?.info?.lang === currentLanguage
      );
      setTestList(FilteredTest);
    }
  }, [searchParams]);

  return (
    <>
      {testList?.map((test) => (
        <Link
          to={`/${test?.info?.mainUrl}`}
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
