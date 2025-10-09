import Image from "next/image";
import Link from "next/link";
import Animate from "../Common/Animate";

const properties = [
  {
    id: 1,
    image: "/assets/images/featured-properties/property-1.jpg",
    price: "AED 390,000",
    location: "Lila, Arabian Ranches 2, Dubai",
    description: "5-Bedroom Villa for Rent",
  },
  {
    id: 2,
    image: "/assets/images/featured-properties/property-2.jpg",
    price: "AED 2,000,000",
    location: "Marina Gate 1, Dubai Marina",
    description: "1-Bedroom Apartment for Sale",
  },
  {
    id: 3,
    image: "/assets/images/featured-properties/property-3.jpg",
    price: "AED 160,000",
    location: "Mon Reve, Downtown Dubai",
    description: "2-Bedroom Apartment for Rent",
  },
];

const title = "Available Properties";
const subTitle1 = "Explore handpicked homes and investments.";
const subTitle2 =
  "Have a specific requirement? Share your wishlist with us, and we’ll find the perfect match.";

export default function FeaturedProperties() {
  return (
    <section className="p-4 md:p-10">
      {/* Heading */}
      <div className="text-center mb-6">
        <Animate>
          <h2 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h2>
        </Animate>
        <Animate>
          <p className="text-gray-600 text-md mt-2 md:mt-4">
            <span className="font-bold">{subTitle1} </span>
          </p>
        </Animate>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((property) => (
          <Animate key={property.id}>
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
          </Animate>
        ))}
      </div>

      <Animate>
        <p className="text-center text-gray-800 text-md mt-5 md:mt-10">
          {subTitle2}
        </p>
      </Animate>
    </section>
  );
}
