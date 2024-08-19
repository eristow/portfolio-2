import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  borderColor: string;
}

export default function Button(props: ButtonProps) {
  const buttonClasses = `m-1 cursor-pointer self-center rounded-lg border-2 border-${props.borderColor} bg-${props.color} p-3 text-lg active:text-white sm:m-1 sm:w-full sm:flex-1`;

  return <button className={buttonClasses} {...props} />;
}
