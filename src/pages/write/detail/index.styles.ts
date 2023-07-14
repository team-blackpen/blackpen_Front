import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Stack from "shared/elements/Stack";
import Flex from "shared/elements/Flex";

export const ImageContainer = styled(Swiper)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
  `}

  position: relative;
  min-height: 382px;
  aspect-ratio: 375 / 382;
`;

export const PaginationContainer = styled(Flex)`
  position: absolute;
  bottom: 14px;

  width: 100%;
`;

export const Pagination = styled.div<{ page: boolean }>`
  ${({ theme, page }) => css`
    background-color: ${page ? theme.colors.gray5 : theme.colors.gray2};
  `}

  width: 6px;
  height: 6px;
  border-radius: 999px;
`;

export const Image = styled(SwiperSlide)`
  display: flex;
  justify-content: center;

  div {
    position: relative;

    margin-top: 24px;
    width: calc(100% - 61px);
    height: calc(100% - 52px);

    filter: drop-shadow(1.19318px 1.67045px 2.38636px rgba(0, 0, 0, 0.2));

    img {
      object-fit: contain;
    }
  }
`;

export const DetailInfo = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray2};
  `}

  position: relative;

  padding: 24px 20px 17px 20px;

  span:nth-of-type(2) {
    margin-top: 4px;
  }
`;

export const DetailTags = styled(Stack)`
  margin-top: 17px;
  height: 27px;
`;

export const DetailDescription = styled.div`
  padding: 20px;

  span:nth-of-type(2) {
    margin-top: 8px;
  }
`;
