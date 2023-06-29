import FunnelRecipient from "write/components/FunnelRecipient";
import FunnelSender from "write/components/FunnelSender";
import FunnelReservation from "write/components/FunnelReservation";

import Funnel from "shared/elements/Funnel";
import useFunnel from "shared/hooks/useFunnel";

const FunnelSend = () => {
  const [step] = useFunnel({ pathName: "/write", queryName: "send" });

  return (
    <Funnel step={step}>
      <Funnel.Step page={1}>
        <FunnelRecipient />
      </Funnel.Step>

      <Funnel.Step page={2}>
        <FunnelSender />
      </Funnel.Step>

      <Funnel.Step page={3}>
        <FunnelReservation />
      </Funnel.Step>
    </Funnel>
  );
};

export default FunnelSend;
