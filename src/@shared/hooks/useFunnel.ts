import { useRouter } from "next/router";

interface Types {
  queryName: string;
  pathName: string;
}

const useFunnel = ({ queryName, pathName }: Types) => {
  const { query, push } = useRouter();

  const step = Number(query[queryName]) || 1;
  const setStep = (stepNumber: number) => {
    push(
      {
        pathname: pathName,
        query: { step: query.step, [queryName]: stepNumber },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  return [step, setStep] as const;
};

export default useFunnel;
