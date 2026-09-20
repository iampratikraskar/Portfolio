import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Programming",
    symbol: "</>",
    color: "blue",
    skills: ["Java", "JavaScript", "C++", "Python"],
  },

  {
    title: "Frontend",
    symbol: "◈",
    color: "cyan",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },

  {
    title: "Backend",
    symbol: "⚙",
    color: "purple",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST API"],
  },

  {
    title: "Database",
    symbol: "◉",
    color: "green",
    skills: ["MySQL", "MongoDB"],
  },

  {
    title: "Tools",
    symbol: "⌘",
    color: "orange",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },

  {
    title: "Development",
    symbol: "⑂",
    color: "pink",
    skills: ["Maven", "Hibernate", "JPA", "JWT"],
  },
];

const colorStyles = {
  blue: {
    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    hover: "hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/10",
    skill:
      "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10",
  },

  cyan: {
    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    hover: "hover:border-cyan-500/50",
    glow: "group-hover:shadow-cyan-500/10",
    skill:
      "hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10",
  },

  purple: {
    icon: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    hover: "hover:border-purple-500/50",
    glow: "group-hover:shadow-purple-500/10",
    skill:
      "hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10",
  },

  green: {
    icon: "text-green-400 bg-green-500/10 border-green-500/20",
    hover: "hover:border-green-500/50",
    glow: "group-hover:shadow-green-500/10",
    skill:
      "hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10",
  },

  orange: {
    icon: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    hover: "hover:border-orange-500/50",
    glow: "group-hover:shadow-orange-500/10",
    skill:
      "hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/10",
  },

  pink: {
    icon: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    hover: "hover:border-pink-500/50",
    glow: "group-hover:shadow-pink-500/10",
    skill:
      "hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10",
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] text-white px-6 py-24"
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
          className="absolute top-20 left-[-180px] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]"
        />

        {/* Purple Glow */}

        <motion.div
          animate={{
            x: [0, -50, 0],
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
            What I Work With
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              & Technologies
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
            Technologies and tools I use to design, develop
            and build modern, scalable applications.
          </p>

        </motion.div>

        {/* ================= SKILL CARDS ================= */}

        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {skillCategories.map((category, index) => {
              const style = colorStyles[category.color];

              return (
                <motion.div
                  key={category.title}
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className={`group relative overflow-hidden bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-7 transition-all duration-300 shadow-xl ${style.hover} ${style.glow}`}
                >

                  {/* Hover Shine */}

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                  {/* Top Glow */}

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* ================= HEADER ================= */}

                  <div className="flex items-center justify-between mb-7">

                    <div className="flex items-center gap-4">

                      {/* Icon */}

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.1,
                        }}
                        className={`w-13 h-13 flex items-center justify-center rounded-xl border font-bold text-lg transition-all duration-300 ${style.icon}`}
                      >
                        {category.symbol}
                      </motion.div>

                      {/* Title */}

                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {category.title}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                          {category.skills.length} technologies
                        </p>
                      </div>

                    </div>

                    {/* Number */}

                    <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      0{index + 1}
                    </span>

                  </div>

                  {/* ================= SKILLS ================= */}

                  <div className="flex flex-wrap gap-3">

                    {category.skills.map((skill, skillIndex) => (

                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            index * 0.08 +
                            skillIndex * 0.05,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.05,
                        }}
                        className={`px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-lg text-sm text-gray-300 cursor-default transition-all duration-300 ${style.skill}`}
                      >
                        {skill}
                      </motion.span>

                    ))}

                  </div>

                  {/* Bottom Progress Line */}

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-800">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-blue-500/0 via-blue-500/60 to-purple-500/0"
                    />

                  </div>

                </motion.div>
              );
            })}

          </div>
        </Reveal>

        {/* ================= BOTTOM MESSAGE ================= */}

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
            Always learning. Always building.{" "}
            <span className="text-blue-400">
              Always improving.
            </span>
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;