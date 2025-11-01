import { FaComments, FaHome, FaSearch } from "react-icons/fa";
import Animate from "../Common/Animate";

export default function Mission() {
  const title = "At KNMG, your property journey is our passion.";
  const subTitle =
    "Finding the right home or investment isn’t just a transaction—it’s about shaping your future, lifestyle, and peace of mind.";
  const content1 = `Dubai’s real estate market offers endless opportunities, and at KNMG Properties, we’re here to simplify the journey. We listen, understand, and guide you toward the home or investment that truly matches your needs.`;
  const content2 = `From your first apartment to a luxury villa or off-plan project, we go beyond listings with insights and market expertise. Our goal is to make every step smooth, stress-free, and rewarding—because we’re more than agents, we’re your partners in property.`;
  const exploreList = [
    {
      icon: FaSearch,
      title: "Get Personalized Property Matches",
    },
    {
      icon: FaComments,
      title: "Chat with a Property Expert",
    },
    {
      icon: FaHome,
      title: "Request Private Showing",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-5 lg:p-10 gap-4 md:gap-10">
      {/* Left Column */}
      <Animate>
        <div className="lg:w-[70%]">
          <h1 className="text-2xl md:text-4xl font-semibold mb-1">{title}</h1>
          <h1 className="text-xl md:text-3xl mb-5">{subTitle}</h1>
          <p className="text-lg mb-4 text-gray-800">{content1}</p>
          <p className="text-lg mb-6 text-gray-800">{content2}</p>
          <button className="text-lg border border-black px-8 py-4 font-semibold w-full md:w-fit hover-bg hover:text-white transition cursor-pointer">
            Meet Our Team
          </button>
        </div>
      </Animate>

      {/* Right Column */}

      <div className="lg:w-[30%] flex justify-center items-start">
        <div className="w-full">
          <Animate>
            <h2 className="font-semibold text-2xl md:text-4xl mb-4">
              Explore KNMG Property
            </h2>
          </Animate>
          <ul className="space-y-4 md:p-2">
            {exploreList.map((item, index) => (
              <Animate key={index}>
                <li key={index} className="flex items-center">
                  <div className="bg-default rounded-full p-3 mr-3 flex items-center justify-center">
                    <item.icon className="text-gray-200 text-xl" />
                  </div>
                  <a href="#" className="text-gray-700 text-lg underline">
                    {item.title}
                  </a>
                </li>
              </Animate>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
