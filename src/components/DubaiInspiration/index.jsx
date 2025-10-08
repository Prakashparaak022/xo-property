import Animate from "../Common/Animate";

export default function DubaiInspiration() {
  const title = "Expert Guidance for UAE Property Deals";
  const content =
    "We offer expert guidance for UAE property deals, helping clients buy, sell, rent, and invest with confidence. Our team combines in-depth market knowledge, personalized advice, and a strong network of developers and investors to ensure seamless transactions, maximum value, and smart, profitable real estate decisions across Dubai, Abu Dhabi, and other emirates.";
  return (
    <section className="py-5 md:py-10">
      <div className="flex flex-col md:flex-row">
        {/* Left section - text */}
        <div className="bg-default text-white flex flex-col justify-center px-6 md:px-16 py-10 md:py-16 md:w-1/2">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h2>
          </Animate>
          <Animate>
            <p className="text-lg leading-relaxed mb-6">{content}</p>
          </Animate>
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
