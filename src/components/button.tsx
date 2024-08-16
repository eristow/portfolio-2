import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="m-1 cursor-pointer self-center rounded bg-zinc-900 p-3 text-lg active:text-white sm:m-1 sm:w-full sm:flex-1"
      {...props}
    />
  );
}
