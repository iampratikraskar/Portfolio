import { motion } from "framer-motion";
import Reveal from "./Reveal";

function About() {
  const information = [
    {
      label: "Education",
      value: "B.E. Computer Science",
      icon: "🎓",
    },
    {
      label: "Role",
      value: "Full Stack Developer",
      icon: "💻",
    },
    {
      label: "Location",
      value: "Pune, India",
      icon: "📍",
    },
    {
      label: "Focus",
      value: "Web Development",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#080b14] text-white px-6 py-24"
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
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -left-37.5 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[-150px] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px]"
        />

      </div>

      {/* ================= MAIN ================= */}

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
            Get To Know Me
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 rounded-full"
          />
        </motion.div>

        {/* ================= CONTENT ================= */}

        <Reveal>
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ================= PHOTO ================= */}

            <div className="flex justify-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group"
              >

                {/* Outer Glow */}

                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" />

                {/* Animated Border */}

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50"
                />

                {/* Photo Container */}

                <motion.div
                  whileHover={{
                    scale: 1.03,
                    rotateY: 3,
                    rotateX: -3,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem] bg-gray-900 border border-gray-700 overflow-hidden shadow-2xl"
                >

                  {/* Profile Image */}

                  <img
                    src="/profile.png"
                    alt="Pratik Raskar"
                    className="w-full h-full object-cover object-top scale-[1.02] group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/40 via-transparent to-blue-500/10 opacity-70 group-hover:opacity-40 transition duration-500" />

                  {/* Hover Glow */}

                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                </motion.div>

                {/* Floating Badge */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -right-5 px-5 py-3 rounded-xl border border-gray-700 bg-gray-900/90 backdrop-blur-md shadow-xl"
                >
                  <div className="flex items-center gap-2">

                    <span className="relative flex w-2 h-2">
                      <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-60" />
                      <span className="relative w-2 h-2 bg-green-500 rounded-full" />
                    </span>

                    <span className="text-sm text-gray-300">
                      Open to Work
                    </span>

                  </div>
                </motion.div>

              </motion.div>

            </div>

            {/* ================= TEXT ================= */}

            <div>

              <motion.h3
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                I'm{" "}
                <span className="text-blue-400">
                  Pratik Raskar
                </span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 leading-relaxed mb-5 text-lg"
              >
                I am a Computer Science graduate and aspiring
                Full Stack Developer passionate about building
                web applications and solving real-world problems
                through technology.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                I enjoy working with{" "}
                <span className="text-blue-400">
                  Java
                </span>
                ,{" "}
                <span className="text-blue-400">
                  Spring Boot
                </span>
                ,{" "}
                <span className="text-blue-400">
                  React
                </span>
                , SQL and modern web technologies. I'm
                continuously learning and improving my
                problem-solving and development skills.
              </motion.p>

              {/* ================= INFORMATION ================= */}

              <div className="grid sm:grid-cols-2 gap-4 mb-8">

                {information.map((item, index) => (
                  <motion.div
                    key={item.label}
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
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    className="group relative p-4 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/40 hover:bg-gray-900/80 transition-all duration-300"
                  >

                    <div className="flex items-start gap-3">

                      <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>

                      <div>

                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                          {item.label}
                        </p>

                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {item.value}
                        </p>

                      </div>

                    </div>

                    {/* Hover line */}

                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />

                  </motion.div>
                ))}

              </div>

              {/* ================= BUTTON ================= */}

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow:
                    "0 15px 40px rgba(37,99,235,0.3)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300"
              >

                {/* Shine */}

                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <span className="relative z-10">
                  Download Resume
                </span>

                <span className="relative z-10 group-hover:translate-y-1 transition-transform duration-300">
                  ↓
                </span>

              </motion.a>

            </div>

          </div>
        </Reveal>

      </div>

      {/* Bottom transition */}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080b14] to-transparent pointer-events-none" />

    </section>
  );
}

export default About;