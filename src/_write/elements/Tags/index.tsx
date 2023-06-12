import Text from "shared/elements/Text";
import * as S from "./index.styles";
import type { TagsProps } from "./index.type";

const Tags = ({ tag }: TagsProps) => {
  return (
    <S.Tags justifyContent="center" alignItems="center">
      <Text variant="body2" fontColor="gray4">
        #{tag}
      </Text>
    </S.Tags>
  );
};

export default Tags;
