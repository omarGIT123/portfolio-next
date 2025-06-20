// Data interfaces remain the same

const experiences = [
  {
    title: "AI Engineer",
    company: "EmyeHR",
    period: "04/2024 - Present",
    tasks: [
      "Optimized integration between chat agents and the Emye bot, focusing on prompt quality and cost efficiency.",
      "Fine-tuned GPT-3.5 for precise and efficient SQL generation tailored to company data.",
      "Developed an automatic synthetic data generation program using GPT.",
      "Developed benchmarking systems to evaluate agent performance and visualize results effectively.",
      "Conducted R&D on AI-driven systems for predicting employee behavioral trends and resignation.",
    ],
  },
  {
    title: "Machine Learning Engineering Intern",
    company: "Vistaprint", // Company was missing in original, added for context
    period: "07/2023 - 09/2023",
    tasks: [
      "Developed an automatic speech recognition AI model fine-tuned on the Tunisian dialect.",
      "Created a dataset for the ASR model with 1000+ transcriptions and +1h of recordings.",
      "Developed the infrastructure of the web platform using Terraform, AWS, Docker, and Bitbucket.",
    ],
  },
  {
    title: "Mobile Development Intern",
    company: "Tnker",
    period: "06/2023 - 08/2023",
    tasks: [
      "Developed a Flutter mobile app prototype for voice calling that handles 4 servers simultaneously.",
      "Integrated the voice calling prototype as a feature in the final product app.",
    ],
  },
];

const educations = [
  {
    institution:
      "National Institute of Applied Science and Technology, Tunisia",
    period: "2019 - 2024",
    degree:
      "Diploma in Industrial Computing and Automation Engineering, specializing in Data Science.",
  },
  {
    institution: "British Council, Tunis, Tunisia",
    period: "2013 - 2018",
    degree: "First Certificate in English (FCE) with a C1 level in English.",
  },
];

const technologies = [
  "Python",
  "TensorFlow",
  "Pandas",
  "Numpy",
  "GPT",
  "Keras",
  "PostgreSQL",
  "C++",
  "Git",
  "Node.js",
  "JavaScript",
  "AWS",
  "Docker",
];
const languages = ["English (C1)", "French (B2)", "Arabic (Native)"];

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Resume</h2>
        <div className="grid md:grid-cols-2 gap-12 fade-in">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-8 relative border-l-2 border-slate-700 pl-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div
                    className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-blue-600"
                    style={{ backgroundColor: "rgb(var(--accent-rgb))" }}
                  ></div>
                  <h4 className="text-xl font-semibold text-white">
                    {exp.title}{" "}
                    {exp.company && (
                      <span className="text-blue-400">at {exp.company}</span>
                    )}
                  </h4>
                  <p className="text-gray-400 text-sm my-1">{exp.period}</p>
                  <ul className="text-gray-300 list-disc ml-5 mt-2 space-y-2 text-sm">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-white mb-6">
              Education
            </h3>
            <div className="space-y-8 mb-10">
              {educations.map((edu, index) => (
                <div key={index} className="card">
                  <h4 className="text-xl font-semibold text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-400 my-1">{edu.period}</p>
                  <p className="text-gray-300 mt-2">{edu.degree}</p>
                </div>
              ))}
            </div>

            <h3 className="text-3xl font-semibold text-white mb-6">Skills</h3>
            <div className="card mb-8">
              <h4 className="text-xl font-semibold text-white mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-700 text-slate-300 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h4 className="text-xl font-semibold text-white mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="bg-slate-700 text-slate-300 px-3 py-1 rounded-md text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
