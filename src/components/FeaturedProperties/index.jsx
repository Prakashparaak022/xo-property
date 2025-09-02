import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    image: "/assets/images/featured-properties/villa.webp",
    price: "AED 390,000",
    location: "Lila, Arabian Ranches 2, Dubai",
    description: "5 Bedroom Villa to rent",
  },
  {
    id: 2,
    image: "/assets/images/featured-properties/marina.webp",
    price: "AED 2,000,000",
    location: "Marina Gate 1, Marina Gate, Dubai Marina, Dubai",
    description: "1 Bedroom Apartment for sale",
  },
  {
    id: 3,
    image: "/assets/images/featured-properties/downtown.webp",
    price: "AED 160,000",
    location: "Mon Reve, Downtown Dubai, Dubai",
    description: "2 Bedroom Apartment to rent",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="p-4 md:p-10">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-semibold mb-5">
          Featured Properties
        </h2>
        <p className="text-gray-600 text-md mt-2 md:mt-4">
          <span className="font-bold">Have a specific request? </span>
          <Link href="/enquiry" className="underline">
            Get in touch
          </Link>{" "}
          and we will help you.
        </p>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((property) => (
          <div key={property.id} className="group">
            {/* Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={property.image}
                alt={property.location}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {property.price}
              </h3>
              <p className="text-gray-700 mt-1">{property.location}</p>
              <p className="text-gray-600 mt-1">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
