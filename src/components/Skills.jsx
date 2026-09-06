import Reveal from "./Reveal"

import {
  Code2,
  Server,
  Database,
  GitBranch,
  Globe,
  Terminal,
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={28} />,
    skills: ["Java", "JavaScript", "C++", "Python"],
  },

  {
    title: "Frontend",
    icon: <Globe size={28} />,
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },

  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: ["Spring Boot", "Node.js", "Express.js", "REST API"],
  },

  {
    title: "Database",
    icon: <Database size={28} />,
    skills: ["MySQL", "MongoDB"],
  },

  {
    title: "Tools",
    icon: <Terminal size={28} />,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },

  {
    title: "Development",
    icon: <GitBranch size={28} />,
    skills: ["Maven", "Hibernate", "JPA", "JWT"],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-2">
            What I Work With
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to design, develop
            and build modern applications.
          </p>

        </div>


        {/* Skill Categories */}

        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {skillCategories.map((category) => (

              <div
                key={category.title}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-blue-500 transition duration-300"
              >

                {/* Category Header */}

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition duration-300">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {category.title}
                  </h3>

                </div>


                {/* Skills */}

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-blue-400 hover:border-blue-500 transition"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills