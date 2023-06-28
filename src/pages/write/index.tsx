import type { GetServerSideProps } from "next";

import WriteHeader from "write/components/WriteHeader";
import WritingProcess from "write/components/WritingProcess";
import FunnelChoice from "write/components/FunnelChoice";
import FunnelWrite from "write/components/FunnelWrite";

import Funnel from "shared/elements/Funnel";
import useFunnel from "shared/hooks/useFunnel";

const Write = () => {
  const [step] = useFunnel({ pathName: "write", queryName: "step" });

  return (
    <>
      <WriteHeader />
      <WritingProcess step={step} />

      <Funnel step={step}>
        <Funnel.Step page={1}>
          <FunnelChoice />
        </Funnel.Step>

        <Funnel.Step page={2}>
          <FunnelWrite />
        </Funnel.Step>

        <Funnel.Step page={3}>3</Funnel.Step>
      </Funnel>
    </>
  );
};

export default Write;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { step } = query;

  if (step && Number(step) > 3) {
    return {
      redirect: {
        destination: "/write",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
