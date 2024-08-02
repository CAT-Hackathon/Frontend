import Logo from "#assets/svg/logo.svg?react";
import { NavLink } from "react-router-dom";
import style from "./styles.module.css";

const {navLinks} = style;
const Header = () => {
  return (
    <header className="flex justify-between px-12 py-3 bg-transparent gap-12">
      <NavLink to={"/"} className="logo flex flex-[0.25] items-center gap-6">
        <Logo title="logo" />
        <h2 className="font-bold text-2xl bg-gradient-to-r from-[#113573] to-[#4B97F4] bg-clip-text text-transparent">
          Met2ashara
        </h2>
      </NavLink>

      <div className={`${navLinks} flex justify-around items-center flex-1`}>
        <NavLink to={"/"}>
            Home
        </NavLink>
        <NavLink to={"about-us"}>
            About Us
        </NavLink>
        <NavLink to={"/contact"}>
            Contact
        </NavLink>
        <NavLink to={"/cv"}>
            Make CV
        </NavLink>
        <NavLink to={"/profile"}>
            Profile
        </NavLink>
      </div>

      <div className="navACtions flex justify-center items-center">
        <NavLink to={"/login"} className="btnPrimary">Log in</NavLink>
      </div>
    </header>
  );
};

export default Header;
