import Link from "next/link";
import StyledButton from "../Common/StyledButton";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/images/about-us.webp"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left text-white px-4 md:pl-15 pt-2 md:pt-30">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          The KNMG Property Story
        </h1>
        <p className="text-base md:text-xl mb-8">Get to know us.</p>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          <StyledButton>List Your Property</StyledButton>
          <Link href="/contact">
            <StyledButton variant="white-outlined">Contact us</StyledButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
