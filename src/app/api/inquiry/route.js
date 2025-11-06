import { InquiryFormTemplate } from "@/components/utilities/InquiryFormTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const reqBody = await req.json();

  const { name, email, phone, cityCountry, preferences } = reqBody;
  const { community, budget, bedroom, investment, buyingTime } =
    preferences || {};

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["hr@oxfyn.com"],
      subject: `New Property Inquiry from ${name}`,
      react: InquiryFormTemplate({
        name,
        email,
        phone,
        cityCountry,
        community,
        budget,
        bedroom,
        investment,
        buyingTime,
      }),
    });

    if (error) return Response.json({ error }, { status: 500 });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
