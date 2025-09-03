import Link from "next/link";
import StyledButton from "../Common/StyledButton";
import Animate from "../Common/Animate";

export default function OffPlanBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/images/offplan/offplan-banner.webp"
      />

      <div className="absolute inset-0 bg-default/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left text-white px-4 md:pl-15 pt-2 md:pt-30">
        <Animate>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Invest in Dubai’s Off-Plan Developments.
          </h1>
        </Animate>
        <Animate>
          <p className="text-base md:text-xl mb-8">
            We provide access to Dubai’s leading off-plan developments, offering
            exclusive projects, flexible payment plans and expert, market-led
            guidance every step of the way.
          </p>
        </Animate>
        <Animate>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
            <StyledButton variant="white-filled">
              Off-Plan Projects
            </StyledButton>
            <Link href="/contact">
              <StyledButton variant="white-outlined">Contact us</StyledButton>
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  );
}
