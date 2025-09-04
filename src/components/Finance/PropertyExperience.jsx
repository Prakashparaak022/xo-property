import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

export default function PropertyExperience() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section - text */}
      <div className="bg-default text-white flex flex-col justify-center p-4 md:p-10 w-full md:w-1/2">
        {/* section 1 */}
        <Animate>
          <h2 className="text-2xl md:text-4xl font-semibold mb-5">
            Delivering a Smooth and Enjoyable Property Experience.
          </h2>
        </Animate>
        <Animate>
          <p className="text-lg leading-relaxed mb-6">
            Searching for a team of dedicated and passionate professionals to
            assist in selling or letting your property? Look no further than
            KNMG Property Estate Agents. Reach out to us today to discover how
            we can help you achieve your property goals.
          </p>
        </Animate>
        <Animate>
          <StyledButton variant="white-filled">Find out more</StyledButton>
        </Animate>
      </div>

      {/* Right section - image */}
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img
          src="/assets/images/finance/find-out.jpg"
          alt="Dubai landscape"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
