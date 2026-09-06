import Reveal from "./Reveal"

const education = [
  {
    degree: "B.E. Computer Science",
    institution: "S.B. Patil College of Engineering",
    duration: "2022 - 2026",
    description:
      "Studied computer science fundamentals, software development, databases, web technologies and application development.",
  },
]


function Education() {
  return (
    <section
      id="education"
      className="bg-gray-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-2">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

        </div>


        {/* Timeline */}
        <Reveal>
          <div className="max-w-3xl mx-auto">

            {education.map((item, index) => (

              <div
                key={index}
                className="relative pl-8 border-l border-gray-700 pb-10"
              >

                {/* Timeline Dot */}

                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-950"></div>


                {/* Content */}

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

                  <span className="text-blue-500 text-sm font-medium">
                    {item.duration}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.degree}
                  </h3>

                  <h4 className="text-gray-300 mt-2">
                    {item.institution}
                  </h4>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {item.description}
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

export default Education