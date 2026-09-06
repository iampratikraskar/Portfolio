import Reveal from "./Reveal"


const experiences = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Developing full-stack applications using React, Java, Spring Boot, REST APIs, databases and modern web technologies.",
  },
]


function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-900 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-2">
            Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

        </div>


        {/* Timeline */}
        <Reveal>
          <div className="max-w-3xl mx-auto">

            {experiences.map((experience, index) => (

              <div
                key={index}
                className="relative pl-8 border-l border-gray-700 pb-10"
              >

                {/* Dot */}

                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900"></div>


                {/* Content */}

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">

                  <span className="text-blue-500 text-sm font-medium">
                    {experience.duration}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {experience.role}
                  </h3>

                  <h4 className="text-gray-300 mt-2">
                    {experience.company}
                  </h4>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {experience.description}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience