import Animate from "../Common/Animate";

const AgencyStory = () => {
  const content1 =
    "KNMG was founded with a clear vision—to bring warmth, trust, and innovation into the real estate experience. After two decades of navigating the property market, our leadership team noticed a gap: clients needed not just agents, but true partners who could combine expertise with empathy.";
  const content2 =
    "We built KNMG to be more than an agency. We are a team committed to listening, guiding, and ensuring every client feels supported through one of life’s most important decisions. Whether it’s buying your first home, selling an investment, or finding the perfect property match, we’re here to make the journey effortless and rewarding.";
  return (
    <section className="w-full flex flex-col lg:flex-row items-start p-4 lg:p-10 gap-0 lg:gap-6">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-4">
        <Animate>
          <h2 className="text-lg lg:text-xl font-semibold">{content1}</h2>
        </Animate>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 space-y-4">
        <Animate>
          <p className="text-lg text-gray-700">{content2}</p>
        </Animate>
      </div>
    </section>
  );
};

export default AgencyStory;
