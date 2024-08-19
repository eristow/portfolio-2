import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

function NavButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="m-1 cursor-pointer self-center rounded bg-zinc-700 p-3 text-lg active:text-white sm:m-1 sm:w-full sm:flex-1"
      {...props}
    />
  );
}

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="border-b-4 border-neutral-950 bg-neutral-900 text-center">
      <div className="grid grid-flow-row">
        <NavButton onClick={() => navigate("/")}>Home</NavButton>
      </div>
      <div>
        <h1 className="mx-2 p-1">Evan Ristow's Portfolio</h1>
      </div>
    </div>
  );
}
