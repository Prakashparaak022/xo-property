const AboutKNMG = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-4 md:py-10">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center min-h-[300px]">
        <span className="text-6xl md:text-9xl font-bold">KNMG</span>
      </div>
      {/* Right Section - Text Content */}
      <div className="md:w-1/2 space-y-8 px-4 md:px-10">
        <h2 className="text-3xl font-semibold text-black">
          KNMG: The Meaning Behind the Name
        </h2>

        <div className="space-y-4">
          {/* Client-Centric Approach */}
          <div>
            <p className="text-lg text-gray-700">
              At KNMG, the name is as unique as your experience with us. Chosen
              for its simplicity and universal appeal, "KNMG" is easily spelled,
              pronounced in any language and instantly memorable.
            </p>
          </div>

          {/* Communication */}
          <div>
            <p className="text-lg text-gray-700">
              We love that its meaning is open to interpretation—whatever "KNMG"
              means to you, we embrace it. It’s a name that invites you to put
              your own spin on it, just as we tailor our services to meet your
              individual needs. At KNMG, your vision is what matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKNMG;
