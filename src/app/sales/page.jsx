import FeaturedProperties from "@/components/FeaturedProperties";
import ListProperty from "@/components/Sales/ListProperty";
import PropertyOverview from "@/components/Sales/PropertyOverview ";
import RealEstateIntro from "@/components/Sales/RealEstateIntro";
import SalesBanner from "@/components/Sales/SalesBanner";
import Stats from "@/components/Stats";
import LayoutStyle1 from "@/layouts/LayoutStyle1";

const Sales = () => {
  return (
    <LayoutStyle1>
      <main>
        <SalesBanner />
        <RealEstateIntro />
        <Stats />
        <PropertyOverview />
        <FeaturedProperties />
        <ListProperty />
      </main>
    </LayoutStyle1>
  );
};

export default Sales;
