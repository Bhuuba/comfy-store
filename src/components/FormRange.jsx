import { useState } from "react";
import { formatPrice } from "../utils";
import { Slider, Label } from "./ui";

const FormRange = ({ label, name, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="capitalize text-sm font-medium">
          {label}
        </Label>
        <span className="text-sm font-medium">
          {formatPrice(selectedPrice)}
        </span>
      </div>

      <Slider
        name={name}
        id={name}
        min={0}
        max={maxPrice}
        step={step}
        value={[selectedPrice]}
        onValueChange={(val) => setSelectedPrice(val[0])}
        className="w-full"
      />

      <div className="flex justify-between text-xs text-muted-foreground">
        <span className="font-medium">0</span>
        <span className="font-medium">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
