import Link from "next/link";
import StyledButton from "../Common/StyledButton";
import Animate from "../Common/Animate";

const ServiceValues = () => {
  const title = "Agency Team";
  const subTitle1 = "Big expertise, boutique values.";
  const subTitle2 =
    "Growth doesn’t have to come at the cost of personal service. At KNMG, we’ve proven that you can deliver both scale and a tailor-made experience.";
  const listTitle1 = "Client-Centric Approach: ";
  const listContent1 =
    "Every client has unique goals, and we build strategies around them. From curated property searches and targeted marketing for sellers to bespoke investment advice, our solutions are designed with you in mind.";
  const listTitle2 = "Clear & Consistent Communication: ";
  const listContent2 =
    "Real estate decisions can feel overwhelming, so we make it our priority to keep communication simple, personal, and transparent. Expect timely updates, personalised reports, and conversations that matter.";

  const title2 = "How We Stand Apart";
  const list = [
    {
      title: "Smart Insights: ",
      content:
        "With advanced data tools and market analytics, our team goes beyond intuition. We translate trends and client preferences into actionable advice, so you can make confident decisions",
    },
    {
      title: "Relationship-Driven Service: ",
      content:
        "For us, it’s not about closing a deal—it’s about building long-term trust. That’s why our clients return, and why they recommend KNMG to friends and family.",
    },
    {
      title: "Culture of Care: ",
      content:
        " Our work culture encourages going the extra mile. Attention to detail, client-first thinking, and high standards define every interaction, making sure you always feel the boutique touch, no matter how big we grow.",
    },
  ];
  return (
    <section className="py-4 lg:py-10 bg-white">
      {/* Section 1 */}
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/images/about-us/service-values-1.jpg"
            alt="Agency Team"
            className="w-full h-auto shadow-md max-h-[600px] object-cover object-center"
          />
        </div>
        {/* Right Section - Text Content */}
        <div className="md:w-1/2 space-y-8 px-4 py-4 md:px-10">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h2>
          </Animate>
          <Animate>
            <div>
              <p className="text-lg text-gray-700 font-bold">{subTitle1}</p>
              <p className="text-lg text-gray-700">{subTitle2}</p>
            </div>
          </Animate>

          <div className="space-y-4">
            {/* Client-Centric Approach */}
            <div>
              <Animate>
                <p className="text-lg text-gray-700">
                  <span className="text-lg font-medium text-black">
                    {listTitle1}
                  </span>
                  {listContent1}
                </p>
              </Animate>
            </div>

            {/* Communication */}
            <div>
              <Animate>
                <p className="text-lg text-gray-700">
                  <span className="text-lg font-medium text-black">
                    {listTitle2}
                  </span>
                  {listContent2}
                </p>
              </Animate>
            </div>
          </div>

          {/* Contact Button */}
          <Animate>
            <div className="mt-8">
              <Link href="/contact">
                <StyledButton variant="black-outlined">Contact Us</StyledButton>
              </Link>
            </div>
          </Animate>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full flex flex-col md:flex-row items-center bg-default">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 space-y-8 px-4 py-4 md:px-10">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5 text-white">
              {title2}
            </h2>
          </Animate>
          <div className="space-y-4">
            {/* Data-Driven Insights */}
            <Animate>
              <div>
                {list.map((item, i) => (
                  <p key={i} className="text-lg text-white mb-2">
                    <span className="text-lg font-medium">{item.title}</span>
                    {item.content}
                  </p>
                ))}
              </div>
            </Animate>
          </div>

          {/* Contact Button */}
          <Animate>
            <div className="mt-8">
              <button className="text-lg px-8 py-4 border border-white font-semibold w-full md:w-fit bg-white cursor-pointer hover:text-white hover-bg transition">
                Find out more
              </button>
            </div>
          </Animate>
        </div>
        {/* Right Section - Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/images/about-us/about-us-property.jpg"
            alt="Agency Team"
            className="w-full h-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceValues;
