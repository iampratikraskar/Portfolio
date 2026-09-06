import redbusImage from "../assets/redbus.png";
import foodOrderingImage from "../assets/food-ordering.png";
import threePhaseImage from "../assets/three-phase.png";
import taskManagerImage from "../assets/task-manager.png";
import Reveal from "./Reveal"

const projects = [
  {
    title: "RedBus Master",
    description:
      "An online bus ticket booking and fleet management system with bus search, seat selection, booking management and customer features.",
    image: redbusImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
  },

  {
    title: "Food Ordering Application",
    description:
      "A full-stack food ordering application with restaurant management, products, orders, authentication and role-based access.",
    image: foodOrderingImage,
    technologies: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/",
    demo: "#",
  },

  {
    title: "Three Phase Monitoring System",
    description:
      "An IoT-based three-phase power monitoring system that displays voltage, current and fault information through a web dashboard.",
    image: threePhaseImage,
    technologies: ["ESP32", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
  },

  {
    title: "Task Manager",
    description:
      "A task management application where users can create, update, complete and delete tasks through a REST API.",
    image: taskManagerImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A selection of projects I've built using modern
            development technologies.
          </p>

        </div>


        {/* Projects */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project) => (

              <article
                key={project.title}
                className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition duration-300"
              >

                {/* Image */}

                <div className="relative h-56 overflow-hidden bg-gray-800">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>

                </div>


                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-5">
                    {project.description}
                  </p>


                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2 mb-7">

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm rounded-full"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>


                  {/* Links */}

                  <div className="flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-gray-700 hover:border-blue-500 rounded-lg font-medium transition"
                    >
                      Live Demo ↗
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects