import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

export function InquiryFormTemplate({
  name,
  email,
  phone,
  cityCountry,
  community,
  budget,
  bedroom,
  investment,
  buyingTime,
}) {
  const main = {
    backgroundColor: "#f6f6f6",
    padding: "40px 0",
    fontFamily: "Arial, sans-serif",
  };

  const container = {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #eee",
  };

  const section = {
    marginBottom: "20px",
  };

  const heading = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const label = {
    fontWeight: "bold",
  };

  return (
    <Html>
      <Head />
      <Preview>New Property Inquiry from {name}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Text style={heading}>New Property Inquiry Details</Text>
            <Text><span style={label}>Name:</span> {name}</Text>
            <Text><span style={label}>Email:</span> {email}</Text>
            <Text><span style={label}>Phone:</span> {phone}</Text>
            <Text><span style={label}>Location:</span> {cityCountry}</Text>

            <Text style={{ ...heading, marginTop: "30px", fontSize: "18px" }}>
              Property Preferences
            </Text>

            <Text><span style={label}>Community:</span> {community}</Text>
            <Text><span style={label}>Budget:</span> {budget}</Text>
            <Text><span style={label}>Bedrooms:</span> {bedroom}</Text>
            <Text><span style={label}>Investment Goal:</span> {investment}</Text>
            <Text><span style={label}>Buying Time:</span> {buyingTime}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
