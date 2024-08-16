import { HTMLProps } from "react";

export default function ButtonContainer(props: HTMLProps<HTMLDivElement>) {
  return <div className="grid auto-cols-auto sm:block">{props.children}</div>;
}
