import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import Button from "src/components/Button";

interface HomeButtonProps extends HTMLAttributes<HTMLButtonElement> {
  path?: string;
  onClick?: () => void;
}

export default function HomeButton(props: HomeButtonProps) {
  return (
    <Link to={props.path ? props.path : ""}>
      <Button onClick={props.onClick ? props.onClick : () => {}}>
        <div className="flex gap-1">{props.children}</div>
      </Button>
    </Link>
  );
}
