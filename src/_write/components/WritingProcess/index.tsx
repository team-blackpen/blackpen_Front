import Flex from "shared/elements/Flex";
import Grid from "shared/elements/Grid";
import Text from "shared/elements/Text";

import type { WritingProcessProps } from "./index.types";
import * as S from "./index.styles";

const PROCESS = [
  {
    page: 1,
    title: "편지지 선택",
  },
  {
    page: 2,
    title: "편지 작성",
  },
  {
    page: 3,
    title: "편지 전송",
  },
];

const WritingProcess = ({ step }: WritingProcessProps) => {
  const isStep = (page: number) => {
    return step >= page || (!step && page === 1);
  };

  return (
    <S.WritingProcess>
      <Grid templateColumns="repeat(3, 1fr)">
        {PROCESS.map(({ page, title }) => (
          <Flex key={page} direction="column" alignItems="center" gap={4}>
            <S.PageNumber
              justifyContent="center"
              alignItems="center"
              backgroundColor={isStep(page) ? "black" : "gray3"}
            >
              <Text variant="caption" fontColor="white">
                {page}
              </Text>
            </S.PageNumber>

            <Text
              variant="caption"
              fontColor={isStep(page) ? "black" : "gray3"}
            >
              {title}
            </Text>
          </Flex>
        ))}
      </Grid>

      <S.Slider>
        <S.Track step={step} />
      </S.Slider>
    </S.WritingProcess>
  );
};

export default WritingProcess;
