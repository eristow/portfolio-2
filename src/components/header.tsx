import { useNavigate } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import Button from "./button";
import H1 from "./h1";

type NavButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

function NavButton(props: NavButtonProps) {
  return (
    <Button
      className="min-w-28 max-w-28 bg-indigo-600 text-neutral-100 hover:border-neutral-300 hover:text-neutral-100"
      onClick={props.onClick}
    >
      <div className="flex">{props.children}</div>
    </Button>
  );
}

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-flow-col grid-cols-[20%_60%_20%] border-b-4 border-neutral-950 bg-neutral-400 text-center dark:bg-neutral-900">
      <div className="m-auto">
        <NavButton onClick={() => navigate("/")}>
          <MdOutlineHome style={{ margin: "auto" }} />
          Home
        </NavButton>
      </div>
      <div>
        <H1 className="font-thin">Evan Ristow's Portfolio</H1>
      </div>
      <div></div>
    </div>
  );
}
