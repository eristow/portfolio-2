import { FormEvent, useState } from "react";
import Input from "src/components/input";
import Button from "src/components/button";

type ItemVals = {
  calories: number | null;
  fat: number | null;
  carbs: number | null;
  protein: number | null;
  weight: number | null;
};

const defaultItemVals: ItemVals = {
  calories: null,
  fat: null,
  carbs: null,
  protein: null,
  weight: null,
};

export default function RecipeCalculator() {
  const [items, setItems] = useState([{ ...defaultItemVals }]);
  const [totals, setTotals] = useState({ ...defaultItemVals });

  const onAddItem = () => {
    setItems([...items, { ...defaultItemVals }]);
  };

  const onRemoveItem = (index: number) => {
    setItems(items.filter((_item, i) => i !== index));
  };

  const onChangeItemVal = (
    e: FormEvent<HTMLInputElement>,
    index: number,
    key: string,
  ) => {
    const keyIndex = key as keyof ItemVals;
    const value = Number(e.currentTarget.value);
    const newItem = items[index];
    newItem[keyIndex] = value;

    const newItems = items;
    newItems[index] = newItem;
    setItems(newItems);

    const newTotals = {
      ...totals,
      [key]: items.reduce((prev, next) => prev + (next[keyIndex] ?? 0), 0),
    };
    setTotals(newTotals);
  };

  return (
    <div className="flex w-screen flex-col justify-start">
      <div className="flex justify-between gap-3">
        <p>Calories: {totals.calories}</p>
        <p>Fat: {totals.fat}</p>
        <p>Carbs: {totals.carbs}</p>
        <p>Protein: {totals.protein}</p>
        <p>Weight: {totals.weight}</p>
      </div>
      <div className="grid auto-cols-auto">
        {items.map((_item, i) => (
          <div key={`item ${i}`}>
            <h3>{`Item ${i + 1}:`}</h3>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Item name"
              style={{ width: "150px" }}
            />
            <label htmlFor="calories">Calories:</label>
            <Input
              id="calories"
              onChange={(e) => onChangeItemVal(e, i, "calories")}
            />
            <label htmlFor="fat">Fat:</label>
            <Input id="fat" onChange={(e) => onChangeItemVal(e, i, "fat")} />
            <label htmlFor="carbs">Carbs:</label>
            <Input
              id="carbs"
              onChange={(e) => onChangeItemVal(e, i, "carbs")}
            />
            <label htmlFor="protein">Protein:</label>
            <Input
              id="protien"
              onChange={(e) => onChangeItemVal(e, i, "protein")}
            />
            <label htmlFor="weight">Weight:</label>
            <Input
              id="weight"
              onChange={(e) => onChangeItemVal(e, i, "weight")}
            />
            <Button type="button" onClick={() => onRemoveItem(i)}>
              {`Remove Item ${i + 1}`}
            </Button>
          </div>
        ))}
      </div>
      <Button type="button" onClick={onAddItem}>
        Add Item
      </Button>
    </div>
  );
}
