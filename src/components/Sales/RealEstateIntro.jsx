import Animate from "../Common/Animate";

const RealEstateIntro = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-10">
        <div className="lg:w-1/2 lg:px-10 ">
          <Animate>
            <h1 className="text-2xl md:text-4xl font-semibold mb-5">
              Buying or selling, KNMG are your trusted real estate brokerage in
              Dubai.
            </h1>
          </Animate>
        </div>

        <div className="lg:w-1/2 lg:px-10">
          <Animate>
            <p className="text-lg text-gray-700 mb-2 lg:mb-4">
              Whether buying, investing or preparing to sell, we offer the
              insight and support needed to make confident, informed decisions.
            </p>
          </Animate>

          <Animate>
            <p className="text-lg text-gray-700">
              Our team covers prime areas across Dubai, including Palm Jumeirah,
              Jumeirah Islands, Dubai Hills, Emirates Hills, Damac Hills, Tilal
              Al Ghaf and more. With deep market knowledge and a tailored
              approach, we help you navigate every step, from luxury villas to
              high-end apartments in the city’s most exclusive communities.
            </p>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default RealEstateIntro;
