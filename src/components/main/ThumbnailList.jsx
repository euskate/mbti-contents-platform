import { useEffect, useState } from "react";
import { TESTS } from "../../data/TESTS";
import { base_url } from "../../App";
import { Link, useSearchParams } from "react-router-dom";

function ThumbnailList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [testList, setTestList] = useState(TESTS);

  useEffect(() => {
    const currentLanguage = searchParams.get("lang") || "Kor";

    console.log(currentLanguage);
    if (currentLanguage) {
      const languageFilteredTest = TESTS.filter(
        (test) => test?.info?.lang === currentLanguage
      );
      setTestList(languageFilteredTest);
    }
  }, [searchParams]);

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
