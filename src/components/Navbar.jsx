import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  // ================= SCROLL EFFECT =================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)

      let currentSection = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150

        if (window.scrollY >= sectionTop) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // ================= CLOSE MOBILE MENU =================

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // ================= SMOOTH SCROLL =================

  const handleNavClick = (href) => {
    setIsMenuOpen(false)

    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#070a12]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >

      {/* ================= NAVBAR GLOW ================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className={`absolute left-1/2 -translate-x-1/2 top-0 w-72 h-20 bg-blue-600/10 blur-3xl transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />

      </div>


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* ================= LOGO ================= */}

        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#home")
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative group"
        >
          <div className="flex items-center">

            <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Pratik
            </span>

            <motion.span
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-2xl md:text-3xl font-black text-blue-500"
            >
              .
            </motion.span>

          </div>

          {/* Logo underline */}

          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </motion.a>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden md:flex items-center gap-1">

          {navLinks.map((link) => {

            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId

            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                whileHover={{ y: -1 }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >

                {link.name}

                {/* Active indicator */}

                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-5 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                  />
                )}

                {/* Hover background */}

                <span className="absolute inset-0 -z-10 rounded-lg bg-white/[0.03] opacity-0 hover:opacity-100 transition-opacity duration-300" />

              </motion.a>
            )
          })}

        </div>


        {/* ================= DESKTOP CTA ================= */}

        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#contact")
          }}
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="hidden md:flex relative items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium overflow-hidden group"
        >

          {/* Shine */}

          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <span className="relative">
            Let's Talk
          </span>

          <span className="relative text-base group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>

        </motion.a>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait">

            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl"
              >
                ✕
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl"
              >
                ☰
              </motion.span>
            )}

          </AnimatePresence>
        </motion.button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>

        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#070a12]/95 backdrop-blur-xl"
          >

            <div className="px-6 py-5 flex flex-col gap-2">

              {navLinks.map((link, index) => {

                const sectionId = link.href.substring(1)
                const isActive = activeSection === sectionId

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/10 text-white border border-blue-500/20"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >

                    <span>
                      {link.name}
                    </span>

                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    )}

                  </motion.a>
                )
              })}


              {/* Mobile CTA */}

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#contact")
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20"
              >
                Let's Talk
                <span>→</span>
              </motion.a>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar