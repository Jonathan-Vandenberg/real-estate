import React from "react";
import { commercialOptionType } from "../lib/property-types";

export default function Features() {
  return (
    <div>
      <label className="text-black font-bold" htmlFor="features">
        Features
      </label>
      <ul className="mt-2 rounded-lg  h-[30rem] overflow-auto w-auto border-2 border-white">
        {commercialOptionType.map((item, i) => (
          <li
            key={i}
            className="p-3 border-b-2 border-white text-md hover:bg-white cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
