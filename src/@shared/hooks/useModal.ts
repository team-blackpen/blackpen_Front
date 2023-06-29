import { useEffect } from "react";

import type { ModalType } from "shared/stores/useModalStore";
import useModalStore, { useModalActions } from "shared/stores/useModalStore";

const useModal = (type: ModalType) => {
  const isOpen = useModalStore((state) => state[type]);
  const { changeModalState } = useModalActions();

  const handleChange = () => {
    changeModalState(type);
  };

  useEffect(() => {
    return () => {
      if (isOpen) {
        changeModalState(type);
      }
    };
  }, [isOpen]);

  return { isOpen, handleChange };
};

export default useModal;
