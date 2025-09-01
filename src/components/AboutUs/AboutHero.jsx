const AboutHero = () => {
  return (
    <section className="relative flex justify-center items-center h-screen">
      {/* Background image container */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/about-us.webp)" }}></div>

      {/* Content on top of background */}
      <div className="relative w-full z-10 flex flex-col md:flex-row items-center justify-start space-x-8 py-16 px-6 md:px-30">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            The XO Property Story
          </h2>
          <p className="text-lg text-white">Get to know us.</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <button className="bg-white text-black px-6 py-3 font-medium w-fit hover:bg-black hover:text-white transition">
              List Your Property
            </button>
            <button className="border-2 border-white text-white px-6 py-3 font-medium w-fit hover:bg-black hover:border-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
