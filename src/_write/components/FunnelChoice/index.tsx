import { useRef } from "react";
import type { CategoryListTypes } from "src/_write/types";

import Funnel from "shared/elements/Funnel";
import Text from "shared/elements/Text";
import Stack from "shared/elements/Stack";
import Flex from "shared/elements/Flex";
import IconArrow from "shared/icons/IconArrow";

import type { FunnelChoiceProps } from "./index.types";
import * as S from "./index.styles";
import Tags from "src/_write/elements/Tags";

const CATEGORY_LIST: CategoryListTypes = [
  { post_cate_no: 1, post_cate_title: "새로운", view_seq: 0 },
  { post_cate_no: 2, post_cate_title: "감사", view_seq: 1 },
  { post_cate_no: 3, post_cate_title: "축하", view_seq: 2 },
];

const FunnelChoice = ({ page }: FunnelChoiceProps) => {
  const categoryContainerRef = useRef(null);
  const letterContainerRef = useRef(null);

  return (
    <Funnel.Step page={page}>
      <S.CategoryContainer ref={categoryContainerRef}>
        <S.CategoryList
          drag="x"
          dragConstraints={categoryContainerRef}
          alignItems="center"
          gap={8}
        >
          {CATEGORY_LIST.map(({ post_cate_no, post_cate_title }) => (
            <S.CategoryItem key={post_cate_no}>
              <Text variant="subtitle2">{post_cate_title}</Text>
            </S.CategoryItem>
          ))}
        </S.CategoryList>
      </S.CategoryContainer>

      <S.LetterContainer gap={12}>
        <S.LetterListTitle alignItems="center" justifyContent="space-between">
          <Stack direction="row" gap={6}>
            <Text variant="headline1">새로운</Text>
          </Stack>

          <Flex alignItems="center" gap={6}>
            <Text variant="caption" fontColor="gray3">
              전체보기
            </Text>
            <IconArrow size={6} />
          </Flex>
        </S.LetterListTitle>

        <S.LetterListContainer ref={letterContainerRef}>
          <S.LetterList
            drag="x"
            dragConstraints={letterContainerRef}
            direction="row"
            gap={20}
          >
            <S.LetterItem gap={8}>
              <S.LetterImageContainer
                justifyContent="center"
                alignItems="flex-end"
              ></S.LetterImageContainer>

              <Stack gap={2}>
                <Text>너의 생일을 축하해</Text>
                <Stack direction="row" gap={4}>
                  {["태그", "해시", "설정"].map((tag, idx) => (
                    <Tags key={idx} tag={tag} />
                  ))}
                </Stack>
              </Stack>

              <Stack direction="row" gap={2}>
                <Text>by.</Text>
                <Text variant="caption" fontColor="gray5">
                  닉네임
                </Text>
              </Stack>
            </S.LetterItem>
          </S.LetterList>
        </S.LetterListContainer>
      </S.LetterContainer>
    </Funnel.Step>
  );
};

export default FunnelChoice;
