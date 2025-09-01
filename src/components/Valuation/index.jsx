export default function Valuation() {
  return (
<div className="flex flex-col md:flex-row h-auto md:h-[500px] pt-4 md:pt-16 gap-6 md:gap-12">
      {/* Left: Text and CTA */}
      <div className="flex flex-col justify-center px-8 md:px-16 w-full md:w-1/2 bg-white">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Ready to sell or rent your property?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Speak with us today, and one of our property agents will be in touch
          for a{" "}
          <a href="#" className="underline">
            no-obligation valuation
          </a>
          . Together, we can decide on the best strategy to support your
          property journey.
        </p>
        <button className="border border-black text-black px-6 py-3 rounded font-medium w-fit hover:bg-gray-100 transition">
          Free valuation
        </button>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img
          src="/assets/images/valuation.webp"
          alt="Real estate professionals"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}
