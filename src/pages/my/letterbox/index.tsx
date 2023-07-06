import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Grid from "shared/elements/Grid";
import Header from "shared/elements/Header";
import IconButton from "shared/elements/IconButton";
import Layout from "shared/elements/Layout";
import Text from "shared/elements/Text";
import CheckButton from "shared/elements/CheckButton";
import Flex from "shared/elements/Flex";
import IconBack from "shared/icons/IconBack";
import IconMeatBall from "shared/icons/IconMeatBall";
import IconTrash from "shared/icons/IconTrash";

import * as S from "./index.styles";

const LetterBox = () => {
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
    console.log("수신 페이지로 이동");
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
    if (checkedList.length === 9) {
      setCheckedList([]);
    } else {
      setCheckedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
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
          <Text variant="subtitle1">편지 보관함</Text>
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
        <Grid templateColumns="repeat(3, 1fr)" gap={1.5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <S.Item
              key={item}
              justifyContent="center"
              alignItems="center"
              onClick={
                deleteMode
                  ? () => handleClickCheck(item)
                  : () => handleClickItem()
              }
            >
              {deleteMode && (
                <CheckButton checked={checkedList.includes(item)} />
              )}

              <S.Image>
                <Image
                  src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt="post_image"
                  fill
                  sizes="90px"
                  priority
                />
              </S.Image>

              <S.Desc justifyContent="center" direction="column">
                <Text variant="caption">2023.05.10</Text>
                <Text variant="caption" truncate width="100%">
                  from.이승민이승민이승민이승민
                </Text>
              </S.Desc>
            </S.Item>
          ))}
        </Grid>
      </Layout>

      {deleteMode && (
        <S.BottomCustom height="81px" justifyContent="space-between">
          <Flex alignItems="center" gap={6} onClick={handleClickAllCheck}>
            <CheckButton checked={checkedList.length === 9} />
            <Text variant="body2">전체선택</Text>
          </Flex>

          <Text variant="body2">선택 삭제</Text>
        </S.BottomCustom>
      )}
    </>
  );
};

export default LetterBox;
