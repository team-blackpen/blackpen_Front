import { useRouter } from "next/router";
import BasicButton from "shared/elements/BasicButton";
import Modal from "shared/elements/Modal";
import Text from "shared/elements/Text";
import { useLetterActions } from "shared/stores/useLetterStore";
import usePostLetter from "write/queries/usePostLetter";

const ModalDrafts = () => {
  const { replace } = useRouter();
  const { changeLetterClear } = useLetterActions();
  const handleClickDelete = () => {
    changeLetterClear();
    replace("/main");
  };

  const { mutate } = usePostLetter();
  const handleClickDrafts = () => {
    mutate();
  };

  return (
    <Modal modalType="drafts">
      <Modal.Description>
        <Text textAlign="center">{`페이지를 벗어나면 작성중인 데이터가\n삭제돼요. 임시저장 해드릴까요?`}</Text>
      </Modal.Description>
      <Modal.Button>
        <BasicButton
          fontVariant="subtitle2"
          variant="outline"
          onClick={handleClickDelete}
        >
          삭제
        </BasicButton>
        <BasicButton fontVariant="subtitle2" onClick={handleClickDrafts}>
          임시저장
        </BasicButton>
      </Modal.Button>
    </Modal>
  );
};

export default ModalDrafts;
