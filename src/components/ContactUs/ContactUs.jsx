import Image from "next/image";
import Link from "next/link";
import StyledButton from "../Common/StyledButton";
import Animate from "../Common/Animate";
import { FaPhone } from "react-icons/fa";

const ContactUs = () => {
  const title = "Connect With KNMG Property";
  const subTitle = "Your journey starts with a conversation.";
  const content =
    "Have a question or need guidance in Dubai’s real estate market? The KNMG Property team is here to help. Fill out the form, and our advisors will reach out to you soon to make your journey seamless.";
  const description = "Let’s connect today!";
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-10 gap-4 md:gap-8">
      {/* Left Section - Image */}
      <div className="md:w-1/2">
        <Animate>
          <h1 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h1>
        </Animate>
        <Animate>
          <p className="mt-4 text-lg text-gray-600 font-semibold">{subTitle}</p>
        </Animate>
        <Animate>
          <p className="mt-4 text-lg text-gray-600">{content}</p>
        </Animate>
        <Animate>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </Animate>
        <Animate>
          <div className="mt-8">
            <Link href="/enquiry">
              <StyledButton variant="black-outlined">Get in touch</StyledButton>
            </Link>
          </div>
        </Animate>
      </div>
      {/* Right Section - Text Content */}
      <div className="md:w-1/2">
        <Image
          src={"/assets/images/contact-us/office.jpg"}
          alt="KNMG Property Office Building"
          className="rounded-lg"
          width={1200}
          height={600}
          layout="responsive"
          objectFit="cover"
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
          {/* <div>
            <h2 className="text-xl font-semibold">
              KNMG Property Headquarters
            </h2>
            <p className="text-gray-600 mt-1">
              Office No. 202, Daytona House, Motor City, Dubai, UAE
            </p>
          </div> */}
          <div>
            <div className="flex items-center justify-start space-x-1">
              <button className="bg-white text-black rounded-full">📞</button>
              <p className="font-semibold text-black">+971 50 939 5171</p>
            </div>
            {/* <div className="flex items-center justify-start space-x-1">
              <button className="bg-white text-black rounded-full">📧</button>
              <p className="text-gray-600">info@knmgproperty.ae</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
