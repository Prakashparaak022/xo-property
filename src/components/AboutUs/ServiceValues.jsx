import Link from "next/link";
import StyledButton from "../Common/StyledButton";

const ServiceValues = () => {
  return (
    <section className="py-4 lg:py-10 bg-white">
      {/* Section 1 */}
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/images/about-us/service-values-1.webp"
            alt="Agency Team"
            className="w-full h-auto shadow-md max-h-[600px] object-cover object-center"
          />
        </div>
        {/* Right Section - Text Content */}
        <div className="md:w-1/2 space-y-8 px-4 py-4 md:px-10">
          <h2 className="text-2xl md:text-4xl font-semibold mb-5">
            Market leading service, boutique values:
          </h2>
          <p className="text-lg text-gray-700">
            How can an agency grow while still ensuring market leading service?
          </p>

          <div className="space-y-4">
            {/* Client-Centric Approach */}
            <div>
              <p className="text-lg text-gray-700">
                <span className="text-lg font-medium text-black">
                  Client-Centric Approach:
                </span>
                At KNMG we prioritise the individual needs of each client,
                offering tailored solutions rather than a one-size-fits-all
                service. This can include personalised property searches,
                bespoke marketing strategies for sellers and customised
                investment advice.
              </p>
            </div>

            {/* Communication */}
            <div>
              <p className="text-lg text-gray-700">
                <span className="text-lg font-medium text-black">
                  Communication:
                </span>
                We implement systems and processes that ensure regular,
                meaningful communication with clients. This includes personal
                follow-ups, customised market reports and one-on-one
                consultations, making clients feel valued and understood.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-8">
            <Link href="/contact">
              <StyledButton variant="black-outlined">Contact Us</StyledButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full flex flex-col md:flex-row items-center bg-black">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 space-y-8 px-4 py-4 md:px-10">
          <h2 className="text-2xl md:text-4xl font-semibold mb-5 text-white">
            How do we differentiate ourselves in the market?
          </h2>
          <div className="space-y-4">
            {/* Data-Driven Insights */}
            <div>
              <p className="text-lg  text-white">
                <span className="text-lg font-medium">
                  Data-Driven Insights:
                </span>
                KNMG uses advanced CRM systems and technology tools to gather
                and analyse client preferences, enabling agents to offer
                personalised property recommendations and market insights.
              </p>
            </div>

            {/* Quality Over Quantity: */}
            <div>
              <p className="text-lg  text-white">
                <span className="text-lg font-medium">Communication:</span>
                We implement systems and processes that ensure regular,
                meaningful communication with clients. This includes personal
                follow-ups, customised market reports and one-on-one
                consultations, making clients feel valued and understood.
              </p>
            </div>

            {/* Culture of Excellence: */}
            <div>
              <p className="text-lg  text-white">
                <span className="text-lg font-medium">
                  Culture of Excellence:
                </span>
                We foster a company culture that emphasises high standards,
                client satisfaction and attention to detail. We encourage agents
                to go above and beyond in serving their clients, maintaining a
                boutique level of service regardless of the company’s size.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-8">
            <button className="text-lg px-8 py-4 border border-white font-semibold w-full md:w-fit bg-white cursor-pointer hover:text-white hover:bg-black transition">
              Find out more
            </button>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/images/about-us/service-values-2.webp"
            alt="Agency Team"
            className="w-full h-auto shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceValues;
