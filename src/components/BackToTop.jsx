import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.6,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.6,
            y: 20,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.08,
            y: -5,
          }}
          whileTap={{
            scale: 0.92,
          }}
          onClick={scrollToTop}
          className="
            group
            fixed
            bottom-6
            right-6
            z-50
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            overflow-hidden
            border
            border-blue-500/30
            bg-[#080b14]/80
            backdrop-blur-xl
            text-white
            shadow-[0_0_25px_rgba(59,130,246,0.15)]
            hover:border-blue-400/60
            hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
            transition-shadow
            duration-300
          "
          aria-label="Back to top"
        >

          {/* ================= SHINE ================= */}

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              group-hover:translate-x-full
              transition-transform
              duration-700
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
          />


          {/* ================= GLOW ================= */}

          <span
            className="
              absolute
              inset-0
              rounded-xl
              bg-blue-500/10
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
            "
          />


          {/* ================= ARROW ================= */}

          <motion.span
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              text-xl
              text-blue-400
              group-hover:text-blue-300
              transition-colors
              duration-300
            "
          >
            ↑
          </motion.span>


          {/* ================= BORDER GLOW ================= */}

          <span
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-0
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-blue-400
              to-purple-500
              group-hover:w-7
              transition-all
              duration-300
            "
          />

        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop