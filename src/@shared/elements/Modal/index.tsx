import type { PropsWithChildren } from "react";
import useModal from "shared/hooks/useModal";

import type { ModalProps } from "./index.types";
import * as S from "./index.styles";

const Modal = ({ modalType, children }: PropsWithChildren<ModalProps>) => {
  const { isOpen, handleChangeModal } = useModal(modalType);

  return (
    <S.ModalContainer open={isOpen} onClose={handleChangeModal}>
      <S.ModalPanel>{children}</S.ModalPanel>
    </S.ModalContainer>
  );
};

const ModalDescription = ({ children }: PropsWithChildren) => {
  return <S.ModalDescription as="div">{children}</S.ModalDescription>;
};

const ModalButton = ({ children }: PropsWithChildren) => {
  return <S.ModalButton gap={8}>{children}</S.ModalButton>;
};

Modal.Description = ModalDescription;
Modal.Button = ModalButton;
export default Modal;
