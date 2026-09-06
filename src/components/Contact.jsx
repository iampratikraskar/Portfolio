import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setStatus("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "089ace8a-97a9-4cad-91a8-5e628dcb6039",

          name: formData.name,
          email: formData.email,
          message: formData.message,

          subject: `New Portfolio Message from ${formData.name}`,

          from_name: "Pratik Portfolio",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("Message sent successfully! 🎉")

        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setStatus("Something went wrong. Please try again.")
      }

    } catch (error) {
      console.error("Contact form error:", error)

      setStatus("Unable to send message. Please try again.")
    }

    setLoading(false)
  }

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-2">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project, opportunity or question?
            Feel free to get in touch with me.
          </p>

        </div>


        {/* Content */}

        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>

              {/* Name */}

              <div className="mb-5">

                <label className="block text-gray-300 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition"
                />

              </div>


              {/* Email */}

              <div className="mb-5">

                <label className="block text-gray-300 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition"
                />

              </div>


              {/* Message */}

              <div className="mb-6">

                <label className="block text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition resize-none"
                />

              </div>


              {/* Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg font-medium transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>


              {/* Status */}

              {status && (
                <p className="text-sm text-center mt-4 text-gray-300">
                  {status}
                </p>
              )}

            </form>

          </div>


          {/* Contact Information */}

          <div className="flex flex-col justify-center">

            <h3 className="text-3xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always interested in discussing new projects,
              development opportunities and interesting ideas.
            </p>


            {/* Email */}

            <div className="mb-6">

              <p className="text-gray-500 text-sm">
                Email
              </p>

              <a
                href="mailto:iampratikraskar@gmail.com"
                className="text-gray-200 hover:text-blue-500 transition"
              >
                iampratikraskar@gmail.com
              </a>

            </div>


            {/* LinkedIn */}

            <div className="mb-6">

              <p className="text-gray-500 text-sm">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-500 transition"
              >
                LinkedIn Profile ↗
              </a>

            </div>


            {/* GitHub */}

            <div>

              <p className="text-gray-500 text-sm">
                GitHub
              </p>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-500 transition"
              >
                GitHub Profile ↗
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact