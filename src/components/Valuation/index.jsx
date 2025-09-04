import Animate from "../Common/Animate";

export default function Valuation() {
  return (
    <section className="py-5 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left: Text and CTA */}
        <div className="flex flex-col justify-center px-6 md:px-16 w-full md:w-1/2 bg-white">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">
              Ready to sell or rent your property?
            </h2>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Speak with us today, and one of our property agents will be in
              touch for a{" "}
              <a href="#" className="underline">
                no-obligation valuation
              </a>
              . Together, we can decide on the best strategy to support your
              property journey.
            </p>
          </Animate>
          <Animate>
            <button className="text-lg border border-black px-8 py-4 font-semibold w-full md:w-fit hover-bg hover:text-white transition cursor-pointer">
              Free valuation
            </button>
          </Animate>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img
            src="/assets/images/home/sell-property.jpg"
            alt="Real estate professionals"
            className="object-cover object-center w-full h-full md:max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
