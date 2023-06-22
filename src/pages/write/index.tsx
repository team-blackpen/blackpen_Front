import type { GetServerSideProps } from "next";

import WriteHeader from "write/components/WriteHeader";
import WritingProcess from "write/components/WritingProcess";
import FunnelChoice from "write/components/FunnelChoice";

import Layout from "shared/elements/Layout";
import Funnel from "shared/elements/Funnel";
import useFunnel from "shared/hooks/useFunnel";

const Write = () => {
  const [step] = useFunnel({ pathName: "write", queryName: "step" });

  return (
    <>
      <WriteHeader />
      <WritingProcess step={step} />

      <Layout padding="132px 20px 20px 20px">
        <Funnel step={step}>
          <Funnel.Step page={1}>
            <FunnelChoice />
          </Funnel.Step>
          <Funnel.Step page={2}>2</Funnel.Step>
          <Funnel.Step page={3}>3</Funnel.Step>
        </Funnel>
      </Layout>
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
