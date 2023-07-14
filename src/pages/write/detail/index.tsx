import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Tags from "write/elements/Tags";
import useGetLetterDetail from "write/queries/useGetLetterDetail";

import Header from "shared/elements/Header";
import IconButton from "shared/elements/IconButton";
import Layout from "shared/elements/Layout";
import Text from "shared/elements/Text";
import Bottom from "shared/elements/Bottom";
import BasicButton from "shared/elements/BasicButton";
import WishButton from "shared/elements/WishButton";
import useFunnel from "shared/hooks/useFunnel";
import IconBack from "shared/icons/IconBack";
import { useLetterActions } from "shared/stores/useLetterStore";

import * as S from "./index.styles";

const ViewDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: detailData } = useGetLetterDetail();

  const { changeLetterState } = useLetterActions();
  const [, setStep] = useFunnel({ pathName: "/write", queryName: "step" });
  const handleClickStep = () => {
    if (!detailData) return;

    changeLetterState("postNo", detailData.post_no);
    setStep(2);
  };

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
          <Text variant="subtitle1">편지지 상세페이지</Text>
        </Header.Center>
      </Header>

      <Layout padding="64px 0 86px 0">
        {detailData && (
          <>
            <S.ImageContainer
              onSlideChange={(e) => setActiveIndex(e.activeIndex)}
            >
              {detailData.post_img.map(({ img_url }, idx) => (
                <S.Image key={idx}>
                  <div>
                    <Image
                      src={img_url}
                      alt="post_image"
                      fill
                      sizes="314px"
                      priority
                    />
                  </div>
                </S.Image>
              ))}

              {detailData.post_img.length > 1 && (
                <S.PaginationContainer justifyContent="center" gap={6}>
                  {detailData.post_img.map((_, index) => (
                    <S.Pagination key={index} page={activeIndex === index} />
                  ))}
                </S.PaginationContainer>
              )}
            </S.ImageContainer>

            <S.DetailInfo>
              <WishButton
                wish={!!detailData.wish}
                size={40}
                top="20px"
                right="20px"
              />

              <Text variant="headline2">{detailData.post_title}</Text>

              <Text variant="body2" fontColor="gray5">
                {`작가_ ${detailData.artist_name}`}
              </Text>

              <S.DetailTags direction="row" gap={4.5}>
                {detailData.hashtag?.map(
                  ({ post_hashtag_no, hashtag_title }) => (
                    <Tags
                      key={post_hashtag_no}
                      tag={hashtag_title}
                      height="27px"
                      padding="0 10px"
                    />
                  ),
                )}
              </S.DetailTags>
            </S.DetailInfo>

            <S.DetailDescription>
              <Text variant="subtitle1">작품설명</Text>

              <Text>{detailData.post_description}</Text>
            </S.DetailDescription>
          </>
        )}
      </Layout>

      <Bottom>
        <BasicButton variant="outline">미리보기</BasicButton>
        <BasicButton onClick={handleClickStep}>편지쓰기</BasicButton>
      </Bottom>
    </>
  );
};

export default ViewDetail;
