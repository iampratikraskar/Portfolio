import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    duration: "2025 - Present",
    status: "Currently Building",
    description:
      "Developing full-stack applications using React, Java, Spring Boot, REST APIs, databases and modern web technologies. Focused on building secure, scalable and responsive applications while continuously improving software development skills.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "REST APIs",
      "MySQL",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
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

        {/* Blue Glow */}

        <motion.div
          animate={{
            x: [0, 60, 0],
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

        {/* Purple Glow */}

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
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="text-center mb-16"
        >

          <motion.p
            whileHover={{
              scale: 1.05,
            }}
            className="text-blue-400 font-medium mb-3 tracking-widest uppercase text-sm cursor-default"
          >
            Professional Journey
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              & Growth
            </span>
          </h2>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 80,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 rounded-full"
          />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            My development journey, projects and the experience
            I've gained while building real-world applications.
          </p>

        </motion.div>

        {/* ================= TIMELINE ================= */}

        <Reveal>

          <div className="max-w-4xl mx-auto relative">

            {/* Timeline */}

            <motion.div
              initial={{
                height: 0,
              }}
              whileInView={{
                height: "100%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute left-[11px] md:left-1/2 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-translate-x-1/2"
            />

            {experiences.map((experience, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: index * 0.2,
                }}
                className="relative"
              >

                {/* ================= TIMELINE DOT ================= */}

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  className="absolute left-0 md:left-1/2 top-8 md:-translate-x-1/2 z-20"
                >

                  {/* Glow */}

                  <div className="absolute -inset-3 rounded-full bg-blue-500/10 blur-md" />

                  {/* Pulsing dot */}

                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(59,130,246,0.2)",
                        "0 0 22px rgba(59,130,246,0.6)",
                        "0 0 0px rgba(59,130,246,0.2)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="relative w-6 h-6 rounded-full border-4 border-[#080b14] bg-blue-500"
                  />

                </motion.div>

                {/* ================= EXPERIENCE CARD ================= */}

                <div
                  className={`relative ml-8 md:ml-0 md:w-[calc(50%-40px)] ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="group relative overflow-hidden bg-gray-950/70 backdrop-blur-md border border-gray-800 hover:border-blue-500/40 rounded-2xl p-7 shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                  >

                    {/* Shine */}

                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                    {/* Top glow */}

                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* ================= DATE ================= */}

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <motion.span
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />

                        {experience.duration}
                      </motion.span>

                      {/* Current Status */}

                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />

                        {experience.status}
                      </span>

                    </div>

                    {/* ================= ROLE ================= */}

                    <h3 className="text-2xl md:text-3xl font-bold mt-6 group-hover:text-blue-400 transition-colors duration-300">
                      {experience.role}
                    </h3>

                    {/* Company */}

                    <h4 className="text-gray-300 mt-2 font-medium">
                      {experience.company}
                    </h4>

                    {/* Description */}

                    <p className="text-gray-400 mt-5 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* ================= TECHNOLOGIES ================= */}

                    <div className="flex flex-wrap gap-2 mt-6">

                      {experience.technologies.map(
                        (technology, techIndex) => (

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
                              delay:
                                0.4 +
                                techIndex * 0.06,
                            }}
                            whileHover={{
                              y: -3,
                              scale: 1.05,
                            }}
                            className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-xs text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                          >
                            {technology}
                          </motion.span>

                        )
                      )}

                    </div>

                    {/* Divider */}

                    <div className="h-px bg-gray-800 mt-7 mb-5" />

                    {/* Footer */}

                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <span className="text-blue-400">
                        ◆
                      </span>

                      Full Stack Development

                    </div>

                    {/* Bottom glow */}

                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  </motion.div>

                </div>

              </motion.div>

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
            delay: 0.4,
          }}
          className="text-center mt-16"
        >

          <p className="text-gray-500 text-sm">
            Learning through{" "}
            <span className="text-blue-400">
              building real applications
            </span>
            .
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;