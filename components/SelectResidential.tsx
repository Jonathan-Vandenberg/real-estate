import { Residential_Category } from "../types";
import React from "react";

export interface IOption {
  value: Residential_Category | undefined | null;
  label: string;
}

export const options: IOption[] = [
  { value: Residential_Category.FreeStanding, label: "Free Standing" },
  { value: Residential_Category.Duplex, label: "Duplex" },
  { value: Residential_Category.Simplex, label: "Simplex" },
  { value: Residential_Category.GrannyFlat, label: "Granny Flat" },
  { value: Residential_Category.Flat, label: "Flat" },
  { value: Residential_Category.Luxury, label: "Luxury" },
];

interface IProps {
  value: string;
  onChange: (event: any) => void;
}

const SelectField = ({ value, onChange }: IProps) => {
  return (
    <div className="px-3 flex items-start space-y-1 justify-center flex-col pt-4 text-md mb-6">
      <label className="text-black font-bold">Residential Type</label>
      <select
        className="bg-white rounded-xl p-3 block w-full md:w-1/3 text-md transition duration-150 ease-in-out"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value as Residential_Category}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
