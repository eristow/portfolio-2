import { FormEvent, HTMLProps, useState } from "react";
import H1 from "src/components/h1";
import Input from "src/components/input";

const Text = (props: HTMLProps<HTMLParagraphElement>) => (
  <p className="mb-0 mt-0">{props.children}</p>
);

const compute = (num: number, multiplier: number) =>
  Math.round((num * multiplier + Number.EPSILON) * 100) / 100;

export default function Stocks() {
  const [numStocks, setNumStocks] = useState(10);
  const [numStocksArr, setNumStocksArr] = useState([
    ...Array(numStocks).keys(),
  ]);
  const [stockVals, setStockVals] = useState({
    ...numStocksArr.map(() => ""),
  });
  const [multiplier, setMultiplier] = useState(0.8);

  const secondColumnStart = Math.ceil(numStocks / 2);

  const onChangeNumStocks = (e: FormEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value);
    setNumStocks(num);
    setNumStocksArr([...Array(num).keys()]);
  };

  const onChangeStockVal = (e: FormEvent<HTMLInputElement>, num: number) => {
    const stockValsCopy = JSON.parse(JSON.stringify(stockVals));
    stockValsCopy[num] = e.currentTarget.value;
    setStockVals(stockValsCopy);
  };

  const onChangeMultiplier = (e: FormEvent<HTMLInputElement>) => {
    const newMultiplier = Number(e.currentTarget.value);
    setMultiplier(newMultiplier);
  };

  return (
    <div className="flex w-screen flex-grow flex-col justify-start">
      <div className="text-center">
        <H1>Stock Calculator</H1>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Text>Number of Stocks:</Text>
          <Input
            type="number"
            value={numStocks}
            onChange={onChangeNumStocks}
            min="1"
            max="10"
          />
        </div>
        <div>
          <Text>Multiplier</Text>
          <Input
            type="number"
            value={multiplier}
            onChange={onChangeMultiplier}
            min="0.0"
            max="1.0"
          />
        </div>
        <div>
          {numStocksArr.slice(0, secondColumnStart).map((num) => (
            <div key={`stock${num}`}>
              <Text>
                Stock {num + 1} New Stop Price:{" "}
                {compute(Number(stockVals[num]), multiplier)}
              </Text>
              <Input
                placeholder="0"
                type="number"
                value={stockVals[num]}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  onChangeStockVal(e, num)
                }
              />
            </div>
          ))}
        </div>
        <div>
          {numStocksArr.slice(secondColumnStart).map((num) => (
            <div key={`stock${num}`}>
              <Text>
                Stock {num + 1} New Stop Price:{" "}
                {compute(Number(stockVals[num]), multiplier)}
              </Text>
              <Input
                placeholder="0"
                type="number"
                value={stockVals[num]}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  onChangeStockVal(e, num)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
