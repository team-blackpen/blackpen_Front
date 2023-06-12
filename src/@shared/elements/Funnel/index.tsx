import { Children, isValidElement, type PropsWithChildren } from "react";

import type { FunnelProps, StepProps } from "./index.types";

const Funnel = ({ children, step }: PropsWithChildren<FunnelProps>) => {
  const stepChildren = Children.toArray(children).find(
    (child) => isValidElement(child) && child.props.page === step,
  );

  return <>{stepChildren}</>;
};

const Step = ({ children }: PropsWithChildren<StepProps>) => {
  return <>{children}</>;
};

Funnel.Step = Step;
export default Funnel;
