function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              Pratik<span className="text-blue-500">.</span>
            </h2>

            <p className="text-sm mt-2">
              Java Full Stack Developer
            </p>
          </div>


          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-5 text-sm">

            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>

          </div>


          {/* Social Links */}

          <div className="flex gap-5">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* Bottom */}

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">

          <p className="text-sm">
            © {currentYear} Pratik Raskar. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer