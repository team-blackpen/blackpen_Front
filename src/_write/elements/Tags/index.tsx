import Text from "shared/elements/Text";
import * as S from "./index.styles";
import type { TagsProps } from "./index.type";

const Tags = ({ tag, height = "21px", padding = "0 4px" }: TagsProps) => {
  return (
    <S.Tags
      justifyContent="center"
      alignItems="center"
      height={height}
      padding={padding}
    >
      <Text variant="body2" fontColor="gray4" truncate>
        #{tag}
      </Text>
    </S.Tags>
  );
};

export default Tags;
