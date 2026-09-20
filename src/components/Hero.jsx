import { motion } from "framer-motion";

function Hero() {
  const technologies = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "REST APIs",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] px-6 pt-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Blue Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[5%] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[140px]"
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* ================= AVAILABILITY ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(34,197,94,0.15)",
          }}
          className="group inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full border border-gray-700/70 bg-gray-900/60 backdrop-blur-md text-gray-300 text-sm shadow-lg shadow-blue-500/5 transition-all duration-300 cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 group-hover:bg-green-400 transition-colors" />
          </span>

          <span className="group-hover:text-white transition-colors">
            Available for opportunities
          </span>
        </motion.div>

        {/* ================= DEVELOPER LABEL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center gap-3 text-blue-400 mb-5 cursor-default"
        >
          <span className="text-xl transition-transform duration-300 hover:rotate-12">
            &lt;/&gt;
          </span>

          <span className="text-sm md:text-base font-medium tracking-[0.25em] hover:text-cyan-400 transition-colors">
            JAVA FULL STACK DEVELOPER
          </span>

          <motion.span
            animate={{
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-lg"
          >
            ✦
          </motion.span>
        </motion.div>

        {/* ================= NAME ================= */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight"
        >
          Hi, I'm{" "}

          <motion.span
            whileHover={{
              scale: 1.04,
              textShadow:
                "0 0 20px rgba(59,130,246,0.7)",
            }}
            className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-default transition-all duration-300"
          >
            Pratik
          </motion.span>

          <span className="text-blue-500">.</span>
        </motion.h1>

        {/* ================= ROLE ================= */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 cursor-default transition-colors duration-300 hover:text-white"
        >
          Building{" "}

          <span className="text-blue-400 hover:text-cyan-400 transition-colors">
            scalable
          </span>{" "}

          web applications.
        </motion.h2>

        {/* ================= DESCRIPTION ================= */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto mt-7 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          I build modern, responsive and scalable web applications
          using{" "}

          <span className="text-gray-200 font-medium hover:text-blue-400 transition-colors">
            Java, Spring Boot, React
          </span>{" "}

          and databases — turning ideas into reliable digital
          experiences.
        </motion.p>

        {/* ================= TECHNOLOGIES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75 + index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.05,
                borderColor: "rgba(59,130,246,0.6)",
                color: "#60a5fa",
                boxShadow:
                  "0 10px 30px rgba(37,99,235,0.15)",
              }}
              className="px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/60 backdrop-blur-sm text-gray-400 text-sm transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* ================= BUTTONS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >

          {/* PROJECT BUTTON */}

          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow:
                "0 15px 40px rgba(37,99,235,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300"
          >

            {/* Shine */}

            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <span className="relative z-10">
              View My Projects
            </span>

            <span className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </motion.a>

          {/* RESUME BUTTON */}

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{
              scale: 1.05,
              y: -5,
              borderColor: "rgba(59,130,246,0.8)",
              boxShadow:
                "0 15px 40px rgba(37,99,235,0.12)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-gray-700 bg-gray-900/40 hover:bg-gray-900 text-white rounded-xl font-semibold transition-all duration-300"
          >
            <span className="group-hover:translate-y-1 transition-transform duration-300">
              ↓
            </span>

            Download Resume
          </motion.a>

        </motion.div>

        {/* ================= SOCIAL LINKS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center items-center gap-7 mt-10"
        >

          {/* GitHub */}

          <a
            href="https://github.com/iampratikraskar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
          >
            <span className="text-lg group-hover:rotate-12 group-hover:scale-125 transition-all duration-300">
              ◉
            </span>

            <span>
              GitHub
            </span>

            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>

            {/* Underline */}

            <span className="absolute -bottom-2 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
          </a>

          <span className="text-gray-700">
            •
          </span>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/iampratikraskar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <span className="font-bold group-hover:scale-125 transition-transform duration-300">
              in
            </span>

            <span>
              LinkedIn
            </span>

            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>

            {/* Underline */}

            <span className="absolute -bottom-2 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
          </a>

        </motion.div>

        {/* ================= SCROLL ================= */}

        <motion.a
          href="#about"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            color: "#60a5fa",
          }}
          className="inline-flex flex-col items-center mt-16 text-gray-600 hover:text-gray-300 transition duration-300"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-3">
            Scroll
          </span>

          <span className="text-xl">
            ↓
          </span>
        </motion.a>

      </motion.div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />

    </section>
  );
}

export default Hero;