export default function PropertyExperience() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left section - text */}
      <div className="bg-black text-white flex flex-col justify-center py-4 md:py-8 px-8 md:px-16 w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Delivering a Smooth and Enjoyable Property Experience.
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Searching for a team of dedicated and passionate professionals to
          assist in selling or letting your property? Look no further than XO
          Property Estate Agents. Reach out to us today to discover how we can
          help you achieve your property goals.
        </p>
        <button className="bg-white border-2 border-white text-black px-10 py-3 rounded font-medium w-fit hover:bg-black hover:text-white transition">
          Find out more
        </button>
      </div>

      {/* Right section - image */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img
          src="/assets/images/finance/find-out.webp"
          alt="Dubai landscape"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
