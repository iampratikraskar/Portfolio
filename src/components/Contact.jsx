import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              "089ace8a-97a9-4cad-91a8-5e628dcb6039",

            name: formData.name,
            email: formData.email,
            message: formData.message,

            subject: `New Portfolio Message from ${formData.name}`,

            from_name: "Pratik Portfolio",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] text-white px-6 py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Blue Glow */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-[-180px] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]"
        />

        {/* Purple Glow */}

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[-180px] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px]"
        />

        {/* Center Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-16"
        >

          <motion.p
            whileHover={{
              scale: 1.05,
            }}
            className="text-blue-400 font-medium mb-3 tracking-widest uppercase text-sm cursor-default"
          >
            Contact Me
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 80,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 rounded-full"
          />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Have a project, opportunity or question?
            Feel free to reach out. I'd love to hear from you.
          </p>

        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ================= FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            whileHover={{
              y: -5,
            }}
            className="relative overflow-hidden bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-blue-500/30 rounded-2xl p-7 md:p-8 shadow-2xl transition-all duration-300"
          >

            {/* Top Glow */}

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

            <h3 className="text-2xl font-bold mb-2">
              Send Me a Message
            </h3>

            <p className="text-gray-500 text-sm mb-7">
              Fill out the form and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit}>

              {/* Name */}

              <div className="mb-5">

                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>

                <motion.input
                  whileFocus={{
                    scale: 1.01,
                  }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3.5 bg-gray-950/80 border border-gray-700 rounded-xl outline-none text-white placeholder-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
                />

              </div>

              {/* Email */}

              <div className="mb-5">

                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>

                <motion.input
                  whileFocus={{
                    scale: 1.01,
                  }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 bg-gray-950/80 border border-gray-700 rounded-xl outline-none text-white placeholder-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
                />

              </div>

              {/* Message */}

              <div className="mb-6">

                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>

                <motion.textarea
                  whileFocus={{
                    scale: 1.01,
                  }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full px-4 py-3.5 bg-gray-950/80 border border-gray-700 rounded-xl outline-none text-white placeholder-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 resize-none"
                />

              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={
                  !loading
                    ? {
                        y: -4,
                        scale: 1.02,
                        boxShadow:
                          "0 15px 40px rgba(37,99,235,0.3)",
                      }
                    : {}
                }
                whileTap={
                  !loading
                    ? {
                        scale: 0.98,
                      }
                    : {}
                }
                className="group relative overflow-hidden w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/10"
              >

                {/* Shine */}

                {!loading && (
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2">

                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message

                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </>
                  )}

                </span>

              </motion.button>

              {/* Status */}

              {status === "success" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center"
                >
                  Message sent successfully! 🎉
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}

            </form>
          </motion.div>

          {/* ================= CONTACT INFO ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col justify-center"
          >

            <p className="text-blue-400 text-sm uppercase tracking-widest mb-3">
              Let's Talk
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              Have something{" "}
              <span className="text-blue-400">
                interesting
              </span>{" "}
              in mind?
            </h3>

            <p className="text-gray-400 leading-relaxed mb-9">
              I'm always interested in discussing new projects,
              development opportunities, collaborations and
              interesting ideas.
            </p>

            {/* ================= CONTACT CARDS ================= */}

            <div className="space-y-4">

              {/* Email */}

              <motion.a
                href="mailto:iampratikraskar@gmail.com"
                whileHover={{
                  x: 8,
                  scale: 1.01,
                }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/40 hover:bg-gray-900 transition-all duration-300"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  @
                </div>

                <div className="flex-1">

                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Email
                  </p>

                  <p className="text-gray-200 group-hover:text-blue-400 transition-colors">
                    iampratikraskar@gmail.com
                  </p>

                </div>

                <span className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                  ↗
                </span>

              </motion.a>

              {/* LinkedIn */}

              <motion.a
                href="https://linkedin.com/in/iampratikraskar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 8,
                  scale: 1.01,
                }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/40 hover:bg-gray-900 transition-all duration-300"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-lg group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  in
                </div>

                <div className="flex-1">

                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    LinkedIn
                  </p>

                  <p className="text-gray-200 group-hover:text-blue-400 transition-colors">
                    Connect with me
                  </p>

                </div>

                <span className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                  ↗
                </span>

              </motion.a>

              {/* GitHub */}

              <motion.a
                href="https://github.com/iampratikraskar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 8,
                  scale: 1.01,
                }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/40 hover:bg-gray-900 transition-all duration-300"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xl group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  ◉
                </div>

                <div className="flex-1">

                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    GitHub
                  </p>

                  <p className="text-gray-200 group-hover:text-purple-400 transition-colors">
                    View my projects
                  </p>

                </div>

                <span className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all">
                  ↗
                </span>

              </motion.a>

            </div>

            {/* Availability */}

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="mt-7 p-5 rounded-xl border border-green-500/20 bg-green-500/5"
            >

              <div className="flex items-center gap-3">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />

                </span>

                <div>

                  <p className="text-green-400 font-medium text-sm">
                    Available for opportunities
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Open to internships, jobs and freelance projects.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="text-center mt-20"
        >

          <p className="text-gray-600 text-sm">
            Let's build something{" "}
            <span className="text-blue-400">
              great
            </span>{" "}
            together.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;