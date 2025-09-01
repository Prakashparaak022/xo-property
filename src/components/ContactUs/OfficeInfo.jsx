import Image from "next/image";

const OfficeInfo = () => {
  return (
    <div className="max-w-4xl px-8 md:px-16 py-8">
      <div className="bg-white">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={"/assets/images/contact-us/office.webp"}
            alt="XO Property Office Building"
            className="rounded-lg"
            width={1200}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo;
