import { useRouter } from "next/router";
import { useEffect } from "react";
import type { ModalType } from "shared/stores/useModalStore";
import useModalStore, { useModalActions } from "shared/stores/useModalStore";

const useModal = (type: ModalType) => {
  const isOpen = useModalStore((state) => state[type]);
  const { changeModalState } = useModalActions();

  const handleChangeModal = () => {
    changeModalState(type);
  };

  const handleClickHistoryBack = () => {
    if (!isOpen) return;
    changeModalState(type);
  };

  const { events } = useRouter();
  useEffect(() => {
    if (!isOpen) return;

    events.on("routeChangeStart", handleClickHistoryBack);
    return () => {
      events.off("routeChangeStart", handleClickHistoryBack);
    };
  }, [type, isOpen]);

  return { isOpen, handleChangeModal };
};

export default useModal;
