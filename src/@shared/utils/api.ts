import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getCookie("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

interface GetLoginData {
  data: {
    accessToken: string;
    nickname: string;
    user_no: number;
  };
}

export const kakaoLogin = async (code: string) => {
  const { data } = await api.get<GetLoginData>("/auth/kakao/callback", {
    params: { code },
  });

  setCookie("token", data.data.accessToken);
  setCookie("nickname", data.data.nickname);
  setCookie("userNo", data.data.user_no);
};
