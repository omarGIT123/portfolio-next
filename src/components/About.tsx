const expertiseData = [
  {
    title: "Machine Learning Engineering",
    desc: "Developing and deploying robust, scalable machine learning models for real-world applications.",
  },
  {
    title: "Natural Language Processing",
    desc: "Working with Large Language Models and developing advanced NLP-based solutions.",
  },
  {
    title: "Data Engineering",
    desc: "Designing and building efficient systems for collecting, storing, and analyzing data at scale.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Who Am I?</h2>
        <div className="grid md:grid-cols-2 gap-8 fade-in">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-2">An AI Engineer</h3>
            <div
              className="w-16 h-1 bg-blue-600 rounded-full mb-4"
              style={{ backgroundColor: "rgb(var(--accent-rgb))" }}
            ></div>
            <p className="text-gray-300 leading-relaxed">
              As a dedicated and motivated AI Engineer, I am deeply passionate
              about building intelligent systems that solve real-world problems.
              With a strong academic foundation and hands-on experience, I am
              committed to contributing to the advancement of the industry.
            </p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-semibold mb-2">Personal Info</h3>
            <div
              className="w-16 h-1 bg-blue-600 rounded-full mb-4"
              style={{ backgroundColor: "rgb(var(--accent-rgb))" }}
            ></div>
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong>Birthdate:</strong> 08/08/2000
              </li>
              <li>
                <strong>Email:</strong> omar.bradai@insat.ucar.tn
              </li>
              <li>
                <strong>Phone:</strong> + (216) 20 681 965
              </li>
              <li>
                <strong>Address:</strong> Elmourouj 3, Ben Arous, Tunisia
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-10">My Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8 fade-in">
            {expertiseData.map((expertise, index) => (
              <div key={index} className="card text-center">
                <h4 className="text-xl font-semibold text-white">
                  {expertise.title}
                </h4>
                <p className="text-gray-400 mt-2">{expertise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
