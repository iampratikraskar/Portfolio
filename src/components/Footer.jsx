import { motion } from "framer-motion"

function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/iampratikraskar",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/iampratikraskar",
    },
  ]

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#05070d] text-gray-400 border-t border-white/10"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 bottom-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* ================= TOP SECTION ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* ================= BRAND ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="inline-block group"
            >
              <motion.h2
                whileHover={{ scale: 1.03 }}
                className="text-3xl font-black tracking-tight text-white"
              >
                Pratik
                <span className="text-blue-500">.</span>
              </motion.h2>
            </a>

            <p className="mt-4 text-sm leading-6 text-gray-500 max-w-sm">
              Java Full Stack Developer building modern, scalable and
              user-focused web applications with clean and reliable code.
            </p>

            {/* Status */}

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-green-500/20 bg-green-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping"></span>

                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>

              <span className="text-xs text-green-400">
                Open to Opportunities
              </span>
            </div>
          </motion.div>


          {/* ================= NAVIGATION ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-5">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative w-fit text-sm text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <span className="group-hover:text-blue-400 transition-colors duration-300">
                    {link.name}
                  </span>

                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>


          {/* ================= CONNECT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-5">
              Connect
            </h3>

            <div className="flex flex-col gap-3">

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300">
                    {social.name === "GitHub" ? (
                      <span className="text-xs font-bold">GH</span>
                    ) : (
                      <span className="text-xs font-bold">in</span>
                    )}
                  </span>

                  <span>{social.name}</span>

                  <span className="text-gray-600 group-hover:text-blue-400 transition-colors">
                    ↗
                  </span>
                </motion.a>
              ))}

              {/* Resume */}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all duration-300">
                  <span className="text-xs font-bold">CV</span>
                </span>

                <span>Resume</span>

                <span className="text-gray-600 group-hover:text-purple-400 transition-colors">
                  ↗
                </span>
              </motion.a>

            </div>
          </motion.div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="relative mt-14 mb-7">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Center Glow */}

          <div className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-20 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
        </div>


        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Copyright */}

          <p className="text-xs text-gray-600 text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-gray-400">
              Pratik Raskar
            </span>
            . All rights reserved.
          </p>


          {/* Built With */}

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>Built with</span>

            <span className="text-blue-400">
              React
            </span>

            <span>+</span>

            <span className="text-purple-400">
              Tailwind
            </span>

            <span>+</span>

            <span className="text-cyan-400">
              JavaScript
            </span>
          </div>


          {/* Back To Top */}

          <motion.a
            href="#home"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
          >
            <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
              Back to top
            </span>

            <span className="text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
              ↑
            </span>
          </motion.a>

        </div>


        {/* ================= DECORATIVE TEXT ================= */}

        <div className="mt-10 text-center select-none pointer-events-none">
          <p className="text-[clamp(3rem,10vw,8rem)] font-black tracking-tighter text-white/[0.02] leading-none">
            PRATIK
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer