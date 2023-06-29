import Description from "write/elements/Description";

import BasicButton from "shared/elements/BasicButton";
import Bottom from "shared/elements/Bottom";
import Layout from "shared/elements/Layout";
import Stack from "shared/elements/Stack";
import { useModalActions } from "shared/stores/useModalStore";

const FunnelReservation = () => {
  const { changeModalState } = useModalActions();
  const handleClickSend = () => {
    changeModalState("send");
  };

  return (
    <>
      <Layout padding="164px 20px 148px 20px">
        <Stack gap={6}>
          <Description>특별한 시간에</Description>
          <Description>
            <Description.Bold>예약전송</Description.Bold>해드릴까요?
          </Description>
        </Stack>
      </Layout>

      <Bottom direction="column" gap={8} height="148px">
        <BasicButton>예약 전송</BasicButton>
        <BasicButton variant="outline" onClick={handleClickSend}>
          예약 없이 바로 전송
        </BasicButton>
      </Bottom>
    </>
  );
};

export default FunnelReservation;
