import { useQuery } from "@tanstack/react-query";

import type { LetterListTypes } from "write/types";
import api from "shared/utils/api";

const getLetterList = async () => {
  const { data } = await api.get("/postList");

  return data;
};

const useGetLetterList = () => {
  return useQuery(["letter", "list"], getLetterList, {
    select: (data): LetterListTypes => data.data.postList,
  });
};

export default useGetLetterList;
