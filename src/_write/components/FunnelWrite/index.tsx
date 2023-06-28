import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { EffectFade } from "swiper";
import type { SwiperRef } from "swiper/react";

import Bottom from "shared/elements/Bottom";
import BasicButton from "shared/elements/BasicButton";
import useFunnel from "shared/hooks/useFunnel";
import IconNavi from "shared/icons/iconNavi";

import * as S from "./index.styles";

const FunnelWrite = () => {
  const [font, setFont] = useState({
    fontSize: 16,
    lineHeight: 19,
    maxRows: 17,
    maxLength: 270,
  });

  const [, setStep] = useFunnel({ pathName: "/write", queryName: "step" });

  const swiperRef = useRef<SwiperRef>(null);

  const [letter, setLetter] = useState(["1"]);
  const textRef = useRef<HTMLTextAreaElement[] | null[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const activeTextarea = textRef.current[activeIndex];

    if (!activeTextarea) return;

    activeTextarea.style.height = `${font.lineHeight}px`;
    const scrollHeight = activeTextarea.scrollHeight;
    activeTextarea.style.height = `${scrollHeight}px`;
  }, [activeIndex, letter[activeIndex], font.fontSize]);

  const handleClickAdd = () => {
    setLetter((prev) => [...prev, ""]);
  };

  const handleChangeLetter = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const enterCount = Array.from(
      value.matchAll(/(\r\n|\n|\r|\u2028|\u2029)/g),
    ).length;

    if (enterCount > font.maxRows) return;

    const scrollHeight = event.currentTarget.scrollHeight;

    if (scrollHeight > 372 - 24) return;

    setLetter((prev) =>
      prev.map((text, idx) => (idx === activeIndex ? value : text)),
    );
  };

  return (
    <>
      <S.LetterContainer justifyContent="center" alignItems="center">
        <S.LetterList
          ref={swiperRef}
          effect="fade"
          modules={[EffectFade]}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        >
          {letter.map((text, index) => (
            <S.LetterItem key={index}>
              <S.TextArea
                ref={(el) => (textRef.current[index] = el)}
                spellCheck={false}
                value={text}
                onChange={handleChangeLetter}
                fontSize={font.fontSize}
                lineHeight={font.lineHeight}
              />
            </S.LetterItem>
          ))}
        </S.LetterList>

        {letter.length > 1 && activeIndex !== 0 && (
          <S.NaviPrev onClick={() => swiperRef.current?.swiper.slidePrev()}>
            <IconNavi />
          </S.NaviPrev>
        )}

        {letter.length > 1 && activeIndex !== letter.length - 1 && (
          <S.NaviNext onClick={() => swiperRef.current?.swiper.slideNext()}>
            <IconNavi />
          </S.NaviNext>
        )}
      </S.LetterContainer>

      {letter.length > 1 && (
        <S.PaginationContainer justifyContent="center" gap={6}>
          {letter.map((_, index) => (
            <S.Pagination key={index} page={activeIndex === index} />
          ))}
        </S.PaginationContainer>
      )}

      <S.ButtonCatiner justifyContent="center">
        <BasicButton
          onClick={handleClickAdd}
          width="244px"
          height="40px"
          color="gray1"
          fontColor="black"
          fontVariant="subtitle2"
        >
          페이지 추가
        </BasicButton>
      </S.ButtonCatiner>

      <Bottom>
        <BasicButton variant="outline">임시저장</BasicButton>
        <BasicButton onClick={() => setStep(3)}>전송하기</BasicButton>
      </Bottom>

      {/* <button
        onClick={() =>
          setFont({
            fontSize: 16,
            lineHeight: 28,
            maxRows: 17,
            maxLength: 270,
          })
        }
      >
        16으로
      </button>

      <button
        onClick={() => {
          setFont({
            fontSize: 24,
            lineHeight: 28,
            maxRows: 12,
            maxLength: 120,
          });

          const newLetter = [];
          const letterString = letter.join("");

          for (let i = 0; i < letterString.length; i += 120) {
            newLetter.push(letterString.slice(i, i + 120));
          }

          setLetter(newLetter);
        }}
      >
        24로
      </button> */}
    </>
  );
};

export default FunnelWrite;
