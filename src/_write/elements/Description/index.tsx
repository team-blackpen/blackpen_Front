import type { PropsWithChildren } from "react";

import Text from "shared/elements/Text";

const Description = ({ children }: PropsWithChildren) => {
  return (
    <Text display="flex" variant="headline2">
      {children}
    </Text>
  );
};

const Bold = ({ children }: PropsWithChildren) => {
  return (
    <Text display="flex" variant="main">
      {children}
    </Text>
  );
};

Description.Bold = Bold;
export default Description;
