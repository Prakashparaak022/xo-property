import AboutBanner from "@/components/AboutUs/AboutBanner";
import AboutKNMG from "@/components/AboutUs/AboutKNMG";
import AgencyStory from "@/components/AboutUs/AgencyStory";
import ServiceValues from "@/components/AboutUs/ServiceValues";
import LayoutStyle1 from "@/layouts/LayoutStyle1";

const About = () => {
  return (
    <LayoutStyle1>
      <main>
        <AboutBanner />
        <AgencyStory />
        <ServiceValues />
        <AboutKNMG />
      </main>
    </LayoutStyle1>
  );
};

export default About;
