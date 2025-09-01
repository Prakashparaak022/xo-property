export default function DubaiInspiration() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left section - text */}
      <div className="bg-black text-white flex flex-col justify-center py-4 md:py-8 px-8 md:px-16 w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Looking for inspiration?
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          <a href="#" className="underline">Explore our guide</a> to Dubai’s top areas and communities, designed to help you find the perfect place to rent or purchase. From vibrant city apartments to peaceful waterfront villas, uncover the unique attractions that each neighbourhood has to offer. <a href="#" className="underline">Let us guide you</a> in making an informed decision on where to call home in Dubai.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded font-medium w-fit hover:bg-gray-200 transition">
          Explore now
        </button>
      </div>

      {/* Right section - image */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img 
          src="/assets/images/dubai-inspiration.webp" 
          alt="Dubai landscape" 
          className="object-cover w-full h-full" 
        />
      </div>
    </div>
  );
}
