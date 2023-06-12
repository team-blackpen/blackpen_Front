import { useQuery } from "@tanstack/react-query";
import api from "shared/utils/api";

const getCategoryList = async () => {
  const { data } = await api.get("/postList/category");

  return data;
};

const useGetCategoryList = () => {
  return useQuery(["letter", "category"], getCategoryList);
};

export default useGetCategoryList;
