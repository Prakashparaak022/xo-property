import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

const HoloMortgageBenefits = () => {
  const whyTitle = "Why choose KNMG Property and Holo?";
  const benifitsList = [
    {
      title: "Diverse mortgage Solutions",
      content:
        "Explore a wide spectrum of property financing options designed to match your financial goals and lifestyle needs.",
    },
    {
      title: "Competitive Market Rates",
      content:
        "Get connected to the most favorable mortgage rates in Dubai, ensuring you maximize value on your investment.",
    },
    {
      title: "Seamless Digital Process",
      content:
        "From application to approval, Holo’s tech-driven platform removes complexity, making your mortgage journey efficient and hassle-free.",
    },
    {
      title: "Guidance You Can Trust",
      content:
        "At KNMG, we don’t just connect you to the right property—we stand beside you with expert advice throughout the financing process.",
    },
  ];

  const title = "Begin Your Home Journey Today";
  const content =
    "Take your first step toward effortless property ownership in Dubai. With KNMG Property and Holo, your financing experience is simplified, secure, and tailored to you.";
  const button1 = "Discover financing options";
  const button2 = " Start your application";

  return (
    <div className="py-4 md:py-10">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-0">
          {/* section 1 */}
          <Animate>
            <div className="w-full md:w-1/2 bg-default flex flex-col items-center justify-center min-h-[300px]">
              <span className="text-white text-6xl md:text-8xl font-bold">
                KNMG
              </span>
              <span className="text-white text-4xl md:text-6xl font-semibold mt-4">
                x
              </span>
              <span className="text-white text-6xl md:text-8xl font-bold mt-2">
                Holo
              </span>
            </div>
          </Animate>

          {/* section 2 */}
          <div className="md:w-1/2 p-4 md:p-10 flex items-center">
            <div className="space-y-6">
              <Animate>
                <h2 className="text-2xl md:text-4xl font-semibold mb-5">
                  {whyTitle}
                </h2>
              </Animate>
              <Animate>
                <ul className="list-disc pl-5 mt-2 text-lg text-gray-700 space-y-2">
                  {benifitsList.map((list,i) => (
                    <Animate key={i}>
                      <li>
                        <span className="font-semibold">{list.title}</span>
                        {`: `}
                        {list.content}
                      </li>
                    </Animate>
                  ))}
                </ul>
              </Animate>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="md:w-1/2 px-4 md:px-10">
            <div className="space-y-6">
              <Animate>
                <h2 className="text-2xl md:text-4xl font-semibold mb-5">
                  {title}
                </h2>
              </Animate>
              <Animate>
                <p className="text-lg text-gray-700">{content}</p>
              </Animate>
              <Animate>
                <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
                  <StyledButton variant="black-outlined">
                    {button1}
                  </StyledButton>
                  <StyledButton variant="black-filled">{button2}</StyledButton>
                </div>
              </Animate>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/finance/explore.jpg"
              alt="Property Overview"
              className="w-full md:max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoloMortgageBenefits;
