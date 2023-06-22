import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import type { LetterDetailTypes } from "write/types";
import api from "shared/utils/api";

const getLetterDetail = async (letterNumber: number) => {
  const { data } = await api.get(`/post/detail/${letterNumber}`);

  return data;
};

const useGetLetterDetail = () => {
  const { query } = useRouter();
  const letterNumber = Number(query.no);

  return useQuery(
    ["letter", "detail", letterNumber],
    () => getLetterDetail(letterNumber),
    {
      enabled: !!letterNumber,
      select: (data): LetterDetailTypes => ({
        ...data.data,
        post_img: [...data.data.post_img, ...data.data.post_detail_img],
      }),
    },
  );
};

export default useGetLetterDetail;
