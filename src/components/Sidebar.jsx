import {
  FaGithub,
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaRegEnvelope,
  FaTelegramPlane,
} from "react-icons/fa";
import avatar from "../assets/avatar.avif";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 h-screen w-[350px] rounded-xl m-7 hidden md:block">
      <div className="bg-gray-600 rounded-md p-4">
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
              <FaGithub className="text-yellow-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">GitHub</h1>
              <a
                href="https://github.com/nazarovmk"
                target="_blank"
                className="text-gray-200 hover:text-yellow-400 transition"
              >
                nazarovmk
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-gray-700 p-2 rounded-md shadow">
              <FaTelegramPlane className="text-yellow-500 text-2xl" />
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
              <p className="text-gray-200">"Uzbekistan, Fergana"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
