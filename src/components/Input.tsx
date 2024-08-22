import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="m-1 mt-0 rounded bg-neutral-900 text-neutral-100 placeholder:text-slate-500"
      {...props}
    />
  );
}
