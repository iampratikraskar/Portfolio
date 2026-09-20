import { motion } from "framer-motion";
// import redbusImage from "../assets/redbus.png";
// import foodOrderingImage from "../assets/food-ordering.png";
// import threePhaseImage from "../assets/three-phase.png";
// import taskManagerImage from "../assets/task-manager.png";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "RedBus Master",
    description:
      "An online bus ticket booking and fleet management system with bus search, seat selection, booking management and customer features.",
    image: redbusImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/iampratikraskar",
    demo: "#",
  },

  {
    number: "02",
    title: "Food Ordering Application",
    description:
      "A full-stack food ordering application with restaurant management, products, orders, authentication and role-based access.",
    image: foodOrderingImage,
    technologies: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/iampratikraskar",
    demo: "#",
  },

  {
    number: "03",
    title: "Three Phase Monitoring System",
    description:
      "An IoT-based three-phase power monitoring system that displays voltage, current and fault information through a web dashboard.",
    image: threePhaseImage,
    technologies: ["ESP32", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/iampratikraskar",
    demo: "#",
  },

  {
    number: "04",
    title: "Task Manager",
    description:
      "A task management application where users can create, update, complete and delete tasks through a REST API.",
    image: taskManagerImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/iampratikraskar",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b14] text-white px-6 py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[-180px] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]"
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[-180px] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px]"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-blue-400 font-medium mb-3 tracking-widest uppercase text-sm cursor-default"
          >
            My Work
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 rounded-full"
          />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            A selection of applications and systems I've built using
            modern development technologies.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-md shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative h-64 overflow-hidden bg-gray-900">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />

                  {/* Hover blue overlay */}

                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition duration-500" />

                  {/* Project number */}

                  <div className="absolute top-5 left-5">

                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md text-sm font-bold text-gray-300"
                    >
                      {project.number}
                    </motion.span>

                  </div>

                  {/* View project hint */}

                  <div className="absolute top-5 right-5">

                    <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-gray-300 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-300">
                      ↗
                    </span>

                  </div>

                  {/* Bottom title */}

                  <div className="absolute bottom-5 left-6 right-6">

                    <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">
                      Project {project.number}
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-7">

                  {/* Description */}

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2 mb-7">

                    {project.technologies.map((technology, techIndex) => (
                      <motion.span
                        key={technology}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.1 + techIndex * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                        }}
                        className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm rounded-full cursor-default hover:bg-blue-500/15 hover:border-blue-400/40 transition-all duration-300"
                      >
                        {technology}
                      </motion.span>
                    ))}

                  </div>

                  {/* Divider */}

                  <div className="h-px bg-gray-800 mb-6" />

                  {/* Buttons */}

                  <div className="flex flex-wrap gap-3">

                    {/* GitHub */}

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="group/btn relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-600/10"
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <span className="relative z-10">
                        GitHub
                      </span>

                      <span className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                        ↗
                      </span>
                    </motion.a>

                    {/* Live Demo */}

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/5 rounded-lg font-medium text-sm text-gray-300 hover:text-white transition-all duration-300"
                    >
                      Live Demo

                      <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                        ↗
                      </span>
                    </motion.a>

                  </div>
                </div>

                {/* Bottom glow line */}

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              </motion.article>
            ))}

          </div>
        </Reveal>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm">
            More projects coming soon{" "}
            <span className="text-blue-400">
              ✦
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;