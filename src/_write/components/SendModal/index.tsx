import { Dialog } from "@headlessui/react";

import Description from "write/elements/Description";
import Stack from "shared/elements/Stack";
import useModal from "shared/hooks/useModal";

import * as S from "./index.styles";
import Bottom from "shared/elements/Bottom";
import BasicButton from "shared/elements/BasicButton";
import { useRouter } from "next/router";

const SendModal = () => {
  const { isOpen, handleChange } = useModal("send");

  const { replace } = useRouter();
  const handleClickHome = () => {
    replace("/main");
  };

  return (
    <Dialog open={isOpen} onClose={handleChange}>
      <S.Panel>
        <Stack gap={6}>
          <Description>지금 바로 편지를</Description>
          <Description>
            <Description.Bold>보내드렸어요!</Description.Bold>
          </Description>
        </Stack>

        <Bottom>
          <BasicButton onClick={handleClickHome}>홈으로</BasicButton>
        </Bottom>
      </S.Panel>
    </Dialog>
  );
};

export default SendModal;
