import type { WishButtonProps } from "./index.types";
import * as S from "./index.styles";

const WishButton = ({
  wish = false,
  size = 28,
  position = "absolute",
  top = "",
  bottom = "",
  left = "",
  right = "",
  ...props
}: WishButtonProps) => {
  return (
    <S.WishButton
      wish={wish}
      size={size}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      {...props}
    >
      <svg
        width="50%"
        height="50%"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.85889 1.453L6.85144 2.40851L5.84436 1.453C5.18662 0.841417 4.32173 0.501465 3.42358 0.501465C2.52544 0.501465 1.66068 0.841417 1.00293 1.453C0.686623 1.74619 0.434288 2.10157 0.261719 2.49683C0.0891492 2.89209 0 3.31873 0 3.75002C0 4.1813 0.0891492 4.60794 0.261719 5.0032C0.434288 5.39846 0.686623 5.75382 1.00293 6.04701L6.85291 11.9795L12.7029 6.04701C13.0192 5.75382 13.2715 5.39846 13.4441 5.0032C13.6167 4.60794 13.7058 4.1813 13.7058 3.75002C13.7058 3.31873 13.6167 2.89209 13.4441 2.49683C13.2715 2.10157 13.0192 1.74619 12.7029 1.453C12.0451 0.840591 11.1797 0.500122 10.2809 0.500122C9.38212 0.500122 8.51672 0.840591 7.85889 1.453Z"
          fill="currentColor"
        />
      </svg>
    </S.WishButton>
  );
};

export default WishButton;
