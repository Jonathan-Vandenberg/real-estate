import React from "react";
import { imageOptionsType } from "../lib/property-types";
import { Image_Category, Residential_Category } from "../types";
import Collapsible from "react-collapsible";
import SelectField from "./SelectResidential";

interface RadioButtonProps {
  label: string;
  name: string;
  onChange: (event: any) => void;
  checked: boolean;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  name,
  onChange,
  checked,
}) => (
  <label className="inline-flex items-center">
    <input
      type="radio"
      className="form-radio"
      value={value}
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <span className="ml-2 text-md">{label}</span>
  </label>
);

const RadioButtonGroup = ({
  selectedImageCategory,
  onImageChange,
}: {
  value: Image_Category | undefined | null;
  selectedImageCategory: Image_Category;
  onImageChange: (event: any) => void;
}) => {
  return (
    <>
      {imageOptionsType.map((option) => (
        <div className="px-3 py-1" key={option.value}>
          <RadioButton
            value={option.value}
            label={option.label}
            name={"Image Category"}
            onChange={onImageChange}
            checked={selectedImageCategory === option.value}
          />
        </div>
      ))}
    </>
  );
};

export default RadioButtonGroup;
