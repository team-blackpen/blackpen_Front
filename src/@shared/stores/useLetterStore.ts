import { create } from "zustand";

interface Data {
  letterNo: number;
  status: 0 | 1; //0: 임시저장, 1: 전송
  stage: 0 | 1 | 2;
  postNo: number;
  letterContents: string;
  recipient: string;
  recipientPhone: string;
  sender: string;
  senderPhone: string;
}

interface State {
  data: Data;
}

interface Actions {
  actions: {
    changeLetterState: <T extends keyof Data>(type: T, value: Data[T]) => void;
    changeLetterClear: () => void;
  };
}

interface LetterStore extends State, Actions {}

const initialData: Data = {
  letterNo: 0,
  status: 0,
  stage: 0,
  postNo: 0,
  letterContents: "",
  recipient: "",
  recipientPhone: "",
  sender: "",
  senderPhone: "",
};

const useLetterStore = create<LetterStore>((set) => ({
  data: initialData,

  actions: {
    changeLetterState: (type, value) => {
      set((state) => ({ ...state, data: { ...state.data, [type]: value } }));
    },
    changeLetterClear: () => {
      set((state) => ({ ...state, data: initialData }));
    },
  },
}));

export default useLetterStore;

export const useStageState = () => useLetterStore((state) => state.data.stage);
export const usePostNoState = () =>
  useLetterStore((state) => state.data.postNo);
export const useLetterContentState = () =>
  useLetterStore((state) => state.data.letterContents);
export const useRecipientState = () =>
  useLetterStore((state) => state.data.recipient);
export const useRecipientPhoneState = () =>
  useLetterStore((state) => state.data.recipientPhone);
export const useSenderState = () =>
  useLetterStore((state) => state.data.sender);
export const useSenderPhoneState = () =>
  useLetterStore((state) => state.data.senderPhone);

export const useLetterState = () => useLetterStore((state) => state.data);
export const useLetterActions = () => useLetterStore((state) => state.actions);
