import React, { useState } from "react";
import { commercialOptionType } from "../lib/property-types";
import Switch from "./Switch";

export default function Features() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleAddFeature = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <label className="text-black font-bold text-md" htmlFor="features">
        Features
      </label>
      <ul className="mt-2 rounded-lg  h-[30rem] overflow-auto w-auto border-2 border-white">
        {commercialOptionType.map((item, i) => (
          <li
            key={i}
            className="p-3 border-b-2 border-white text-md hover:bg-white cursor-pointer"
          >
            <div
              onClick={() => handleAddFeature(item)}
              className="flex space-x-3 items-center"
            >
              <Switch
                radioMode={false}
                backGround={"bg-off-white"}
                switchOn={undefined}
              />
              <p>{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
