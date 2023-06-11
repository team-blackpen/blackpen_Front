import MainCardContainer from "main/components/MainCardContainer";
import MainHeader from "main/components/MainHeader";
import TemperatureContainer from "main/components/TemperatureContainer";

import Layout from "shared/elements/Layout";

const Main = () => {
  return (
    <>
      <MainHeader />

      <Layout backgroundColor="gray1" padding="64px 20px 0 20px">
        <TemperatureContainer />
        <MainCardContainer />
      </Layout>
    </>
  );
};

export default Main;
