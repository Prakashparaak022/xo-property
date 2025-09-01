export default function Stats() {
  const stats = [
    { value: "AED 530M+", label: "Worth of transactions in 2024" },
    { value: "4.8", label: "Star rated google reviews" },
    { value: "40+", label: "Specialists available across Dubai" },
    { value: "200+", label: "Sales in 2024" },
  ];

  return (
    <section className="w-full py-4 lg:py-8 bg-white">
      <div className="mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-5xl font-semibold text-black">{stat.value}</h2>
            <p className="mt-2 font-bold text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
