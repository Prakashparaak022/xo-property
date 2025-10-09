import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

const PropertyOverview = () => {
  const title = "Why Choose KNMG";
  const content1 = "Smarter decisions, smoother journeys.";
  const content2 =
    "From family homes to investment portfolios, we provide the insights and tools you need to buy or sell with confidence.";
  const content3 =
    "Our expert team covers Dubai’s most in-demand areas, offering tailored advice whether you’re searching for a beachfront villa or a luxury apartment in the heart of the city.";
  const listTitle1 =
    "Looking for financing? Our mortgage partners offer competitive solutions.";
  const listTitle2 =
    "Need legal guidance? Our conveyancing network ensures a seamless transfer.";

  return (
    <div className="flex flex-col md:flex-row justify-between items-start py-5 md:py-10 gap-4">
      <div className="md:w-1/2">
        <img
          src="/assets/images/sales/feature-property.jpg"
          alt="Property Overview"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
      <div className="md:w-1/2">
        <div className="space-y-6 px-4 md:px-6">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h2>
          </Animate>
          <Animate>
            <div>
              <p className="text-lg text-gray-700">
                <span className="font-bold">{content1}{" "}</span>
                {content2}
              </p>
            </div>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700">{content3}</p>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700">
              {listTitle1}
            </p>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700">
              {listTitle2}
            </p>
          </Animate>
          <Animate>
            <StyledButton variant="black-outlined">
              Properties for sale
            </StyledButton>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
