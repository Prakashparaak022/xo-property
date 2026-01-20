import Image from "next/image";
import Animate from "../Common/Animate";

const Banner = ({ banner, title, subtitle, content }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-default">
      <Image
        className="absolute inset-0 object-cover"
        src={banner}
        alt={title}
        fill
        priority
      />

      {/* vignette for text area */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 md:pl-15 pt-2 md:pt-30 max-w-3xl">
        <Animate>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 drop-shadow-lg">
            {title}
          </h1>
        </Animate>

        {subtitle && (
          <Animate>
            <div className="text-base md:text-xl font-bold mb-6 drop-shadow">
              {subtitle}
            </div>
          </Animate>
        )}

        {content && (
          <Animate>
            <div className="text-sm md:text-lg text-gray-700 leading-relaxed text-white/85 drop-shadow">
              {content}
            </div>
          </Animate>
        )}
      </div>
      <style>
        {`
          .spacer {
            display: block;
            height: 10px;
          }
          `}
      </style>
    </section>
  );
};

export default Banner;
