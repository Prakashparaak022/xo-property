const RealEstateIntro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-2 py-6 md:py-10">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-semibold md:px-8 mb-4">
          Buying or selling, XO are your trusted real estate brokerage in Dubai.
        </h1>
      </div>

      <div className="md:w-1/2">
        <p className="text-lg text-gray-700 mb-2 md:mb-4">
          Whether buying, investing or preparing to sell, we offer the insight
          and support needed to make confident, informed decisions.
        </p>

        <p className="text-lg text-gray-700">
          Our team covers prime areas across Dubai, including Palm Jumeirah,
          Jumeirah Islands, Dubai Hills, Emirates Hills, Damac Hills, Tilal Al
          Ghaf and more. With deep market knowledge and a tailored approach, we
          help you navigate every step, from luxury villas to high-end
          apartments in the city’s most exclusive communities.
        </p>
      </div>
    </div>
  );
};

export default RealEstateIntro;
