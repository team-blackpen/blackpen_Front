import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Stack from "shared/elements/Stack";

export const ImageContainer = styled(Swiper)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgGray};
  `}

  min-height: 382px;
  aspect-ratio: 375 / 382;
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
