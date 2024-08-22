import { HTMLProps } from "react";
import { cn } from "src/utils/cn";

export default function ButtonContainer(props: HTMLProps<HTMLDivElement>) {
  const containerClasses =
    "mb-4 flex place-items-center justify-center gap-4 flex-wrap";
  const combinedClasses = cn(containerClasses, props.className);

  return <div className={combinedClasses}>{props.children}</div>;
}
