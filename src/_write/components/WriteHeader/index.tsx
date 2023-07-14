import { useRouter } from "next/router";

import Header from "shared/elements/Header";
import IconButton from "shared/elements/IconButton";
import Text from "shared/elements/Text";
import IconBack from "shared/icons/IconBack";
import {
  useLetterContentState,
  useRecipientPhoneState,
  useRecipientState,
  useSenderPhoneState,
  useSenderState,
} from "shared/stores/useLetterStore";
import { useModalActions } from "shared/stores/useModalStore";

const HEADER_TITLE = {
  "1": "편지지 선택",
  "2": "편지 작성",
  "3": "편지 전송",
};

const WriteHeader = () => {
  const { back, query } = useRouter();
  const stepQuery = String(query.step || "1") as keyof typeof HEADER_TITLE;

  const isLetterContents = useLetterContentState();
  const isRecipient = useRecipientState();
  const isRecipientPhone = useRecipientPhoneState();
  const isSender = useSenderState();
  const isSenderPhone = useSenderPhoneState();

  const { changeModalState } = useModalActions();
  const handleClickBack = () => {
    if (stepQuery === "2" && isLetterContents) {
      changeModalState("drafts");
    } else if (stepQuery === "3" && (isRecipient || isRecipientPhone)) {
      changeModalState("drafts");
    } else if (stepQuery === "3" && (isSender || isSenderPhone)) {
      changeModalState("drafts");
    } else {
      back();
    }
  };

  return (
    <Header>
      <Header.Left>
        <IconButton icon={<IconBack />} onClick={handleClickBack} />
      </Header.Left>
      <Header.Center>
        <Text variant="subtitle1">{HEADER_TITLE[stepQuery]}</Text>
      </Header.Center>
    </Header>
  );
};

export default WriteHeader;
