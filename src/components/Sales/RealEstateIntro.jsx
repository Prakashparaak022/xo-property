import Animate from "../Common/Animate";

const RealEstateIntro = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-10">
        <div className="lg:w-1/2 lg:px-10 ">
          <Animate>
            <h1 className="text-2xl md:text-4xl font-semibold mb-5">
              Exclusive Listings | Sell with KNMG
            </h1>
          </Animate>
        </div>

        <div className="lg:w-1/2 lg:px-10">
          <Animate>
            <p className="text-lg text-gray-700 mb-2 lg:mb-4">
              At KNMG, we bring clarity and confidence to your property journey.
              Whether you’re purchasing, investing, or preparing to sell, we
              combine market expertise with a boutique level of service to
              deliver results you can trust.
            </p>
          </Animate>

          <Animate>
            <p className="text-lg text-gray-700">
              Our specialists cover Dubai’s most prestigious communities,
              including Palm Jumeirah, Jumeirah Islands, Dubai Hills, Emirates
              Hills, Damac Hills, Tilal Al Ghaf, and beyond. With in-depth
              knowledge and a personalised approach, we guide you from first
              viewing to final handover.
            </p>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default RealEstateIntro;
