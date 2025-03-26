import { useEffect } from "react";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.avif";
import { service } from "./data";
import { GiCheckMark } from "react-icons/gi";
import useAos from "../hooks/Aos"; // Hook'ni import qilamiz

const About = () => {
  useAos(); // AOS animatsiyalarini ishga tushiramiz

  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5">
      <Navbar />
      <div className="mt-7">
        <div data-aos="fade-up" data-aos-duration="500">
          <h2 className="text-white font-bold text-3xl mb-2">About Me</h2>
          <hr className="border-3 text-yellow-500 w-12 rounded-4xl" />
        </div>
        <div className="mt-5 md:hidden" data-aos="zoom-in">
          <img src={avatar} alt="" className="bg-gray-700 rounded-2xl" />
        </div>
        <p
          className="mt-4 text-gray-300 text-xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Hello! I'm Muhammadnazar Nazarov, a young and ambitious Frontend
          Developer constantly striving for self-improvement. Despite being only
          17 years old, I have over 8 months of experience in web development
          and enjoy creating functional, interactive, and visually appealing web
          applications using modern technologies.
        </p>
        <p
          className="mt-2 text-gray-300 text-xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="flex items-center gap-2">
            <GiCheckMark className="text-green-600" />
            Fast and High-Quality Work – I understand client needs and aim to
            create a flawless product.
          </span>
          <span className="flex items-center gap-2">
            <GiCheckMark className="text-green-600" />
            Responsible and a Team Player – I enjoy participating in new
            projects and solving challenges.
          </span>
          <span className="block mt-4">
            Currently, I'm looking for a Frontend Developer position to gain
            real-world experience and contribute my skills to impactful
            projects. If you need a creative, energetic, and responsible
            developer, I’m ready to help!
          </span>
        </p>
        <h2 className="text-2xl text-white font-bold mt-7" data-aos="fade-up">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-7 pb-10">
          {service.map((item, index) => {
            return (
              <div
                className="bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl"
                data-aos="flip-left"
                data-aos-duration="500"
                data-aos-delay="100"
                key={index}
              >
                <div className="text-6xl text-yellow-500">{item.logo}</div>
                <div>
                  <h2 className="font-bold text-2xl">{item.title}</h2>
                  <p className="text-xl text-gray-300">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
