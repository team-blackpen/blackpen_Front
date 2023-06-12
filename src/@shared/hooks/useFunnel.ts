import { useRouter } from "next/router";

const useFunnel = () => {
  const { pathname, query, push } = useRouter();

  const step = Number(query.step) || 1;
  const setStep = (stepNumber: number) => {
    push({ pathname, query: { ...query, step: stepNumber } }, undefined, {
      shallow: true,
    });
  };

  return [step, setStep] as const;
};

export default useFunnel;
