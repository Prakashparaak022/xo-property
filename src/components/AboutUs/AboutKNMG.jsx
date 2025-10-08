import Animate from "../Common/Animate";

const AboutKNMG = () => {
  const title1 = "KNMG";
  const title2 = "KNMG: What the Name Means to Us";
  const content1 =
    "Our name, KNMG, is more than just four letters. Chosen for its simplicity, it’s easy to say, remember, and recognize worldwide. But beyond that, it’s a canvas—its meaning is shaped by the people who work with us.";
  const content2 =
    "For some, KNMG stands for knowledge and trust. For others, it reflects new beginnings and growth. For us, it means adapting to every client’s vision. Whatever KNMG means to you, we embrace it. Because at the end of the day, your story is at the heart of ours.";
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-4 md:py-10">
      {/* Left Section - Image */}
      <Animate>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center min-h-[300px]">
          <span className="text-6xl md:text-9xl font-bold">{title1}</span>
        </div>
      </Animate>
      {/* Right Section - Text Content */}
      <div className="md:w-1/2 space-y-8 px-4 md:px-10">
        <Animate>
          <h2 className="text-3xl font-semibold text-black">{title2}</h2>
        </Animate>

        <div className="space-y-4">
          {/* Client-Centric Approach */}
          <Animate>
            <div>
              <p className="text-lg text-gray-700">{content1}</p>
            </div>
          </Animate>

          {/* Communication */}
          <Animate>
            <div>
              <p className="text-lg text-gray-700">{content2}</p>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default AboutKNMG;
