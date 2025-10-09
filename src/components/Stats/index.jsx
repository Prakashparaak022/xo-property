import Animate from "../Common/Animate";

export default function Stats() {
  const stats = [
    {
      value: "AED 530M+",
      label: "Value of properties successfully transacted in 2024",
    },
    { value: "4.8★", label: "Average Google rating from satisfied clients" },
    { value: "40+", label: "Local experts dedicated to Dubai real estate" },
    { value: "200+", label: "Successful transactions completed in 2024" },
  ];

  return (
    <section className="w-full p-5 md:p-10 bg-white">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 text-start md:text-center">
        {stats.map((stat, index) => (
          <Animate key={index}>
            <div key={index}>
              <h2 className="text-3xl md:text-5xl font-semibold text-black">
                {stat.value}
              </h2>
              <p className="mt-1 md:mt-2 font-bold text-gray-600">
                {stat.label}
              </p>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
}
