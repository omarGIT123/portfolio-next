const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "7+", label: "Projects Finished" },
  { value: "99%", label: "Employer Satisfaction" },
  { value: "3k+", label: "Cups of Coffee" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center">
              <h3
                className="text-5xl font-bold"
                style={{ color: "rgb(var(--accent-rgb))" }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
