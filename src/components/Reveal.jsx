import { motion } from "framer-motion"

function Reveal({
  children,
  delay = 0,
  y = 35,
  duration = 0.7,
  amount = 0.15,
  once = true,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal