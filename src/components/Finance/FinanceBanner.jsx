import Banner from "../Common/Banner";

export default function FinanceBanner() {
  return (
    <Banner
      banner={"/assets/images/finance/finance-banner.jpg"}
      title={"Smart Property Financing in Dubai"}
      subtitle={"Tailored home mortgage solutions with KNMG Property & Holo"}
      primaryButton={{ title: "Discover financing options", link: "" }}
      secondaryButton={{ title: "Contact us", link: "contact" }}
    />
  );
}
