import Description from "write/elements/Description";

import Input from "shared/elements/Input";
import Layout from "shared/elements/Layout";
import Stack from "shared/elements/Stack";
import Bottom from "shared/elements/Bottom";
import BasicButton from "shared/elements/BasicButton";
import useFunnel from "shared/hooks/useFunnel";
import {
  useLetterActions,
  useSenderPhoneState,
  useSenderState,
  useStageState,
} from "shared/stores/useLetterStore";
import { useEffect } from "react";

const FunnelSender = () => {
  const nickname = useSenderState();
  const phoneNumber = useSenderPhoneState();
  const stage = useStageState();
  const { changeLetterState } = useLetterActions();

  const [, setStep] = useFunnel({ pathName: "/write", queryName: "send" });
  const handleClickNext = () => {
    setStep(3);
  };

  useEffect(() => {
    if (stage === 2) return;
    changeLetterState("stage", 2);
  }, []);

  return (
    <>
      <Layout padding="164px 20px 86px 20px">
        <Stack gap={32}>
          <Stack gap={6}>
            <Description>
              <Description.Bold>작성자</Description.Bold>님의
            </Description>
            <Description>정보를 알려주세요</Description>
          </Stack>

          <Stack gap={16}>
            <Input.Container>
              <Input.Label required>닉네임</Input.Label>
              <Input
                placeholder="최대 8글자까지 입력할 수 있어요"
                value={nickname}
                onChange={(e) => changeLetterState("sender", e.target.value)}
                maxLength={8}
                required
              />
            </Input.Container>

            <Input.Container>
              <Input.Label required>전화번호</Input.Label>
              <Input
                type="number"
                placeholder="'-'를 제외한 숫자만 입력해주세요"
                value={phoneNumber}
                onChange={(e) =>
                  changeLetterState("senderPhone", e.target.value)
                }
                maxLength={12}
                required
              />
            </Input.Container>
          </Stack>
        </Stack>
      </Layout>

      <Bottom>
        <BasicButton onClick={handleClickNext}>다음</BasicButton>
      </Bottom>
    </>
  );
};

export default FunnelSender;
