import Animate from "../Common/Animate";

export default function DubaiInspiration() {
  return (
    <section className="py-5 md:py-10">
      <div className="flex flex-col md:flex-row">
        {/* Left section - text */}
        <div className="bg-default text-white flex flex-col justify-center px-6 md:px-16 py-10 md:py-16 md:w-1/2">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">
              Looking for inspiration?
            </h2>
          </Animate>
          <Animate>
            <p className="text-lg leading-relaxed mb-6">
              <a href="#" className="underline">
                Explore our guide
              </a>{" "}
              to Dubai’s top areas and communities, designed to help you find
              the perfect place to rent or purchase. From vibrant city
              apartments to peaceful waterfront villas, uncover the unique
              attractions that each neighbourhood has to offer.{" "}
              <a href="#" className="underline">
                Let us guide you
              </a>{" "}
              in making an informed decision on where to call home in Dubai.
            </p>
          </Animate>{" "}
          <Animate>
            <button className="text-lg border border-white bg-white text-black px-8 py-4 font-semibold w-full md:w-fit hover-bg hover:text-white transition cursor-pointer">
              Explore now
            </button>
          </Animate>
        </div>

        {/* Right section - image */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img
            src="/assets/images/home/dubai-inspiration.jpg"
            alt="Dubai landscape"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
