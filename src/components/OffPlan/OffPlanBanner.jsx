import Banner from "../Common/Banner";

export default function OffPlanBanner() {
  return (
    <Banner
      banner={"/assets/images/offplan/offplan-banner.jpg"}
      title={"Invest in Dubai’s Future Communities"}
      subtitle={`Unlock exclusive opportunities in Dubai’s off-plan market.
 We give you early access to visionary projects with flexible payment options, transparent guidance, and a portfolio designed to maximize growth and lifestyle value.`}
      primaryButton={{ title: "Upcoming Projects ", link: "" }}
      secondaryButton={{ title: "Speak to Our Experts", link: "contact" }}
    />
  );
}
