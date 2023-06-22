import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";

import type { LetterItemTypes } from "write/types";
import api from "shared/utils/api";

interface GetData {
  data: {
    cate_title: string;
    postCategoryList: LetterItemTypes[];
  };
}

const getLetterListByCategory = async (
  pageParam = 1,
  categoryNumber: number,
) => {
  const { data } = await api.get<GetData>(
    `/postList/category/${categoryNumber}`,
    {
      params: { page: pageParam },
    },
  );

  return {
    data: data.data,
    nextPage: pageParam + 1,
    isLastPage: data.data.postCategoryList.length < 5,
  };
};

const useGetLetterListByCategory = () => {
  const { query } = useRouter();
  const categoryNumber = Number(query.no);

  return useInfiniteQuery(
    ["letter", "list", categoryNumber],
    ({ pageParam }) => getLetterListByCategory(pageParam, categoryNumber),
    {
      getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
      enabled: !!categoryNumber,
    },
  );
};

export default useGetLetterListByCategory;
