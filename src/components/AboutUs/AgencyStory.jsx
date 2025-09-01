const AgencyStory = () => {
  return (
    <section className="flex justify-center items-center py-16 px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start space-x-8">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-semibold text-black">
            XO was conceptualised as an agency which thrives on
            <br />
            collaboration, communication and an engaging work culture.
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-lg text-gray-700">
            After more than 20 years in the industry, the XO management team
            identified a gap in the market for a personable, flexible, and
            mature agency. We are committed to preserving the boutique values
            on which we were founded, ensuring that our clients always know
            they are our top priority. For many of our clients, this will be
            the largest purchase of their lives, and we are here to support
            them throughout the entire journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgencyStory;
