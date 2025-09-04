import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

const PropertyOverview = () => {
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
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">
              Buy or sell with KNMG today.
            </h2>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700">
              Whether you're looking to buy a home for your family, investing in
              a property, or looking to maximise your sale price, we provide the
              right information at the right time, ensuring you're equipped to
              make the best choice.
            </p>
          </Animate>{" "}
          <Animate>
            <p className="text-lg text-gray-700">
              Our team of specialists—covering all prime areas in Dubai
              including Palm Jumeirah, Jumeirah Islands, Dubai Hills, Emirates
              Hills, Damac Hills, Tilal al Ghaf and many more—offer deep market
              insights, whether you're searching for a luxury villa or an
              apartment in an exclusive location.
            </p>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700">
              Want to finance your purchase?{" "}
              <a>Learn more about mortgage options.</a>
            </p>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700">
              Need legal support?{" "}
              <a>Our conveyancing partners are here to help.</a>
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
