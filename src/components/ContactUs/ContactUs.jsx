import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="max-w-4xl px-8 md:px-16 pt-16">
      <h1 className="text-4xl font-semibold text-gray-900">Contact us</h1>
      <p className="mt-4 text-lg text-gray-600">
        We’d love to hear from you! Whether you have a question about our
        services, want to learn more about the dynamic Dubai real estate market,
        or simply want to get to know us better, the team at XO Property is here
        to assist.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        Fill out the form below, and one of our friendly experts will reach out
        to you shortly. We’re excited to connect with you and help you with all
        your real estate needs.
      </p>
      <p className="mt-4 text-lg text-gray-600">Let’s start a conversation!</p>
      <div className="mt-8">
        <Link
          href="/contact-form"
          className="inline-block px-10 py-3 border-2 border-black text-lg font-medium hover:bg-black hover:text-white">
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
