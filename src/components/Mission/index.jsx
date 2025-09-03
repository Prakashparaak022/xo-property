import { FaBook, FaBriefcase, FaSearch } from "react-icons/fa";
import Animate from "../Common/Animate";

export default function Mission() {
  const title =
    "Our mission at KNMG is to empower you. Selecting the right property is one of the most important decisions you'll ever make.";
  const content1 = `As one of the leading real estate companies in Dubai, our mission extends beyond simply selling or renting properties; we strive to equip you with the knowledge, insights, market data, and confidence necessary to make informed decisions that align with your aspirations.`;
  const content2 = `Finding reliable real estate agents in Dubai can be overwhelming due to the abundance of choices. At KNMG, we prioritize transparency and clarity, guiding you through every step of the process. Whether you're buying, selling, renting, or managing property, our team of highly skilled real estate brokers is here to ensure that your experience is seamless and stress-free.`;
  const exploreList = [
    {
      icon: FaSearch,
      title: "Find a Property",
    },
    {
      icon: FaBook,
      title: "Book a Property Valuation",
    },
    {
      icon: FaBriefcase,
      title: "Careers at KNMG Property",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-5 lg:p-10 gap-4">
      {/* Left Column */}
      <Animate>
        <div className="lg:w-[70%]">
          <h1 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h1>
          <p className="text-lg mb-4 text-gray-800">{content1}</p>
          <p className="text-lg mb-6 text-gray-800">{content2}</p>
          <button className="text-lg border border-black px-8 py-4 font-semibold w-full md:w-fit hover:bg-black hover:text-white transition cursor-pointer">
            Meet Our Team
          </button>
        </div>
      </Animate>

      {/* Right Column */}

      <Animate>
        <div className="lg:w-[30%] flex justify-center items-start">
          <div className="w-full">
            <h2 className="font-semibold text-2xl md:text-4xl mb-4">
              Explore KNMG Property
            </h2>
            <ul className="space-y-4 md:p-2">
              {exploreList.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-gray-200 rounded-full p-3 mr-3 flex items-center justify-center">
                    <item.icon className="text-[#453932] text-xl md:text-2xl" />
                  </div>
                  <a
                    href="#"
                    className="underline text-gray-700 text-lg pb-1 border-b-2 border-transparent hover:border-gray-700 inline-block transition">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Animate>
    </div>
  );
}
