import React from "react";
import { residentialOptionType } from "../lib/property-types";
import Switch from "./Switch";

export default function Features() {
  return (
    <div>
      <label className="text-black font-bold text-md" htmlFor="features">
        Features
      </label>
      <ul className="mt-2 rounded-lg  h-[30rem] overflow-auto w-auto border-2 border-white">
        {residentialOptionType.map((item, i) => (
          <li
            key={i}
            className="p-3 border-b-2 border-white text-md hover:bg-white cursor-pointer"
          >
            <div className="flex space-x-3 items-center">
              <Switch radioMode={false} backGround={""} switchOn={undefined} />
              <p>{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
