import Banner from "../Common/Banner";

export default function SalesBanner() {
  return (
    <Banner
      banner={"/assets/images/sales/sales-banner.jpg"}
      title={"Invest in Dubai Real Estate with Confidence"}
      subtitle={`Find your dream property with KNMG Property. From stunning waterfront residences to contemporary villas, our experienced advisors make the process of buying in Dubai simple, transparent, and rewarding.`}
      primaryButton={{ title: "Properties for Sale", link: "" }}
      secondaryButton={{ title: "List your property", link: "" }}
    />
  );
}
