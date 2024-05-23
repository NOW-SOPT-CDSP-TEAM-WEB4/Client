import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { SearchResultItemProps } from "../../types/Search/searchTypes";
import { getCreativeSearch } from "../../utils/getCreativeSearch";

export const useGetCreativeSearch = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [dataList, setDataList] = useState<SearchResultItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const list = await getCreativeSearch(keyword);
        setDataList(list);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (keyword) {
      fetchData();
    }
  }, [keyword]);

  return { dataList, loading, error, keyword };
};
