import Animate from "../Common/Animate";

export default function About() {
  return (
    <section className="py-5 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/images/home/about.webp"
            alt="Property Overview"
            className="w-full md:max-h-[600px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 px-6 lg:px-20">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">
              Your trusted partner in achieving your vision
            </h2>
          </Animate>
          <Animate>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our deep understanding of the Dubai real estate market allows us
              to provide tailored solutions that meet your unique needs. We are
              not just another{" "}
              <a className="underline">real estate brokerage in Dubai</a>; we
              are your partners who provide you with knowledge, data and
              expertise.
            </p>
          </Animate>
          <Animate>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This gives you the confidence to navigate your real estate
              journey, whether you’re a first-time buyer or a seasoned investor.
              Your vision becomes our mission.
            </p>
          </Animate>
          <Animate>
            {/* Button*/}
            <div className="flex items-center md:mt-4">
              <button className="text-lg border border-black px-8 py-4 font-semibold w-full md:w-fit hover:bg-black hover:text-white transition cursor-pointer">
                About KNMG
              </button>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
