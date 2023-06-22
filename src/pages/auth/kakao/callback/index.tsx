import { useEffect } from "react";
import { useRouter } from "next/router";

import { kakaoLogin } from "shared/utils/api";

const KakaoCallback = () => {
  const { replace, query } = useRouter();
  const code = query.code;

  useEffect(() => {
    if (!code) return;

    kakaoLogin(String(code)).then(() => replace("/main"));
  }, [code]);

  return <></>;
};

export default KakaoCallback;
