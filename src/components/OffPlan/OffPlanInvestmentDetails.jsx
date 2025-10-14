import Link from "next/link";
import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

const OffPlanDetails = () => {
  const title =
    "Dubai is always evolving, and off-plan property investments are one of the most exciting ways to be part of that growth.";
  const contentTitle1 = "Early Access to Tomorrow’s Landmarks";
  const content1 =
    "We connect you with Dubai’s most sought-after off-plan developments—residences designed for innovation, modern living, and long-term appreciation. Each project is carefully selected to match both personal ambitions and market potential.";
  const contentTitle2 = "Understanding Off-Plan Properties";
  const content2 =
    "Off-plan properties are purchased before or during construction, often at below-market entry points. From sleek apartments to luxury villas, these homes offer modern layouts, customization, and strong prospects for capital growth.";
  const whyText = "Why Invest Off-Plan?";
  const whyContent =
    "Key advantages of Dubai’s off-plan opportunities include:";
  const whyList = [
    {
      title: "Competitive pricing",
      content: "Enter prime locations at lower costs than ready properties.",
    },
    {
      title: "Flexible plans",
      content: "Pay in manageable, staged installments.",
    },
    {
      title: "Customization",
      content: "Choose layouts, finishes, and design details.",
    },
    {
      title: "Capital growth",
      content: "Benefit from appreciation as projects progress.",
    },
  ];
  const whyDescription =
    "With Dubai’s infrastructure boom, international demand, and thriving economy, off-plan remains one of the most attractive long-term investments.";

  const contentTitle3 = "KNMG Advantage";
  const content3 =
    "Our team grants access to a curated portfolio of off-plan projects, including exclusive launches and master-planned communities. We partner directly with trusted developers, ensuring transparency in pricing, availability, and delivery timelines.";
  const contentTitle4 = "Explore Off-Plan Opportunities";
  const content4 =
    "From waterfront residences to gated villas, our selection suits both lifestyle goals and investment strategies. We’re with you from first inquiry to handover, making the journey seamless and rewarding.";
  const button1 = "Browse Off-Plan Listings";
  const button2 = "Contact KNMG Today";

  return (
    <div className="space-y-8 p-4 md:p-10">
      <div>
        <Animate>
          <h1 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h1>
        </Animate>
      </div>
      <div>
        <Animate>
          <h2 className="text-xl font-semibold">{contentTitle1}</h2>
        </Animate>
        <Animate>
          <p className="mt-2 text-lg text-gray-700">{content1}</p>
        </Animate>
      </div>
      <div>
        <Animate>
          <h2 className="text-xl font-semibold">{contentTitle2}</h2>
        </Animate>
        <Animate>
          <p className="mt-2 text-lg text-gray-700">{content2}</p>
        </Animate>
      </div>
      <div>
        <Animate>
          <h2 className="text-xl font-semibold">{whyText}</h2>
        </Animate>
        <Animate>
          <p className="py-2 md:py-4 text-lg text-gray-700">{whyContent}</p>
        </Animate>
        <ul className="list-disc pl-5 mt-2 text-lg text-gray-700 space-y-2">
          {whyList.map((list) => (
            <Animate>
              <li>
                <span className="font-semibold">{list.title}</span>
                {`: `}
                {list.content}
              </li>
            </Animate>
          ))}
        </ul>

        <Animate>
          <p className="pt-2 md:pt-4 text-lg text-gray-700">{whyDescription}</p>
        </Animate>
      </div>
      <div>
        <Animate>
          <h2 className="text-xl font-semibold">{contentTitle3}</h2>
        </Animate>

        <Animate>
          <p className="mt-2 text-lg text-gray-700">{content3}</p>
        </Animate>
      </div>
      <div>
        <Animate>
          <h2 className="text-xl font-semibold">{contentTitle4}</h2>
        </Animate>

        <Animate>
          <p className="mt-2 text-lg text-gray-700">{content4}</p>
        </Animate>
      </div>
      <Animate>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          <StyledButton variant="black-outlined">{button1}</StyledButton>
          <Link href={"/contact-us"}>
            <StyledButton variant="black-filled">{button2}</StyledButton>
          </Link>
        </div>
      </Animate>
    </div>
  );
};

export default OffPlanDetails;
