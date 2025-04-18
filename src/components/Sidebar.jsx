import useAos from "../hooks/Aos";
import {
  FaGithub,
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaRegEnvelope,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import avatar from "../assets/me-img.png";

const Sidebar = () => {
  useAos();

  return (
    <div className="bg-gray-600 h-screen w-[350px] rounded-xl m-7 hidden md:block">
      <div className="bg-gray-600 rounded-md p-4">
        <div className="rounded-xl p-3 flex items-center justify-center">
          <img
            src={avatar}
            alt=""
            className="w-[200px] h-[200px] bg-gray-700 rounded-2xl object-cover"
            data-aos="flip-left"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
        <h1
          className="text-white font-bold text-center text-3xl my-2"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
        >
          Muhammadnazar Nazarov
        </h1>
        <p
          className="text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Frontend Developer
        </p>
        <hr
          className="text-gray-700 mx-4 border-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        />
        <div className="mt-7 px-4 space-y-7">
          {[
            {
              icon: <FaRegEnvelope className="text-yellow-500 text-2xl" />,
              title: "EMAIL",
              value: "nazarovvweb@gmail.com",
              aos: "zoom-in",
            },
            {
              icon: (
                <MdOutlinePhoneIphone className="text-yellow-500 text-2xl" />
              ),
              title: "PHONE",
              value: "+998 90-777-28-23",
              aos: "zoom-in",
            },
            {
              icon: <FaGithub className="text-yellow-500 text-2xl" />,
              title: "GitHub",
              value: "nazarovmk",
              link: "https://github.com/nazarovmk",
              aos: "zoom-in",
            },
            {
              icon: <FaTelegramPlane className="text-yellow-500 text-2xl" />,
              title: "Telegram",
              value: "nazarov_mk",
              link: "https://t.me/nazarov_mk",
              aos: "zoom-in",
            },
            {
              icon: <FaRegCalendarAlt className="text-yellow-500 text-2xl" />,
              title: "BIRTHDAY",
              value: "31 August, 2008",
              aos: "zoom-in",
            },
            {
              icon: <FaMapMarkedAlt className="text-yellow-500 text-2xl" />,
              title: "LOCATION",
              value: "Uzbekistan, Fergana",
              aos: "zoom-in",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-3 items-center"
              data-aos={item.aos || "fade-right"}
              data-aos-anchor-placement="top-bottom"
            >
              <div className="bg-gray-700 p-2 rounded-md shadow">
                {item.icon}
              </div>
              <div className="text-white">
                <h1 className="font-semibold">{item.title}</h1>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-gray-200 hover:text-yellow-400 transition"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-200" data-aos="fade-up">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
