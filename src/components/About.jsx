import Reveal from "./Reveal"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-2">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

        </div>


        {/* About Content */}

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}

            <div className="flex justify-center">

              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center">

                <span className="text-gray-500 text-lg">
                  Your Photo
                </span>

              </div>

            </div>


            {/* Text */}

            <div>

              <h3 className="text-3xl font-bold mb-6">
                I'm Pratik Raskar
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5">
                I am a Computer Science graduate and aspiring
                Full Stack Developer passionate about building
                web applications and solving real-world problems
                through technology.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                I enjoy working with Java, Spring Boot, React,
                SQL and other modern technologies. I am continuously
                learning new technologies and improving my problem
                solving and development skills.
              </p>


              {/* Information */}

              <div className="grid sm:grid-cols-2 gap-5 mb-8">

                <div>
                  <p className="text-gray-500 text-sm">
                    Education
                  </p>

                  <p className="text-white font-medium">
                    B.E. Computer Science
                  </p>
                </div>


                <div>
                  <p className="text-gray-500 text-sm">
                    Role
                  </p>

                  <p className="text-white font-medium">
                    Full Stack Developer
                  </p>
                </div>


                <div>
                  <p className="text-gray-500 text-sm">
                    Location
                  </p>

                  <p className="text-white font-medium">
                    Pune, India
                  </p>
                </div>


                <div>
                  <p className="text-gray-500 text-sm">
                    Focus
                  </p>

                  <p className="text-white font-medium">
                    Web Development
                  </p>
                </div>

              </div>


              {/* Button */}

              <a
                href="/resume.pdf"
                download
                className="inline-block px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
              >
                Download Resume
              </a>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About