import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

export default function PropertyExperience() {
  const title = "Explore Properties With KNMG";
  const content =
    "Browse our curated portfolio of featured listings. Looking for something specific? ";
  const button1 = "Discover financing options";
  const button2 = "";
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section - text */}
      <div className="bg-default text-white flex flex-col justify-center p-4 md:p-10 w-full md:w-1/2">
        {/* section 1 */}
        <Animate>
          <h2 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h2>
        </Animate>
        <Animate>
          <p className="text-lg leading-relaxed mb-6">
            {content} <strong>Get in touch</strong>, and our team will help you
            find and finance the perfect property.
          </p>
        </Animate>
        {/* <Animate>
          <button className="text-lg border border-white bg-white text-black px-8 py-4 font-semibold w-full md:w-fit hover-bg hover:text-white transition cursor-pointer">
            Find out more
          </button>
        </Animate> */}
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
