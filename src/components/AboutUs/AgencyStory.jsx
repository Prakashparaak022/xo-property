import Animate from "../Common/Animate";

const AgencyStory = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start p-4 lg:p-10 gap-0 lg:gap-6">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-4">
        <Animate>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-5">
            KNMG was conceptualised as an agency which thrives on
            <br />
            collaboration, communication and an engaging work culture.
          </h2>
        </Animate>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 space-y-4">
        <Animate>
          <p className="text-lg text-gray-700">
            After more than 20 years in the industry, the KNMG management team
            identified a gap in the market for a personable, flexible, and
            mature agency. We are committed to preserving the boutique values on
            which we were founded, ensuring that our clients always know they
            are our top priority. For many of our clients, this will be the
            largest purchase of their lives, and we are here to support them
            throughout the entire journey.
          </p>
        </Animate>
      </div>
    </section>
  );
};

export default AgencyStory;
