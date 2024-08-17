import { HTMLProps } from "react";

export default function ButtonContainer(props: HTMLProps<HTMLDivElement>) {
  return (
    <div className="mb-4 block auto-cols-auto grid-flow-col justify-around sm:grid">
      {props.children}
    </div>
  );
}
