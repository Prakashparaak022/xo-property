const AboutXO = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-4 md:py-8">
      {/* Left Section - Image */}
      <div className="md:w-1/2">
        <img
          src="/assets/images/about-us/logo.webp"
          alt="Agency Team"
          className="w-full h-48 md:h-64 lg:h-80 object-cover"
        />
      </div>
      {/* Right Section - Text Content */}
      <div className="md:w-1/2 space-y-8 p-8 md:p-16">
        <h2 className="text-3xl font-semibold text-black">
          XO: The Meaning Behind the Name
        </h2>

        <div className="space-y-4">
          {/* Client-Centric Approach */}
          <div>
            <p className="text-lg text-gray-700">
              At XO, the name is as unique as your experience with us. Chosen
              for its simplicity and universal appeal, "XO" is easily spelled,
              pronounced in any language and instantly memorable.
            </p>
          </div>

          {/* Communication */}
          <div>
            <p className="text-lg text-gray-700">
              We love that its meaning is open to interpretation—whatever "XO"
              means to you, we embrace it. It’s a name that invites you to put
              your own spin on it, just as we tailor our services to meet your
              individual needs. At XO, your vision is what matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutXO;
