import AboutHero from "@/components/AboutUs/AboutHero";
import AboutKNMG from "@/components/AboutUs/AboutKNMG";
import AgencyStory from "@/components/AboutUs/AgencyStory";
import ServiceValues from "@/components/AboutUs/ServiceValues";
import LayoutStyle1 from "@/layouts/LayoutStyle1";

const About = () => {
  return (
    <LayoutStyle1>
      <main>
        <AboutHero />
        <AgencyStory />
        <ServiceValues />
        <AboutKNMG />
      </main>
    </LayoutStyle1>
  );
};

export default About;
