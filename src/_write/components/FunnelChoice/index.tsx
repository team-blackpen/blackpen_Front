import { useRef } from "react";
import { useRouter } from "next/router";

import Tags from "write/elements/Tags";
import useGetCategoryList from "write/queries/useGetCategoryList";
import useGetLetterList from "write/queries/useGetLetterList";

import Text from "shared/elements/Text";
import Stack from "shared/elements/Stack";
import Flex from "shared/elements/Flex";
import IconArrow from "shared/icons/IconArrow";

import * as S from "./index.styles";

const FunnelChoice = () => {
  const { push } = useRouter();
  const handleClickViewAll = (cateNo: number) => {
    push(`/write/category?no=${cateNo}`);
  };

  const { data: categoryListData } = useGetCategoryList();
  const { data: letterListData } = useGetLetterList();

  const categoryContainerRef = useRef(null);
  const letterListContainerRef = useRef(null);

  return (
    <>
      <S.CategoryContainer ref={categoryContainerRef}>
        <S.CategoryList
          drag="x"
          dragConstraints={categoryContainerRef}
          alignItems="center"
          gap={8}
        >
          {categoryListData?.map(({ post_cate_no, cate_title }) => (
            <S.CategoryItem key={post_cate_no}>
              <Text variant="subtitle2">{cate_title}</Text>
            </S.CategoryItem>
          ))}
        </S.CategoryList>
      </S.CategoryContainer>

      <S.LetterContainer gap={12}>
        {categoryListData?.map(
          ({ post_cate_no, cate_title, cate_eng_title }) => (
            <>
              <S.LetterListTitle
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" gap={6}>
                  <Text variant="headline1">{cate_title}</Text>
                  <Text variant="headline1">{cate_eng_title}</Text>
                </Stack>

                <Flex alignItems="center" gap={6}>
                  <Text
                    variant="caption"
                    fontColor="gray3"
                    onClick={() => handleClickViewAll(post_cate_no)}
                  >
                    전체보기
                  </Text>
                  <IconArrow size={6} />
                </Flex>
              </S.LetterListTitle>

              <S.LetterListContainer ref={letterListContainerRef}>
                <S.LetterList
                  drag="x"
                  dragConstraints={letterListContainerRef}
                  direction="row"
                  gap={20}
                >
                  {letterListData?.[post_cate_no - 1]?.map(
                    ({ post_no, post_title, hashtag, artist_name }) => (
                      <S.LetterItem gap={8} key={post_no}>
                        <S.LetterImageContainer
                          justifyContent="center"
                          alignItems="flex-end"
                        ></S.LetterImageContainer>

                        <Stack gap={2}>
                          <Text>{post_title}</Text>
                          <Stack direction="row" gap={4}>
                            {hashtag.map(
                              ({ post_hashtag_no, hashtag_title }) => (
                                <Tags
                                  key={post_hashtag_no}
                                  tag={hashtag_title}
                                />
                              ),
                            )}
                          </Stack>
                        </Stack>

                        <Stack direction="row" gap={2}>
                          <Text variant="caption" fontColor="gray5">
                            by.
                          </Text>
                          <Text variant="caption" fontColor="gray5">
                            {artist_name}
                          </Text>
                        </Stack>
                      </S.LetterItem>
                    ),
                  )}
                </S.LetterList>
              </S.LetterListContainer>
            </>
          ),
        )}
      </S.LetterContainer>
    </>
  );
};

export default FunnelChoice;
