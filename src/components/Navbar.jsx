import { NavLink } from "react-router-dom";
import Logo from "../assets/nazarov-logo.webp";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import useAos from "../hooks/Aos";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  useAos;
  return (
    <div className="md:bg-transparent bg-gray-800 rounded-2xl">
      <nav className="hidden md:block">
        <ul className="flex gap-10 items-center justify-end text-white text-2xl font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
            }
            data-aos="zoom-out-down"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to={"/resume"}
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
            }
            data-aos="zoom-out-down"
          >
            <li>Resume</li>
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
            }
            data-aos="zoom-out-down"
          >
            <li>Portfolio</li>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`
            }
            data-aos="zoom-out-down"
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
      <div className="flex justify-between items-center text-xl md:hidden px-5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-20 rounded-xl p-1" />
        </NavLink>

        {open ? (
          <HiMenuAlt3 className="text-yellow-500 w-10 h-10" onClick={toggle} />
        ) : (
          <HiMenuAlt1 className="text-yellow-500 w-10 h-10" onClick={toggle} />
        )}
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
