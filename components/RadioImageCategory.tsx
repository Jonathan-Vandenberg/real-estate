import React from "react";
import { imageOptionsType } from "../lib/property-types";
import { IMAGE_CATEGORY, RESIDENTIAL_CATEGORY } from "../types";
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
  value: IMAGE_CATEGORY | undefined | null;
  selectedImageCategory: IMAGE_CATEGORY;
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
