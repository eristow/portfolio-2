import { ButtonHTMLAttributes } from "react";
import { cn } from "src/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: ButtonProps) {
  const buttonClasses =
    "m-1 cursor-pointer self-center rounded-lg border-2 border-solid border-transparent bg-zinc-900 p-3 text-lg active:text-white sm:w-full sm:flex-1 hover:border-indigo-500 focus:outline-4 transition-colors duration-300 font-medium text-indigo-500 hover:text-indigo-600";
  const combinedClasses = cn(buttonClasses, className);

  return <button className={combinedClasses} {...props} />;
}
