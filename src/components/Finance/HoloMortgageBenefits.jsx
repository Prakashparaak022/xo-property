import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

const HoloMortgageBenefits = () => {
  return (
    <div className="py-4 md:py-10">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-0">
          {/* section 1 */}
          <Animate>
            <div className="w-full md:w-1/2 bg-default flex flex-col items-center justify-center min-h-[300px]">
              <span className="text-white text-6xl md:text-8xl font-bold">
                KNMG
              </span>
              <span className="text-white text-4xl md:text-6xl font-semibold mt-4">
                x
              </span>
              <span className="text-white text-6xl md:text-8xl font-bold mt-2">
                Holo
              </span>
            </div>
          </Animate>

          {/* section 2 */}
          <div className="md:w-1/2 p-4 md:p-10 flex items-center">
            <div className="space-y-6">
              <Animate>
                <h2 className="text-2xl md:text-4xl font-semibold mb-5">
                  Why choose KNMG Property and Holo?
                </h2>
              </Animate>
              <Animate>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">
                    Comprehensive mortgage options:
                  </span>{" "}
                  With <span className="font-semibold">Holo</span>, you can
                  explore a wide range of{" "}
                  <span className="font-semibold">
                    property loan options in Dubai
                  </span>
                  , tailored to your financial situation.
                </p>
              </Animate>{" "}
              <Animate>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Best mortgage rates:</span>{" "}
                  Holo’s platform connects you with the{" "}
                  <span className="font-semibold">
                    best mortgage loans in Dubai
                  </span>
                  , helping you find the ideal financing solution.
                </p>
              </Animate>{" "}
              <Animate>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">
                    Effortless application process:
                  </span>{" "}
                  Holo’s digital platform streamlines the mortgage application
                  process, making it simple and stress-free to apply for a{" "}
                  <span className="font-semibold">mortgage loan in Dubai.</span>
                </p>
              </Animate>{" "}
              <Animate>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Expert guidance:</span> As a
                  client of KNMG Property, you’ll benefit from personalised
                  support throughout your home-buying journey, from finding the
                  perfect property to securing the right{" "}
                  <span className="font-semibold">
                    <a className="underline font-semibold">
                      mortgage property in Dubai.
                    </a>
                  </span>
                </p>
              </Animate>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="md:w-1/2 px-4 md:px-10">
            <div className="space-y-6">
              <Animate>
                <h2 className="text-2xl md:text-4xl font-semibold mb-5">
                  Get started today!
                </h2>
              </Animate>
              <Animate>
                <p className="text-lg text-gray-700">
                  Take the first step toward financing your dream home with KNMG
                  Property and <span className="font-semibold">Holo.</span>{" "}
                  Click the button below to explore your mortgage options and
                  start your application today!
                </p>
              </Animate>
              <Animate>
                <StyledButton variant="black-outlined">
                  Explore mortage options
                </StyledButton>
              </Animate>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/finance/explore.jpg"
              alt="Property Overview"
              className="w-full md:max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoloMortgageBenefits;
