import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default api;

export const kakaoLogin = async (code: string) => {
  const { data } = await api.get("/auth/kakao/callback", { params: { code } });

  console.log(data);
};
