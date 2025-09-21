// Data interfaces remain the same

const experiences = [
  {
    title: "LLM & Full Stack Engineer (Remote)",
    company: "Navero LTD | United Kingdom (London)",
    period: "04/2025 - Present",
    tasks: [
      "Developed pipelines leveraging Large Language Models (LLMs) for CV analysis, test generation, and document processing.",
      "Engineered prompt design, tuning, and versioning, including LLM consumption tracking across services.",
      "Designed and deployed background jobs and microservices using Python and RabbitMQ.",
      "Built and maintained databases and backend applications, integrating RESTful services and third-party APIs.",
      "Developed user-centric front-end architectures with Next.js, TypeScript, Redux, and cloud infrastructure (GCP), ensuring scalable and performant solutions.",
    ],
  },
  {
    title: "AI & Full Stack Engineer",
    company: "EmyeHR",
    period: "03/2024 - 04/2025",
    tasks: [
      "Automated HR workflows with Generative AI conversational agents, reducing manual effort and response times.",
      "Fine-tuned GPT-3.5 models for efficient SQL query generation on company datasets.",
      "Built synthetic data pipelines with LLMs and CUDA and created benchmarking systems with visualizations to support data-driven decisions.",
      "Conducted predictive HR analytics R&D using scikit-learn, online and batch learning for employee behavior and attrition trends.",
    ],
  },
  {
    title: "Machine Learning Engineering Intern",
    company: "Influence Consulting",
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

const technologies = {
  "Programming Languages": ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  "Web & Mobile Development": [
    "React",
    "Next.js",
    "AngularJS",
    "Flutter",
    "FastAPI",
    "Supabase",
  ],
  "AI / Machine Learning": [
    "Large Language Models (LLMs)",
    "Machine Learning",
    "TensorFlow",
    "NumPy",
    "OpenCV",
  ],
  "Cloud Platforms": [
    "Google Cloud Platform (GCP)",
    "Microsoft Azure",
    "Amazon Web Services (AWS)",
  ],
  "Databases & Messaging": ["PostgreSQL", "RabbitMQ", "Redis"],
  "Version Control & CI/CD": ["Git", "GitHub", "GitLab", "Bitbucket"],
  "DevOps & Containerization": ["Docker", "Cloud Storage Solutions"],
  Methodologies: ["Agile / Scrum"],
};
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
              <h4 className="text-xl font-semibold text-white mb-6">
                Technologies
              </h4>
              <div className="space-y-4">
                {Object.entries(technologies).map(([category, skills]) => (
                  <div key={category}>
                    <h5 className="text-lg font-medium text-blue-400 mb-2">
                      {category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-700 text-slate-300 px-3 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
