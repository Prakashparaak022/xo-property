import Animate from "../Common/Animate";

export default function About() {
  const title = "Your Gateway to Exclusive UAE Properties";
  const content1 =
    "Our UAE real estate brokerage offers personalized solutions for buying, selling, and renting properties across Dubai, Abu Dhabi, and other emirates. We specialize in investment advisory, property management, and lease services, ensuring seamless transactions and maximum value.";
  const content2 =
    "With in-depth market knowledge, a client-focused approach, and a strong network of developers and investors, we help clients make informed property decisions. Trust us to guide you through every step, turning your real estate goals into reality.";
  return (
    <section className="py-5 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/images/home/about.jpg"
            alt="Property Overview"
            className="w-full md:max-h-[600px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 px-6 lg:px-20">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h2>
          </Animate>
          <Animate>
            <p className="text-gray-700 mb-4 leading-relaxed">{content1}</p>
          </Animate>
          <Animate>
            <p className="text-gray-700 mb-6 leading-relaxed">{content2}</p>
          </Animate>
          <Animate>
            {/* Button*/}
            <div className="flex items-center md:mt-4">
              <button className="text-lg border border-black px-8 py-4 font-semibold w-full md:w-fit hover-bg hover:text-white transition cursor-pointer">
                About KNMG
              </button>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
