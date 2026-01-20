import OffersBanner from "@/components/Offers/OffersBanner";
import OffersContent from "@/components/Offers/OffersContent";
import OffPlanDetails from "@/components/OffPlan/OffPlanInvestmentDetails";
import LayoutStyle1 from "@/layouts/LayoutStyle1";
import { binghattiEliteData } from "@/assets/json/binghattiEliteData";
import React from "react";

const BinghattiElite = () => {
  return (
    <LayoutStyle1>
      <main>
        <OffersBanner />
        <OffersContent data={binghattiEliteData} />
      </main>
    </LayoutStyle1>
  );
};

export default BinghattiElite;
