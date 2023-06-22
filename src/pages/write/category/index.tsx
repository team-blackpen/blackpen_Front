import { useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Tags from "write/elements/Tags";
import useGetLetterListByCategory from "write/queries/useGetLetterListByCategory";

import Layout from "shared/elements/Layout";
import Header from "shared/elements/Header";
import IconButton from "shared/elements/IconButton";
import Text from "shared/elements/Text";
import IconBack from "shared/icons/IconBack";

import * as S from "./index.styles";

const ViewCategory = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } =
    useGetLetterListByCategory();

  const categoryNameData = useMemo(
    () => (data ? data.pages[0].data.cate_title : ""),
    [data],
  );

  const letterListData = useMemo(
    () =>
      data ? data.pages.flatMap((page) => page.data.postCategoryList) : [],
    [data],
  );

  const { back } = useRouter();
  const handleClickBack = () => {
    back();
  };

  return (
    <>
      <Header>
        <Header.Left>
          <IconButton icon={<IconBack />} onClick={handleClickBack} />
        </Header.Left>
        <Header.Center>
          <Text variant="subtitle1">{categoryNameData}</Text>
        </Header.Center>
      </Header>

      <Layout padding="64px 20px 20px 20px">
        <S.LetterList rowGap={32} columnGap={20}>
          {letterListData?.map(
            ({ post_no, img_url, post_title, hashtag, artist_name }) => (
              <S.LetterItem key={post_no} href={`/write/detail?no=${post_no}`}>
                <S.LetterImage justifyContent="center" alignItems="center">
                  <div>
                    <Image
                      src={img_url}
                      alt="post_image"
                      fill
                      sizes="150px"
                      priority
                    />
                  </div>
                </S.LetterImage>

                <S.LetterTitle truncate>{post_title}</S.LetterTitle>

                <S.LetterTags direction="row" gap={2}>
                  {hashtag?.map(({ post_hashtag_no, hashtag_title }) => (
                    <Tags key={post_hashtag_no} tag={hashtag_title} />
                  ))}
                </S.LetterTags>

                <S.LetterArtist direction="row" gap={2}>
                  <Text variant="caption" fontColor="gray5">
                    by.
                  </Text>
                  <Text variant="caption" fontColor="gray5">
                    {artist_name}
                  </Text>
                </S.LetterArtist>
              </S.LetterItem>
            ),
          )}
        </S.LetterList>
      </Layout>
    </>
  );
};

export default ViewCategory;
