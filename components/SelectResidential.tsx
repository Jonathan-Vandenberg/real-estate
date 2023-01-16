import { RESIDENTIAL_CATEGORY } from "@prisma/client";
import React from "react";

export interface IOption {
  value: RESIDENTIAL_CATEGORY | undefined | null;
  label: string;
}

export const options: IOption[] = [
  { value: RESIDENTIAL_CATEGORY.FREE_STANDING, label: "Free Standing" },
  { value: RESIDENTIAL_CATEGORY.DUPLEX, label: "Duplex" },
  { value: RESIDENTIAL_CATEGORY.SIMPLEX, label: "Simplex" },
  { value: RESIDENTIAL_CATEGORY.GRANNY_FLAT, label: "Granny Flat" },
  { value: RESIDENTIAL_CATEGORY.FLAT, label: "Flat" },
  { value: RESIDENTIAL_CATEGORY.LUXURY, label: "Luxury" },
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
            value={option.value as RESIDENTIAL_CATEGORY}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
