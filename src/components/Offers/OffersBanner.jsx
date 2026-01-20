import Banner from "./Banner";

export default function OffersBanner() {
  return (
    <Banner
      banner={"/assets/images/offers/banner.webp"}
      title="Binghatti Elite"
      subtitle={
        <>
          A Design-Forward Investment Icon in Dubai Production City
          <span className="spacer" />
          One Decision. Multiple Income Streams. Timeless Impact.
        </>
      }
      content={
        <>
          Welcome to <b>Binghatti Elite</b>, a bold architectural statement
          rising in the heart of <b>Dubai Production City </b>
          where creativity, commerce, and capital growth converge. This is not
          just another residential tower. It is a
          <b> strategically engineered investment opportunity</b>, designed for
          those who think beyond single units and embrace portfolio-level
          performance within one iconic address.
          <span className="spacer" />
          Binghatti Elite introduces a rare studio-led ownership concept,
          enabling investors to secure <b>multiple</b> premium studio apartments
          within one landmark development, transforming a single acquisition
          into a diversified, income-generating asset from day one.
        </>
      }
    />
  );
}
