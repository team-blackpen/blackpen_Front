import { useQuery } from "@tanstack/react-query";

import type { CategoryListTypes } from "write/types";
import api from "shared/utils/api";

const getCategoryList = async () => {
  const { data } = await api.get("/postList/category");

  return data;
};

const useGetCategoryList = () => {
  return useQuery(["letter", "category"], getCategoryList, {
    select: (data): CategoryListTypes => data.data.categoryList,
  });
};

export default useGetCategoryList;
