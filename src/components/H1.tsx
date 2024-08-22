import { HTMLAttributes } from "react";
import { cn } from "src/utils/cn";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

export default function H1({ className, ...props }: H1Props) {
  const h1Classes = "mx-2 mb-2 p-1 text-2xl sm:text-5xl font-medium";
  const combinedClasses = cn(h1Classes, className);

  return <h1 className={combinedClasses}>{props.children}</h1>;
}
