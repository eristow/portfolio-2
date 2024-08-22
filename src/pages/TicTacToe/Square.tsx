import { cn } from "src/utils/cn";

type SquareProps = {
  value: string;
  onClick: () => void;
};

export default function Square({ value, onClick }: SquareProps) {
  const squareStyles = [
    "bg-neutral-800 font-bold text-8xl border-none cursor-pointer outline-none",
    {
      "text-red-600": value === "X",
      "text-green-600": value === "O",
    },
  ];
  const combinedStyles = cn(squareStyles);

  return (
    <button className={combinedStyles} onClick={onClick}>
      {value}
    </button>
  );
}
