import Banner from "../Common/Banner";

export default function FinanceBanner() {
  return (
    <Banner
      banner={"/assets/images/finance/finance-banner.webp"}
      title={"Financing your property in Dubai"}
      subtitle={"Comprehensive mortgage options with KNMG Property and Holo."}
      primaryButton={{ title: "Explore mortgage options", link: "" }}
      secondaryButton={{ title: "Contact us", link: "contact" }}
    />
  );
}
