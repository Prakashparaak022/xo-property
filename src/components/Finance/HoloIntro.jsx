import Animate from "../Common/Animate";

const HoloIntro = () => {
  const contentLeft =
    "Buying a property in Dubai is an exciting milestone, and financing it should be just as smooth. At KNMG, we’ve partnered with Holo—the region’s first fully digital mortgage platform—to ensure you secure the best home mortgage deals in the UAE.";
  const contentRight =
    "With access to over 500 mortgage products across UAE banks, Holo makes it easy to compare, apply, and lock in competitive rates. Whether you’re stepping into your first home or refinancing an existing property, our partnership ensures financing your dream home is seamless, transparent, and stress-free.";
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-10 gap-4 lg:gap-10">
      <div className="lg:w-1/2">
        <Animate>
          <h1 className="text-lg lg:text-xl font-semibold">{contentLeft}</h1>
        </Animate>
      </div>

      <div className="lg:w-1/2">
        <Animate>
          <p className="text-lg text-gray-700">{contentRight}</p>
        </Animate>
      </div>
    </div>
  );
};

export default HoloIntro;
