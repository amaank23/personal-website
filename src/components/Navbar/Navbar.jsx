import { attentionColor } from "../../utils/utils";
import Container from "../Containers/Container";
import NavLink from "./NavLink";

const Navbar = ({ onClickNavigate }) => {
  return (
    <div className="fixed w-full top-6 z-50">
      <Container>
        <div className="flex justify-between items-center overflow-hidden">
          <div className="logo">
            <h2 className="text-[1.875em] font-medium text-white">
              <span style={{ color: attentionColor }}>{"<"}</span>Aman
              <span style={{ color: attentionColor }}>{" />"}</span>
            </h2>
          </div>
          <div className="gap-7 flex justify-center nav-menu">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
