import { useState } from "react"

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold text-white"
        >
          Pratik<span className="text-blue-500">.</span>
        </a>


        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-7">

          <a
            href="#home"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Education
          </a>

          <a
            href="#experience"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Contact
          </a>

        </div>


        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Navigation */}

      {isMenuOpen && (

        <div className="md:hidden bg-gray-950 border-t border-gray-800">

          <div className="flex flex-col px-6 py-5 gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Education
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Contact
            </a>

          </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar