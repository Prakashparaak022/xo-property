import Banner from "../Common/Banner";

export default function SalesBanner() {
  return (
    <Banner
      banner={"/assets/images/sales/sales-banner.jpg"}
      title={"Buy Property in Dubai with Trusted Experts"}
      subtitle={`Find your next home or investment in Dubai with KNMG Property. From
            waterfront apartments to spacious villas, our brokers will guide you
            through every step of the buying process.`}
      primaryButton={{ title: "Properties for Sale", link: "" }}
      secondaryButton={{ title: "List your property", link: "" }}
    />
  );
}
