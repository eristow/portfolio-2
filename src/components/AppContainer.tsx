import { HTMLAttributes } from "react";

export default function AppContainer(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex w-screen flex-grow flex-col justify-start">
      {props.children}
    </div>
  );
}
