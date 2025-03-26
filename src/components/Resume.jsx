import Navbar from "./Navbar";

const Resume = () => {
  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5">
      <Navbar />
      <div className="mt-6 md:mt-8 text-white flex-1">
        <div data-aos="fade-up" data-aos-duration="500">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Resume
          </h1>
          <hr className="border-2 sm:border-4 border-yellow-500 w-10 sm:w-12 md:w-16 rounded-full mb-6 md:mb-8" />
        </div>

        <div className="min-h-[calc(100vh-12rem)] w-full rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col">
          {/* Header */}
          <div
            className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 sm:p-6 md:p-8 lg:p-10 text-white relative flex-shrink-0"
            data-aos="fade-down"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
            <div className="relative z-10 text-center">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md"
                data-aos="zoom-in"
              >
                Muhammadnazar Nazarov
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 font-light tracking-wider"
                data-aos="fade-up"
              >
                Frontend Developer
              </p>
              <div
                className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm md:text-base lg:text-lg"
                data-aos="fade-up"
              >
                <a
                  href="mailto:nazarovvweb@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-200 transition-colors"
                >
                  nazarovvweb@gmail.com
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="tel:+998907772823"
                  className="hover:text-teal-200 transition-colors"
                >
                  +998 90 777 28 23
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="https://github.com/nazarovmk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-200 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 flex-1 overflow-y-auto">
            {/* Left Column - Skills & Education */}
            <div className="space-y-6 md:space-y-8 md:col-span-1">
              <div data-aos="fade-right">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-1">
                  Skills
                </h2>
                <ul className="mt-3 space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "JavaScript (ES6+)",
                    "HTML5 & CSS3",
                    "Git & GitHub",
                    "Responsive Design",
                    "Redux Toolkit",
                    "Rest API",
                    "Postman",
                    "DaisyUI",
                  ].map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-aos="fade-right"
                    >
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div data-aos="fade-right">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-1">
                  Education
                </h2>
                <div className="mt-3 text-gray-600 text-xs sm:text-sm md:text-base">
                  <h3 className="font-medium">Najot Ta'lim Graduate</h3>
                  <p>2024 - 2025</p>
                </div>
              </div>

              <div data-aos="fade-right">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-1 mt-4">
                  Languages
                </h2>
                <p className="pt-2 text-gray-700">
                  <span className="font-medium text-gray-800">English:</span> A1
                </p>
                <p className="text-gray-700">
                  <span className="font-medium text-gray-800">Russian:</span> B2
                </p>
                <p className="text-gray-700">
                  <span className="font-medium text-gray-800">Uzbek:</span>
                  Native Speaker (NS)
                </p>
              </div>
            </div>

            {/* Right Column - Summary & Experience */}
            <div className="md:col-span-2 space-y-6 md:space-y-8">
              <div data-aos="fade-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-1">
                  Summary
                </h2>
                <p className="mt-3 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  I am a 17-year-old talented and dedicated Frontend Developer
                  with 8 months of intensive experience. I have mastered modern
                  technologies and excel at blending design with
                  functionality—transforming Figma prototypes into high-quality
                  code. My strengths include quick learning, creative
                  problem-solving, and effective teamwork. I am always eager to
                  adopt the latest technologies and deliver innovative solutions
                  tailored to client needs. Beyond being a skilled coder, I
                  approach projects strategically, aiming to contribute to your
                  company’s success by creating high-quality, fast, and
                  user-friendly web solutions.
                </p>
              </div>

              <div data-aos="fade-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-teal-500 pb-1">
                  Work Experience
                </h2>
                <div className="mt-4 space-y-4 md:space-y-6 pb-21">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700">
                      Junior Frontend Developer
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      September 2024 - Present
                    </p>
                    <ul className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base list-disc list-inside">
                      <li data-aos="fade-left">
                        Developed complex web applications using React.
                      </li>
                      <li data-aos="fade-left">
                        Independently enhancing my frontend development skills
                        and knowledge.
                      </li>
                      <li data-aos="fade-left">
                        Gained hands-on experience converting Figma designs into
                        functional code.
                      </li>
                      <li data-aos="fade-left">
                        Created various independent projects to build a strong
                        portfolio.
                      </li>
                      <li data-aos="fade-left">
                        Continuously learning and staying updated with the
                        latest technologies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
