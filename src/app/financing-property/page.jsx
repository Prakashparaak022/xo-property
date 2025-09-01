import FeaturedProperties from "@/components/FeaturedProperties";
import FinanceBanner from "@/components/Finance/FinanceBanner";
import HoloIntro from "@/components/Finance/HoloIntro";
import HoloMortgageBenefits from "@/components/Finance/HoloMortgageBenefits";
import PropertyExperience from "@/components/Finance/PropertyExperience";
import LayoutStyle1 from "@/layouts/LayoutStyle1";

const Finance = () => {
  return (
    <LayoutStyle1>
      <main>
        <FinanceBanner />
        <HoloIntro />
        <HoloMortgageBenefits />
        <FeaturedProperties />
        <PropertyExperience />
      </main>
    </LayoutStyle1>
  );
};

export default Finance;
