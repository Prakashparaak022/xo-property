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

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
          <div>
            <h2 className="text-xl font-semibold">XO Property</h2>
            <p className="text-gray-600 mt-1">
              Office No. 202, Daytona House, Motor City, Dubai, UAE
            </p>
          </div>
          <div>
            <p className="font-semibold text-black">(04) 565 3718</p>
            <p className="text-gray-600">info@xoproperty.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo;
