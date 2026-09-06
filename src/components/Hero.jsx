import { motion } from "framer-motion"


function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 px-6 pt-20"
    >

      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      </div>


      {/* Content */}

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Greeting */}

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gray-800 bg-gray-900/70 text-gray-300 text-sm">

          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

          Available for opportunities

        </div>


        {/* Name */}

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">

          Hi, I'm{" "}

          <span className="text-blue-500">
            Pratik
          </span>

          <span className="text-white">
            .
          </span>

        </h1>


        {/* Role */}

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">

          Java Full Stack Developer

        </h2>


        {/* Description */}

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">

          I build modern, responsive and scalable web applications
          using Java, Spring Boot, React and databases.

        </p>


        {/* Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300 hover:-translate-y-1"
          >
            View My Projects →
          </a>


          <a
            href="/resume.pdf"
            download
            className="px-7 py-3.5 border border-gray-700 hover:border-blue-500 text-white rounded-lg font-medium transition duration-300 hover:-translate-y-1"
          >
            Download Resume
          </a>

        </div>


        {/* Social Links */}

        <div className="flex justify-center items-center gap-8 mt-12">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub ↗
          </a>

          <span className="text-gray-700">
            |
          </span>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            LinkedIn ↗
          </a>

        </div>


        {/* Scroll Indicator */}

        <a
          href="#about"
          className="inline-flex flex-col items-center mt-16 text-gray-600 hover:text-gray-400 transition"
        >

          <span className="text-xs mb-2">
            Scroll Down
          </span>

          <span className="animate-bounce">
            ↓
          </span>

        </a>

      </motion.div>

    </section>
  )
}

export default Hero