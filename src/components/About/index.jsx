import Image from "next/image";
export default function About() {
  return (
    <section className="w-full h-screen bg-white py-4 sm:py-8 lg:py-16">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/about.webp"
            alt="Team"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center px-6 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Your trusted partner in achieving your vision
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our deep understanding of the Dubai real estate market allows us to
            provide tailored solutions that meet your unique needs. We are not
            just another{" "}
            <span className="underline">real estate brokerage in Dubai</span>;
            we are your partners who provide you with knowledge, data and
            expertise.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            This gives you the confidence to navigate your real estate journey,
            whether you’re a first-time buyer or a seasoned investor. Your
            vision becomes our mission.
          </p>

          {/* Button*/}
          <div className="flex items-center gap-6 mt-6">
            <button className="border border-black px-6 py-3 text-black font-medium hover:bg-black hover:text-white transition">
              About XO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
