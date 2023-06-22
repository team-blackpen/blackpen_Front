import * as S from "./index.styles";

const Login = () => {
  return (
    <S.Login>
      <a href={process.env.NEXT_PUBLIC_KAKAO_AUTH_URL}>카카오로 로그인하기</a>
    </S.Login>
  );
};

export default Login;
