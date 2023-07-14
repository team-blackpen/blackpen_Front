import { create } from "zustand";

export type ModalType = "drafts";

type State = {
  [K in ModalType]: boolean;
};

interface Actions {
  actions: {
    changeModalState: (type: ModalType) => void;
  };
}

interface ModalState extends State, Actions {}

const useModalStore = create<ModalState>((set) => ({
  drafts: false,
  actions: {
    changeModalState: (type) => {
      set((state) => ({ ...state, [type]: !state[type] }));
    },
  },
}));

export default useModalStore;

export const useModalActions = () => useModalStore((state) => state.actions);
