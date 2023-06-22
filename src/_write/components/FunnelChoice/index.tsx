import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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

  const { data: categoryListData } = useGetCategoryList();
  const categoryContainerRef = useRef(null);
  const [categoryX, setCategoryX] = useState({ up: 0, down: 0 });
  const handleClickCategory = (cateNo: number) => {
    if (categoryX.up !== categoryX.down) return;

    const target = listRef.current[cateNo - 1];
    if (target) {
      target.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      setCurrentTab(target);
    }
  };

  const { data: letterListData } = useGetLetterList();
  const letterListContainerRef = useRef(null);
  const [mouseX, setMouseX] = useState({ up: 0, down: 0 });
  const handleClickViewDetail = (postNo: number) => {
    if (mouseX.up !== mouseX.down) return;

    push(`/write/detail?no=${postNo}`);
  };
  const handleClickViewAll = (cateNo: number) => {
    push(`/write/category?no=${cateNo}`);
  };
  const listRef = useRef<HTMLDivElement[] | null[]>([]);

  const [currentTab, setCurrentTab] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!listRef.current.length) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentTab(entry.target as HTMLDivElement);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-181px 0px 0px -200px",
      },
    );

    listRef.current.forEach((list) => observer.observe(list as Element));

    return () => observer.disconnect();
  }, [categoryListData?.length, listRef.current.length]);

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
            <S.CategoryItem
              key={post_cate_no}
              selected={listRef.current[post_cate_no - 1] === currentTab}
              onPointerDown={(e) =>
                setCategoryX((prev) => ({ ...prev, down: e.clientX }))
              }
              onPointerUp={(e) =>
                setCategoryX((prev) => ({ ...prev, up: e.clientX }))
              }
              onClick={() => handleClickCategory(post_cate_no)}
            >
              <Text
                variant="subtitle2"
                fontColor={
                  listRef.current[post_cate_no - 1] === currentTab
                    ? "black"
                    : "gray3"
                }
              >
                {cate_title}
              </Text>
            </S.CategoryItem>
          ))}
        </S.CategoryList>
      </S.CategoryContainer>

      <S.AllLetterList gap={32}>
        {categoryListData?.map(
          ({ post_cate_no, cate_title, cate_eng_title }) => (
            <Stack
              key={post_cate_no}
              ref={(el) => (listRef.current[post_cate_no - 1] = el)}
            >
              <S.LetterListTitle
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex alignItems="center" gap={6}>
                  <Text variant="headline1">{cate_title}</Text>
                  <Text variant="headline1">{cate_eng_title}</Text>
                </Flex>

                <Link href={`/write/category?no=${post_cate_no}`}>
                  <Flex
                    alignItems="center"
                    gap={6}
                    onClick={() => handleClickViewAll(post_cate_no)}
                  >
                    <Text variant="caption" fontColor="gray3">
                      전체보기
                    </Text>
                    <IconArrow size={6} />
                  </Flex>
                </Link>
              </S.LetterListTitle>

              <S.LetterListContainer ref={letterListContainerRef}>
                <S.LetterList
                  drag="x"
                  dragConstraints={letterListContainerRef}
                  direction="row"
                  gap={20}
                >
                  {letterListData?.[post_cate_no - 1]?.map(
                    ({
                      post_no,
                      img_url,
                      post_title,
                      hashtag,
                      artist_name,
                    }) => (
                      <S.LetterItem
                        key={post_no}
                        onPointerDown={(e) =>
                          setMouseX((prev) => ({ ...prev, down: e.clientX }))
                        }
                        onPointerUp={(e) =>
                          setMouseX((prev) => ({ ...prev, up: e.clientX }))
                        }
                        onClick={() => handleClickViewDetail(post_no)}
                      >
                        <S.LetterImage
                          justifyContent="center"
                          alignItems="center"
                        >
                          <div>
                            {/* <Image
                              src={img_url}
                              alt="post_image"
                              fill
                              sizes="150px"
                              priority
                            /> */}
                          </div>
                        </S.LetterImage>

                        <S.LetterTitle truncate>{post_title}</S.LetterTitle>

                        <S.LetterTags direction="row" gap={2}>
                          {hashtag?.map(
                            ({ post_hashtag_no, hashtag_title }) => (
                              <Tags key={post_hashtag_no} tag={hashtag_title} />
                            ),
                          )}
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
              </S.LetterListContainer>
            </Stack>
          ),
        )}
      </S.AllLetterList>
    </>
  );
};

export default FunnelChoice;
