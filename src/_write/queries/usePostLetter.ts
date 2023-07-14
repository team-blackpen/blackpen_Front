import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import { useLetterState } from "shared/stores/useLetterStore";
import { useModalActions } from "shared/stores/useModalStore";
import api from "shared/utils/api";

const postLetter = (data: any) => {
  return api.post("/letter", data);
};

const usePostLetter = () => {
  const { replace } = useRouter();
  const {
    letterNo,
    status,
    stage,
    postNo,
    letterContents,
    recipient,
    recipientPhone,
    sender,
    senderPhone,
  } = useLetterState();
  const { changeModalState } = useModalActions();

  return useMutation(
    () =>
      postLetter({
        letter_no: letterNo,
        status: status,
        stage: stage,
        post_no: postNo,
        letter_contents: letterContents,
        info: {
          recipient: recipient,
          recipient_phone: recipientPhone,
          sender: sender,
          sender_phone: senderPhone,
        },
      }),
    {
      onSettled: () => {
        changeModalState("drafts");
      },
      onSuccess: () => {
        replace("/my/drafts");
      },
    },
  );
};

export default usePostLetter;
