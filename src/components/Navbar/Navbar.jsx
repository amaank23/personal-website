import { useContext, useState } from "react";
import { attentionColor, themeObject } from "../../utils/utils";
import Container from "../Containers/Container";
import NavLink from "./NavLink";
import { ThemeContext } from "../../context/themeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="fixed w-full top-6 z-50">
      <Container>
        <div className="flex justify-between items-center overflow-hidden">
          <div className="logo">
            <h2 className="text-[1.875rem] font-medium text-white">
              <span style={{ color: attentionColor }}>{"<"}</span>
              <span
                style={{ color: themeObject[themeContext.theme].textColor }}
              >
                Aman
              </span>
              <span style={{ color: attentionColor }}>{" />"}</span>
            </h2>
          </div>
          <NavbarMobile />
          <div className="gap-7 justify-center nav-menu items-center hidden md:flex">
            <NavLink label={"Home"} href="home" />
            <NavLink label={"About"} href="about" />
            <NavLink label={"Work"} href="work" />
            <NavLink label={"Contact"} href="contact" />
            <button
              className="bg-[#FF5925] text-white px-4 py-4 rounded-md"
              onClick={themeContext.toggleTheme}
            >
              Switch To{" "}
              {themeContext.theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  function onClickNavigate() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="md:hidden">
      <div
        className="w-[60px] h-[60px] bg-attention flex justify-center items-center rounded-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        <GiHamburgerMenu color="#fff" size={40} />
      </div>
      {open && (
        <div className="w-full h-full fixed top-0 left-0 bg-attention flex flex-col gap-12 justify-center items-center">
          <NavLink
            label={"Home"}
            className="text-3xl"
            href="home"
            onClickNavigate={onClickNavigate}
          />
          <NavLink
            label={"About"}
            className="text-3xl"
            href="about"
            onClickNavigate={onClickNavigate}
          />
          <NavLink
            label={"Work"}
            className="text-3xl"
            href="work"
            onClickNavigate={onClickNavigate}
          />
          <NavLink
            label={"Contact"}
            className="text-3xl"
            href="contact"
            onClickNavigate={onClickNavigate}
          />
          <RxCross2
            className="absolute top-2 right-2"
            color="#fff"
            size={34}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
