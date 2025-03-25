import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import avatar from "../assets/avatar.avif";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ open, setOpen }) => {
  useEffect(() => {
    const savedMenuState = localStorage.getItem("menuOpen") === "true";
    if (savedMenuState !== open) {
      setOpen(savedMenuState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menuOpen", open);
  }, [open]);

  return (
    <div
      className={`${
        open ? "left-0" : "left-[100%]"
      } fixed bottom-0 top-0 z-20 overflow-auto flex h-screen w-[80%] flex-col justify-between bg-gray-950 px-2 pb-4 pt-4 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div className="bg-gray-600 rounded-md p-2">
        <div className="rounded-xl p-3 flex items-center justify-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-[200px] bg-gray-700 rounded-2xl"
            data-aos="flip-down"
          />
        </div>
        <h1
          className="text-white font-bold text-center text-3xl my-2"
          data-aos="zoom-in"
        >
          Muhammadnazar Nazarov
        </h1>
        <p
          className="text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7"
          data-aos="zoom-in"
        >
          Frontend Developer
        </p>
        <hr className="text-gray-700 mx-4 border-2" />

        <nav className="mt-5">
          <ul
            className="flex flex-wrap text-center gap-2 items-center justify-center text-white text-xl font-semibold"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {[
              { to: "/", label: "About" },
              { to: "/resume", label: "Resume" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-yellow-500" : "text-white"
                  } cursor-pointer`
                }
                onClick={() => setOpen(false)}
              >
                <li>{label}</li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <div
          className="mt-7 px-4 space-y-7"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {[
            {
              icon: <FaRegEnvelope className="text-yellow-500 text-2xl" />,
              title: "EMAIL",
              value: "nazarovvweb@gmail.com",
            },
            {
              icon: (
                <MdOutlinePhoneIphone className="text-yellow-500 text-2xl" />
              ),
              title: "PHONE",
              value: "+998 90-777-28-23",
            },
            {
              icon: <FaGithub className="text-yellow-500 text-2xl" />,
              title: "GitHub",
              value: "nazarovmk",
              link: "https://github.com/nazarovmk",
            },
            {
              icon: <FaRegCalendarAlt className="text-yellow-500 text-2xl" />,
              title: "Telegram",
              value: "nazarov_mk",
              link: "https://t.me/nazarov_mk",
            },
            {
              icon: <FaRegCalendarAlt className="text-yellow-500 text-2xl" />,
              title: "BIRTHDAY",
              value: "31 August, 2008",
            },
            {
              icon: <FaMapMarkedAlt className="text-yellow-500 text-2xl" />,
              title: "LOCATION",
              value: "Uzbekistan, Fergana",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="bg-gray-700 p-2 rounded-md shadow">
                {item.icon}
              </div>
              <div className="text-white">
                <h1 className="font-semibold">{item.title}</h1>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-yellow-400 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-200">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
