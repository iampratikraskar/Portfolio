import { useEffect, useState } from "react"

function BackToTop() {

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

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

  if (!showButton) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

export default BackToTop