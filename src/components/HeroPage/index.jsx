export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/hero-page.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left text-white px-4 pl-10">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Luxury Property Brokers in Dubai
        </h1>
        <p className="text-base md:text-xl mb-8 max-w-3xl">
          Empowering you with knowledge and guidance. We help you navigate your real estate journey with confidence.
        </p>

        {/* Search Bar */}
        <div className="bg-white text-black color-black rounded-md shadow-lg flex flex-wrap md:flex-nowrap items-center gap-2 p-3 md:p-4 w-full max-w-5xl">
          <select className="rounded-md px-3 py-2 w-full md:w-auto">
            <option>Buy</option>
            <option>Rent</option>
          </select>
          <input
            type="text"
            placeholder="City, building or community"
            className="flex-grow border-[0.5px] border-gray-400 rounded-md px-3 py-2"
          />
          <select className="border border-gray-400 px-3 py-2 w-full md:w-auto mr-2 rounded">
            <option>Price</option>
          </select>
          <select className="border border-gray-400 px-3 py-2 w-full md:w-auto mr-2 rounded">
            <option>Beds</option>
          </select>
          <select className="border border-gray-400 px-3 py-2 w-full md:w-auto mr-2 rounded">
            <option>All Types</option>
          </select>
          <button className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
