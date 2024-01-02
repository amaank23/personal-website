import { attentionColor } from "../../utils/utils";
import Container from "../Containers/Container";

const Navbar = () => {
  return (
    <div className="absolute w-full top-6">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[1.875em] font-medium text-white">
              <span style={{ color: attentionColor }}>{"<"}</span>Aman
              <span style={{ color: attentionColor }}>{" />"}</span>
            </h2>
          </div>
          <div className="gap-7 flex justify-center">
            <span className="text-lg cursor-pointer text-white">Home</span>
            <span className="text-lg cursor-pointer text-white">About</span>
            <span className="text-lg cursor-pointer text-white">Work</span>
            <span className="text-lg cursor-pointer text-white">Contact</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
