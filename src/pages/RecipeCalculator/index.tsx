import { FormEvent, useState } from "react";
import Input from "src/components/Input";
import Button from "src/components/Button";
import AppContainer from "src/components/AppContainer";
import ContentContainer from "src/components/ContentContainer";
import H1 from "src/components/H1";

type ItemVals = {
  calories: number | null;
  fat: number | null;
  carbs: number | null;
  protein: number | null;
  weight: number | null;
};

const defaultItemVals: ItemVals = {
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
  weight: 0,
};

export default function RecipeCalculator() {
  const [items, setItems] = useState([{ ...defaultItemVals }]);
  const [totals, setTotals] = useState({ ...defaultItemVals });

  const onAddItem = () => {
    setItems([...items, { ...defaultItemVals }]);
  };

  const onRemoveItem = (index: number) => {
    const itemToRemove = items[index];
    setItems(items.filter((_item, i) => i !== index));

    const newTotals = { ...totals };
    for (const [key, value] of Object.entries(totals)) {
      const keyIndex = key as keyof ItemVals;
      const newValue = (value ?? 0) - (itemToRemove[keyIndex] ?? 0);
      newTotals[keyIndex] = newValue;
    }
    setTotals(newTotals);
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
    <AppContainer>
      <ContentContainer>
        <H1>Recipe Calculator</H1>
        <div className="flex justify-between gap-3">
          <p>Calories: {totals.calories}</p>
          <p>Fat: {totals.fat}</p>
          <p>Carbs: {totals.carbs}</p>
          <p>Protein: {totals.protein}</p>
          <p>Weight: {totals.weight}</p>
        </div>
        <div className="grid-rows-auto grid grid-cols-2">
          {items.map((_item, i) => (
            <div className="m-auto grid grid-flow-row" key={`item ${i}`}>
              <h3 className="text-lg">{`Item ${i + 1}:`}</h3>
              <label htmlFor="name">Name:</label>
              <Input id="name" type="text" placeholder="Item name" />
              <label htmlFor="calories">Calories:</label>
              <Input
                id="calories"
                onChange={(e) => onChangeItemVal(e, i, "calories")}
                defaultValue={0}
              />
              <label htmlFor="fat">Fat:</label>
              <Input
                id="fat"
                onChange={(e) => onChangeItemVal(e, i, "fat")}
                defaultValue={0}
              />
              <label htmlFor="carbs">Carbs:</label>
              <Input
                id="carbs"
                onChange={(e) => onChangeItemVal(e, i, "carbs")}
                defaultValue={0}
              />
              <label htmlFor="protein">Protein:</label>
              <Input
                id="protein"
                onChange={(e) => onChangeItemVal(e, i, "protein")}
                defaultValue={0}
              />
              <label htmlFor="weight">Weight:</label>
              <Input
                id="weight"
                onChange={(e) => onChangeItemVal(e, i, "weight")}
                defaultValue={0}
              />
              <Button onClick={() => onRemoveItem(i)}>
                {`Remove Item ${i + 1}`}
              </Button>
            </div>
          ))}
        </div>
        <Button onClick={onAddItem}>Add Item</Button>
      </ContentContainer>
    </AppContainer>
  );
}
