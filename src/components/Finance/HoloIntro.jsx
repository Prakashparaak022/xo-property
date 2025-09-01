const HoloIntro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-2 py-6 md:py-10">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-semibold md:px-8 mb-4">
          Unlock the best mortgage deals with KNMG Property and Holo.
        </h1>
      </div>

      <div className="md:w-1/2">
        <p className="text-lg text-gray-700 mb-2 md:mb-4">
          At KNMG, we’re committed to providing you with the best possible
          experience when{" "}
          <a href="#" className="underline font-semibold">
            buying a home in Dubai
          </a>
          . That’s why we’ve partnered with Holo, the first digital mortgage
          platform in the Middle East, to help you secure the best{" "}
          <span className="font-semibold">house loan in Dubai</span>.
        </p>

        <p className="text-lg text-gray-700">
          <span className="font-semibold">Holo</span> offers access to over 500
          mortgage products from all the banks in the UAE, ensuring you get the
          most competitive{" "}
          <span className="font-semibold">mortgage loan in Dubai</span>. Whether
          you’re a{" "}
          <a href="#" className="underline font-semibold">
            first-time buyer in Dubai
          </a>{" "}
          or looking to refinance, our partnership with{" "}
          <span className="font-semibold">Holo</span> makes it easier than ever
          to finance your dream home.
        </p>
      </div>
    </div>
  );
};

export default HoloIntro;
