import Banner from "../Common/Banner";

export default function OffPlanBanner() {
  return (
    <Banner
      banner={"/assets/images/offplan/offplan-banner.jpg"}
      title={"Invest in Dubai’s Off-Plan Developments."}
      subtitle={`We provide access to Dubai’s leading off-plan developments, offering
            exclusive projects, flexible payment plans and expert, market-led
            guidance every step of the way.`}
      primaryButton={{ title: "Off-Plan Projects", link: "" }}
      secondaryButton={{ title: "Contact us", link: "contact" }}
    />
  );
}
