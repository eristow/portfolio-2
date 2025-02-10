import Square from "./Square";

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
};

export default function Board({ squares, onClick }: BoardProps) {
  return (
    <div className="m-auto grid h-[200px] w-[200px] grid-cols-3 grid-rows-3 gap-2 border-[8px] border-solid border-orange-500 bg-orange-500 sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] md:gap-4 md:border-[16px]">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
