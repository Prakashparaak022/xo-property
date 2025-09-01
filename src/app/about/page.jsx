import AboutHero from "@/components/AboutUs/AboutHero";
import AboutXO from "@/components/AboutUs/AboutXO";
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
        <AboutXO />
      </main>
    </LayoutStyle1>
  );
};

export default About;
