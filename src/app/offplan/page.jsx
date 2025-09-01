import FAQ from "@/components/OffPlan/FAQ";
import OffPlanBanner from "@/components/OffPlan/OffPlanBanner";
import OffPlanDetails from "@/components/OffPlan/OffPlanInvestmentDetails";
import LayoutStyle1 from "@/layouts/LayoutStyle1";
import React from "react";

const OffPlan = () => {
  return (
    <LayoutStyle1>
      <main>
        <OffPlanBanner />
        <OffPlanDetails />
        <FAQ />
      </main>
    </LayoutStyle1>
  );
};

export default OffPlan;
