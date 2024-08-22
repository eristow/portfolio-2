import { HTMLAttributes } from "react";
import { cn } from "src/utils/cn";

type H2Props = HTMLAttributes<HTMLHeadingElement>;

export default function H2({ className, ...props }: H2Props) {
  const h2Classes = "mx-2 p-1 text-lg sm:text-2xl font-medium";
  const combinedClasses = cn(h2Classes, className);

  return <h2 className={combinedClasses}>{props.children}</h2>;
}
