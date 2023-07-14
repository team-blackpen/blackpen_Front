import { useEffect, useState } from "react";

import Description from "write/elements/Description";

import BasicButton from "shared/elements/BasicButton";
import Bottom from "shared/elements/Bottom";
import Input from "shared/elements/Input";
import Layout from "shared/elements/Layout";
import Stack from "shared/elements/Stack";
import useFunnel from "shared/hooks/useFunnel";
import {
  useLetterActions,
  useRecipientPhoneState,
  useRecipientState,
  useStageState,
} from "shared/stores/useLetterStore";

const FunnelRecipient = () => {
  const nickname = useRecipientState();
  const phoneNumber = useRecipientPhoneState();
  const stage = useStageState();
  const { changeLetterState } = useLetterActions();

  const [, setStep] = useFunnel({ pathName: "/write", queryName: "send" });
  const handleClickNext = () => {
    setStep(2);
  };

  const [sequence, setSequence] = useState(1);
  useEffect(() => {
    const sequenceFirst = setTimeout(() => {
      setSequence((prev) => ++prev);
    }, 1500);

    const sequenceSecond = setTimeout(() => {
      setSequence((prev) => ++prev);
    }, 3000);

    if (stage === 1) return;
    changeLetterState("stage", 1);

    return () => {
      clearTimeout(sequenceFirst);
      clearTimeout(sequenceSecond);
    };
  }, []);

  return (
    <>
      <Layout padding="164px 20px 86px 20px">
        {sequence === 1 && (
          <Stack gap={6}>
            <Description>정성 담긴 편지를 작성하셨네요</Description>
            <Description.Bold>{`수고 많으셨어요 :)`}</Description.Bold>
          </Stack>
        )}

        {sequence === 2 && (
          <Stack gap={6}>
            <Description>편지를 전송하기 위해</Description>
            <Description>
              <Description.Bold>몇 가지 정보</Description.Bold>가 필요해요
            </Description>
          </Stack>
        )}

        {sequence === 3 && (
          <Stack gap={32}>
            <Stack gap={6}>
              <Description>
                <Description.Bold>받는 사람</Description.Bold>의
              </Description>
              <Description>정보를 알려주세요</Description>
            </Stack>

            <Stack gap={16}>
              <Input.Container>
                <Input.Label required>닉네임</Input.Label>
                <Input
                  placeholder="최대 8글자까지 입력할 수 있어요"
                  value={nickname}
                  onChange={(e) =>
                    changeLetterState("recipient", e.target.value)
                  }
                  maxLength={8}
                  required
                />
              </Input.Container>

              <Input.Container>
                <Input.Label required>전화번호</Input.Label>
                <Input
                  placeholder="'-'를 제외한 숫자만 입력해주세요"
                  type="number"
                  value={phoneNumber}
                  onChange={(e) =>
                    changeLetterState("recipientPhone", e.target.value)
                  }
                  maxLength={12}
                  required
                />
              </Input.Container>
            </Stack>
          </Stack>
        )}
      </Layout>

      {sequence === 3 && (
        <Bottom>
          <BasicButton onClick={handleClickNext}>다음</BasicButton>
        </Bottom>
      )}
    </>
  );
};

export default FunnelRecipient;
