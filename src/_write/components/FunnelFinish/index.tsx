import { useRouter } from "next/router";

import Description from "write/elements/Description";

import BasicButton from "shared/elements/BasicButton";
import Bottom from "shared/elements/Bottom";
import Layout from "shared/elements/Layout";
import Stack from "shared/elements/Stack";

const FunnelFinish = () => {
  const { replace } = useRouter();
  const handleClickHome = () => {
    replace("/main");
  };

  return (
    <>
      <Layout padding="164px 20px 86px 20px">
        <Stack gap={6}>
          <Description>지금 바로 편지를</Description>
          <Description>
            <Description.Bold>보내드렸어요!</Description.Bold>
          </Description>
        </Stack>
      </Layout>

      <Bottom>
        <BasicButton onClick={handleClickHome}>홈으로</BasicButton>
      </Bottom>
    </>
  );
};

export default FunnelFinish;
