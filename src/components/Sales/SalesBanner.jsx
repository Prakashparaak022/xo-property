import StyledButton from "../Common/StyledButton";

export default function SalesBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/images/sales/sales-banner.webp"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left text-white px-4 md:pl-15 pt-2 md:pt-30">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Buy Property in Dubai with Trusted Experts
        </h1>
        <p className="text-base md:text-xl mb-8">
          Find your next home or investment in Dubai with KNMG Property. From
          waterfront apartments to spacious villas, our brokers will guide you
          through every step of the buying process.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          <StyledButton>Properties for Sale</StyledButton>
          <StyledButton variant="white-outlined">
            List your property
          </StyledButton>
        </div>
      </div>
    </section>
  );
}
