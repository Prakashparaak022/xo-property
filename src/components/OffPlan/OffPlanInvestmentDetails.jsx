import StyledButton from "../Common/StyledButton";

const OffPlanDetails = () => {
  return (
    <div className="space-y-8 p-4 md:p-10">
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold mb-5">
          Dubai is a city that’s constantly evolving and one of the most
          exciting ways to be part of its growth is through off-plan property
          investments.
        </h1>
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          Invest in Dubai’s Off-Plan Market
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          We connect you with Dubai’s most promising off-plan developments,
          giving early access to new communities designed for growth, lifestyle,
          and long-term value. Each project is selected with care to align with
          both personal goals and market opportunity.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">What Are Off-Plan Properties?</h2>
        <p className="mt-2 text-lg text-gray-700">
          Off-plan properties are purchased before construction is complete, and
          often before it begins. This gives you the chance to secure a unit at
          a lower entry point than a ready-built home, with the potential for
          capital appreciation as the development progresses. Whether it’s a
          contemporary apartment or a high-end villa, off-plan properties are
          built to meet modern expectations in design, comfort and finish.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Why Choose Off-Plan?</h2>
        <p className="py-2 md:py-4 text-lg text-gray-700">
          Off-plan investments offer a number of clear advantages:
        </p>
        <ul className="list-disc pl-5 mt-2 text-lg text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Competitive pricing:</span> Secure
            property in prime areas below current market rates
          </li>
          <li>
            <span className="font-semibold">Flexible payment plans:</span>{" "}
            Spread out costs with staged installments
          </li>
          <li>
            <span className="font-semibold">Personalization:</span> In many
            cases, select layouts, finishes, and details to suit your
            preferences
          </li>
          <li>
            <span className="font-semibold">Capital growth:</span> Benefit from
            increasing value as the project nears completion
          </li>
        </ul>
        <p className="pt-2 md:pt-4 text-lg text-gray-700">
          Dubai’s rapid growth, infrastructure investment and international
          demand make off-plan one of the strongest paths to long-term return,
          whether the goal is personal use or portfolio expansion.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Working with KNMG Property</h2>
        <p className="mt-2 text-lg text-gray-700">
          We provide access to a curated range of off-plan developments across
          Dubai, including exclusive launches and master-planned communities.
          With direct links to trusted developers and full transparency on
          timelines, pricing and availability, we’re here to guide you through
          every stage of the purchase.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          Explore Off-Plan Opportunities
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          From waterfront apartments to luxury villas, our portfolio includes
          options to suit every lifestyle and investment objective. We offer
          support from first enquiry through to handover, helping you move
          forward with clarity and confidence.
        </p>
      </div>
      <div>
        <p className="mt-2 text-lg text-gray-700">
          View <a className="underline">current off-plan listings</a> or{" "}
          <a className="underline" href="/enquiry">
            get in touch
          </a>{" "}
          to speak with a specialist.
        </p>
      </div>
      <div>
        <StyledButton variant="black-outlined">Off Plan Projects</StyledButton>
      </div>
    </div>
  );
};

export default OffPlanDetails;
