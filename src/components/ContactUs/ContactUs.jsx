import Image from "next/image";
import Link from "next/link";
import StyledButton from "../Common/StyledButton";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-10 gap-4 md:gap-8">
      {/* Left Section - Image */}
      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-semibold mb-5">Contact us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to hear from you! Whether you have a question about our
          services, want to learn more about the dynamic Dubai real estate
          market, or simply want to get to know us better, the team at KNMG
          Property is here to assist.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Fill out the form below, and one of our friendly experts will reach
          out to you shortly. We’re excited to connect with you and help you
          with all your real estate needs.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Let’s start a conversation!
        </p>
        <div className="mt-8">
          <Link href="/enquiry">
            <StyledButton variant="black-outlined">Get in touch</StyledButton>
          </Link>
        </div>
      </div>
      {/* Right Section - Text Content */}
      <div className="md:w-1/2">
        <Image
          src={"/assets/images/contact-us/office.webp"}
          alt="KNMG Property Office Building"
          className="rounded-lg"
          width={1200}
          height={600}
          layout="responsive"
          objectFit="cover"
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
          <div>
            <h2 className="text-xl font-semibold">KNMG Property</h2>
            <p className="text-gray-600 mt-1">
              Office No. 202, Daytona House, Motor City, Dubai, UAE
            </p>
          </div>
          <div>
            <p className="font-semibold text-black">(04) 565 3718</p>
            <p className="text-gray-600">info@knmgproperty.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
