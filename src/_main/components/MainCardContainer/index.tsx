import MainCardItem from "main/elements/MainCardItem";
import Text from "shared/elements/Text";
import IconLetter from "shared/icons/IconLetter";

import * as S from "./index.styles";

const DRAFTS = [
  {
    id: 1,
    contents: "To. 승현아 안녕",
    createDt: "15:08",
  },
  {
    id: 2,
    contents: "여러분 우리 이제 헤어질 시간",
    createDt: "12:54",
  },
  {
    id: 3,
    contents: "우리가 만난지 벌써",
    createDt: "1일전",
  },
];

const MainCardContainer = () => {
  return (
    <S.MainCardContainer gap={20}>
      <MainCardItem href="/write">
        <MainCardItem.Header title={`편지 작성\n하러가기`} />
        <MainCardItem.Contents justifyContent="flex-end" alignItems="flex-end">
          <IconLetter />
        </MainCardItem.Contents>
      </MainCardItem>

      <MainCardItem href="/main">
        <MainCardItem.Header title={`선물 구경\n하러가기`} />
        <MainCardItem.Contents justifyContent="flex-end" alignItems="flex-end">
          이미지
        </MainCardItem.Contents>
      </MainCardItem>

      <MainCardItem href="/main">
        <MainCardItem.Header title="기념일" />
        <MainCardItem.Contents justifyContent="center" alignItems="center">
          이미지
        </MainCardItem.Contents>
      </MainCardItem>

      <MainCardItem href="/main">
        <MainCardItem.Header title="글감 추천" />
        <MainCardItem.Contents alignItems="center">
          <Text variant="body2">
            {`곧 크리스마스가\n다가와요! 크리스마스\n편지 글감을 추천해드려요.`}
          </Text>
        </MainCardItem.Contents>
      </MainCardItem>

      <MainCardItem href="/main">
        <MainCardItem.Header title="편지함" />
        <MainCardItem.Contents justifyContent="center" alignItems="center">
          <Text variant="body2" textAlign="center">
            새로 온 편지가 있어요
          </Text>
        </MainCardItem.Contents>
      </MainCardItem>

      <MainCardItem href="/main">
        <MainCardItem.Header title="임시저장" />
        <MainCardItem.Contents
          direction="column"
          justifyContent="flex-end"
          alignItems="stretch"
        >
          {DRAFTS.map(({ id, contents, createDt }) => (
            <S.DraftsItem
              key={id}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text variant="body2" truncate width="100px">
                {contents}
              </Text>
              <Text variant="caption" width="30px" textAlign="right">
                {createDt}
              </Text>
            </S.DraftsItem>
          ))}
        </MainCardItem.Contents>
      </MainCardItem>
    </S.MainCardContainer>
  );
};

export default MainCardContainer;
