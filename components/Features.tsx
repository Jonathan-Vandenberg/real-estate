import React from "react";
import { residentialOptionType } from "../lib/property-types";

export default function Features() {
  return (
    <div>
      <label className="text-black font-bold" htmlFor="features">
        Features
      </label>
      <ul className="mt-2 rounded-lg  h-[30rem] overflow-auto w-auto border-2 border-white">
        {residentialOptionType.map((item, i) => (
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
