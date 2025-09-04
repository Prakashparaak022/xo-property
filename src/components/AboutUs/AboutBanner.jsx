import Banner from "../Common/Banner";

export default function AboutBanner() {
  return (
    <Banner
      banner={"/assets/images/about-us/about-us-banner.jpg"}
      title={"The KNMG Property Story"}
      subtitle={"Get to know us."}
      primaryButton={{ title: "List Your Property", link: "" }}
      secondaryButton={{ title: "Contact us", link: "contact" }}
    />
  );
}
