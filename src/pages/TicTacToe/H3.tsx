import { HTMLAttributes } from "react";

export function H3(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="p-4 text-2xl font-medium">{props.children}</h3>;
}
