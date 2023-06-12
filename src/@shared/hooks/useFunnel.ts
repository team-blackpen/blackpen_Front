import { useRouter } from "next/router";

interface Types {
  queryName: string;
}

const useFunnel = ({ queryName }: Types) => {
  const { pathname, query, push } = useRouter();

  const step = Number(query[queryName]) || 1;
  const setStep = (stepNumber: number) => {
    push(
      { pathname, query: { ...query, [queryName]: stepNumber } },
      undefined,
      {
        shallow: true,
      },
    );
  };

  return [step, setStep] as const;
};

export default useFunnel;
