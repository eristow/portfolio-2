import { HTMLAttributes } from "react";
import { cn } from "src/utils/cn";

type ContentContainerProps = HTMLAttributes<HTMLDivElement>;

export default function ContentContainer(props: ContentContainerProps) {
  const containerClasses =
    "my-1 mx-auto w-2/3 max-w-4xl p-2 rounded-lg border border-solid border-transparent bg-neutral-800 text-center shadow-lg";
  const combinedClasses = cn(containerClasses, props.className);

  return <div className={combinedClasses}>{props.children}</div>;
}
