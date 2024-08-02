import Logo from "#assets/svg/logo.svg?react";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const { navLinks, header } = style;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`${header} flex justify-between px-12 py-3 bg-transparent sm:gap-12 gap-6`}
    >
      <NavLink to={"/"} className="logo flex flex-[0.25] items-center gap-6">
        <Logo title="logo" />
        <h2 className="font-bold text-2xl bg-gradient-to-r from-[#113573] to-[#4B97F4] bg-clip-text text-transparent">
          Met2ashara
        </h2>
      </NavLink>

      <div className={`${navLinks} ${isOpen ? "!left-0" :""} flex justify-around items-center flex-1`}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about-us"}>About Us</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/cv"}>Make CV</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </div>

      <div className="navACtions flex justify-center items-center gap-4">
        <NavLink to={"/login"} className="btnPrimary">
          Log in
        </NavLink>

        <RxHamburgerMenu 
          className="sm:hidden block cursor-pointer" 
          size="32"
          onClick={()=> setIsOpen(!isOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
