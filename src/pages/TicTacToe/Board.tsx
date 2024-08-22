import Square from "./Square";

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
};

export default function Board({ squares, onClick }: BoardProps) {
  return (
    <div className="m-auto grid h-[500px] w-[500px] grid-cols-3 grid-rows-3 gap-4 border-[16px] border-solid border-orange-500 bg-orange-500">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
