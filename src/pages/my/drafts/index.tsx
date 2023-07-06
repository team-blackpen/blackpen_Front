import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Header from "shared/elements/Header";
import IconButton from "shared/elements/IconButton";
import Layout from "shared/elements/Layout";
import Text from "shared/elements/Text";
import CheckButton from "shared/elements/CheckButton";
import Flex from "shared/elements/Flex";
import Stack from "shared/elements/Stack";
import IconBack from "shared/icons/IconBack";
import IconMeatBall from "shared/icons/IconMeatBall";
import IconTrash from "shared/icons/IconTrash";

import * as S from "./index.styles";
import IconAnnounce from "shared/icons/IconAnnounce";

const Drafts = () => {
  const [popover, setPopover] = useState(false);
  const handleClickMeatball = () => {
    setPopover((prev) => !prev);
  };

  const [deleteMode, setDeleteMode] = useState(false);
  const handleClickPopover = () => {
    setPopover((prev) => !prev);
    setDeleteMode(true);
  };

  const handleClickItem = () => {
    console.log("작성 페이지로 이동");
  };

  const [checkedList, setCheckedList] = useState<number[]>([]);
  const handleClickCheck = (no: number) => {
    if (checkedList.includes(no)) {
      setCheckedList(checkedList.filter((item) => item !== no));
    } else {
      setCheckedList((prev) => [...prev, no]);
    }
  };

  const handleClickAllCheck = () => {
    if (checkedList.length === 3) {
      setCheckedList([]);
    } else {
      setCheckedList([1, 2, 3]);
    }
  };

  const { back } = useRouter();
  const handleClickBack = () => {
    back();
  };

  const handleClickCancel = () => {
    setCheckedList([]);
    setDeleteMode(false);
  };

  return (
    <>
      <Header>
        <Header.Left>
          <IconButton
            icon={<IconBack />}
            onClick={deleteMode ? handleClickCancel : handleClickBack}
          />
        </Header.Left>
        <Header.Center>
          <Text variant="subtitle1">임시저장 목록</Text>
        </Header.Center>

        {!deleteMode && (
          <Header.Right>
            <IconButton icon={<IconMeatBall />} onClick={handleClickMeatball} />
          </Header.Right>
        )}

        <S.Pop open={popover} onClose={handleClickMeatball}>
          <S.Panel onClick={handleClickPopover}>
            <Text variant="body2">편지 삭제</Text>
            <IconTrash />
          </S.Panel>
        </S.Pop>
      </Header>

      <Layout padding={`64px 0 ${deleteMode ? "81px" : "20px"} 0`}>
        <S.Announce justifyContent="center" alignItems="center" gap={6}>
          <IconAnnounce />
          <Text variant="subtitle2" fontColor="white">
            임시저장 목록은 24시간 보관 후 자동 삭제 돼요
          </Text>
        </S.Announce>

        <Stack>
          {[1, 2, 3].map((item) => (
            <S.Item
              key={item}
              templateColumns="120px auto"
              onClick={
                deleteMode
                  ? () => handleClickCheck(item)
                  : () => handleClickItem()
              }
            >
              {deleteMode && (
                <CheckButton checked={checkedList.includes(item)} />
              )}

              <S.ImageContainer justifyContent="center" alignItems="center">
                <S.Image>
                  <Image
                    src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                    alt="post_image"
                    fill
                    sizes="90px"
                    priority
                  />
                </S.Image>
              </S.ImageContainer>

              <S.Desc justifyContent="center" direction="column" gap={4}>
                <Text variant="subtitle1">1시간 전</Text>
                <Text variant="body2" fontColor="gray4" truncate lineClamp={3}>
                  숱한 나무들 무성히 무성히 우거진 산마루에 금빛 기름진 햇살은
                  내려오고, 둥둥 산을 넘어 흰 구름 걷는 자리 씻기는
                  하하하하하하하하
                </Text>
              </S.Desc>
            </S.Item>

            // <S.Item
            //   key={item}
            //   justifyContent="center"
            //   alignItems="center"

            // >

            // </S.Item>
          ))}
        </Stack>
      </Layout>

      {deleteMode && (
        <S.BottomCustom height="81px" justifyContent="space-between">
          <Flex alignItems="center" gap={6} onClick={handleClickAllCheck}>
            <CheckButton checked={checkedList.length === 3} />
            <Text variant="body2">전체선택</Text>
          </Flex>

          <Text variant="body2">선택 삭제</Text>
        </S.BottomCustom>
      )}
    </>
  );
};

export default Drafts;
