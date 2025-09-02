import StyledButton from "../Common/StyledButton";

const HoloMortgageBenefits = () => {
  return (
    <div className="py-5 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* section 1 */}
        <div className="min-h-screen w-full md:w-1/2 bg-black flex items-center justify-center">
          <span className="text-white text-6xl md:text-8xl font-bold">
            KNMG
          </span>
        </div>

        <div className="md:w-1/2 px-4 md:px-8">
          <div className="space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-semibold">
              Why choose KNMG Property and Holo?
            </h2>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">
                Comprehensive mortgage options:
              </span>{" "}
              With <span className="font-semibold">Holo</span>, you can explore
              a wide range of{" "}
              <span className="font-semibold">
                property loan options in Dubai
              </span>
              , tailored to your financial situation.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Best mortgage rates:</span> Holo’s
              platform connects you with the{" "}
              <span className="font-semibold">
                best mortgage loans in Dubai
              </span>
              , helping you find the ideal financing solution.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">
                Effortless application process:
              </span>{" "}
              Holo’s digital platform streamlines the mortgage application
              process, making it simple and stress-free to apply for a{" "}
              <span className="font-semibold">mortgage loan in Dubai.</span>
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Expert guidance:</span> As a
              client of KNMG Property, you’ll benefit from personalised support
              throughout your home-buying journey, from finding the perfect
              property to securing the right{" "}
              <span className="font-semibold">
                <a className="underline font-semibold">
                  mortgage property in Dubai.
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="md:w-1/2 px-4 md:px-8">
          <div className="space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-semibold">Get started today!</h2>
            <p className="text-lg text-gray-700">
              Take the first step toward financing your dream home with KNMG
              Property and <span className="font-semibold">Holo.</span> Click
              the button below to explore your mortgage options and start your
              application today!
            </p>
            <StyledButton variant="black-outlined">
              Explore mortage options
            </StyledButton>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/images/finance/explore.webp"
            alt="Property Overview"
            className="w-full md:max-h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HoloMortgageBenefits;
