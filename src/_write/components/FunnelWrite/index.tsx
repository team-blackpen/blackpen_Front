import { useRef, useState, useEffect, type ChangeEvent } from "react";

import Bottom from "shared/elements/Bottom";
import BasicButton from "shared/elements/BasicButton";
import Layout from "shared/elements/Layout";
import useFunnel from "shared/hooks/useFunnel";
import {
  useLetterActions,
  useLetterContentState,
  useStageState,
} from "shared/stores/useLetterStore";
import { useModalActions } from "shared/stores/useModalStore";

import * as S from "./index.styles";

const SIZE = {
  fontSize: 16,
  lineHeight: 24,
  maxRows: 14,
  maxLength: 210,
};

const FunnelWrite = () => {
  const letter = useLetterContentState();
  const stage = useStageState();
  const { changeLetterState } = useLetterActions();

  useEffect(() => {
    if (stage === 0) return;
    changeLetterState("stage", 0);
  }, []);

  const handleChangeLetter = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const enterCount = Array.from(
      value.matchAll(/(\r\n|\n|\r|\u2028|\u2029)/g),
    ).length;

    if (enterCount > SIZE.maxRows) return;

    const scrollHeight = event.currentTarget.scrollHeight;

    if (scrollHeight > 372 - 24) return;

    changeLetterState("letterContents", value);
  };

  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;

    textRef.current.style.height = `${SIZE.lineHeight}px`;
    const scrollHeight = textRef.current.scrollHeight;
    textRef.current.style.height = `${scrollHeight}px`;
  }, [letter]);

  const [, setStep] = useFunnel({ pathName: "/write", queryName: "step" });
  const handleClickSend = () => {
    setStep(3);
  };

  const { changeModalState } = useModalActions();
  const handleClickDrafts = () => {
    changeModalState("drafts");
  };

  return (
    <>
      <Layout padding="132px 20px 86px 20px">
        <S.LetterContainer justifyContent="center" alignItems="center">
          {!isFocus && letter.length < 1 && (
            <S.Guide
              textAlign="center"
              onClick={() => textRef.current?.focus()}
            >{`여기를 누르고\n편지를 작성해보세요`}</S.Guide>
          )}

          <S.LetterItem>
            <S.TextArea
              ref={textRef}
              spellCheck={false}
              value={letter}
              onChange={handleChangeLetter}
              fontSize={SIZE.fontSize}
              lineHeight={SIZE.lineHeight}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </S.LetterItem>
        </S.LetterContainer>
      </Layout>

      <Bottom>
        <BasicButton variant="outline" onClick={handleClickDrafts}>
          임시저장
        </BasicButton>
        <BasicButton onClick={handleClickSend}>전송하기</BasicButton>
      </Bottom>
    </>
  );
};

export default FunnelWrite;
