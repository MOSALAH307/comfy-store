import { useState } from "react";
import { formatPrice } from "../utiles";

const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        id={name}
        name={name}
        type="range"
        min={0}
        max={maxPrice}
        value={selectedPrice}
        className={`range range-primary ${size}`}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
      />
      <div className="flex justify-between mt-2 px-2 w-full text-xs">
        <span className=" font-bold">0</span>
        <span className=" font-bold">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
