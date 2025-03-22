import {
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import avatar from "../assets/avatar.avif";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { NavLink } from "react-router-dom";
const ResponsiveMenu = ({ open, setOpen }) => {
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
            alt=""
            className="w-[200px] bg-gray-700 rounded-2xl"
          />
        </div>
        <h1 className="text-white font-bold text-center text-3xl my-2">
          Muhammadnazar Nazarov
        </h1>
        <p className="text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7">
          Frontend Developer
        </p>
        <hr className="text-gray-700 mx-4 border-2" />

        <nav className="mt-5">
          <ul className="flex flex-wrap text-center gap-2 items-center justify-center text-white text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/resume"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
              }
            >
              <li>Resume</li>
            </NavLink>
            <NavLink
              to={"/portfolio"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
              }
            >
              <li>Portfolio</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>

        <div className="mt-7 px-4 space-y-7">
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaRegEnvelope className="text-yellow-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">EMAIL</h1>
              <p className="text-gray-200">nazarovvweb@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <MdOutlinePhoneIphone className="text-yellow-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">PHONE</h1>
              <p className="text-gray-200">+998 90-777-28-23</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaRegCalendarAlt className="text-yellow-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">Telegram</h1>
              <a
                href="https://t.me/nazarov_mk"
                target="_blank"
                className="text-gray-200 hover:text-yellow-400 transition"
              >
                nazarov_mk
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaRegCalendarAlt className="text-yellow-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">BIRTHDAY</h1>
              <p className="text-gray-200">31 August, 2008</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaMapMarkedAlt className="text-yellow-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">LOCATION</h1>
              <p className="text-gray-200">Uzbekistan Ferghana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
