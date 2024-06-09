import { useContext } from "react";
import { attentionColor, themeObject } from "../../utils/utils";
import Container from "../Containers/Container";
import NavLink from "./NavLink";
import { ThemeContext } from "../../context/themeContext";

const Navbar = ({ onClickNavigate }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="fixed w-full top-6 z-50">
      <Container>
        <div className="flex justify-between items-center overflow-hidden">
          <div className="logo">
            <h2 className="text-[1.875em] font-medium text-white">
              <span style={{ color: attentionColor }}>{"<"}</span>
              <span
                style={{ color: themeObject[themeContext.theme].textColor }}
              >
                Aman
              </span>
              <span style={{ color: attentionColor }}>{" />"}</span>
            </h2>
          </div>
          <div className="gap-7 flex justify-center nav-menu items-center">
            <NavLink
              label={"Home"}
              onClickNavigate={() => onClickNavigate(0)}
            />
            <NavLink
              label={"About"}
              onClickNavigate={() => onClickNavigate(1)}
            />
            <NavLink
              label={"Work"}
              onClickNavigate={() => onClickNavigate(2)}
            />
            <NavLink
              label={"Contact"}
              onClickNavigate={() => onClickNavigate(3)}
            />
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

export default Navbar;
