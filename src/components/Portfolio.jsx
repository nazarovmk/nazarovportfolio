import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { projects } from "./data";
import Navbar from "./Navbar";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      once: false,
      offset: 100, // Element qanchalik pastga kelganda animatsiya ishlaydi
      duration: 600, // Animatsiya tezligi
    });

    const handleScroll = () => {
      Aos.refresh(); // Skroll qilinganda AOS-ni yangilash
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5 pb-20 min-h-screen overflow-x-hidden">
      <Navbar
        className="overflow-hidden max-w-full"
        data-aos="fade-down"
        data-aos-duration="300"
      />

      <div className="mt-7">
        <div data-aos="zoom-in" data-aos-duration="400">
          <h2 className="text-white font-bold text-3xl mb-2">Portfolio</h2>
          <hr className="border-2 text-yellow-500 w-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-7">
          {projects.map((project, index) => {
            const duration = 400 + index * 80;
            const delay = index * 50;

            return (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                data-aos="fade-up"
                data-aos-duration={duration}
                data-aos-delay={delay}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-[100%] h-48 object-cover px-2 sm:px-3 pt-2 sm:pt-3 rounded-xl"
                  data-aos="zoom-in"
                  data-aos-duration={duration - 100}
                />
                <div className="p-4 sm:p-5 md:p-6">
                  <h3
                    className="text-2xl font-semibold text-gray-300 mb-2"
                    data-aos="flip-right"
                    data-aos-duration={duration + 100}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-300 mb-4"
                    data-aos="slide-up"
                    data-aos-duration={duration + 200}
                  >
                    {project.description}
                  </p>
                  <div
                    className="flex flex-wrap gap-2 mb-4"
                    data-aos="fade-left"
                    data-aos-duration={duration - 50}
                  >
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                        data-aos="zoom-in"
                        data-aos-duration={duration - 150}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex sm:flex-row gap-3"
                    data-aos="fade-up"
                    data-aos-duration={duration + 100}
                  >
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                    >
                      View Project
                    </Link>
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md transition-transform"
                      data-aos="fade-left"
                      data-aos-duration={duration}
                      data-aos-delay="50"
                    >
                      <FaGithub /> Github
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
