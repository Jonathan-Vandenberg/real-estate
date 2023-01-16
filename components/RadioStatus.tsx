import React from "react";
import { statusOptionsType } from "../lib/property-types";
import { STATUS } from "../types";
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
  selectedStatus,
  onStatusChange,
}: {
  value: STATUS | undefined | null;
  selectedStatus: STATUS;
  onStatusChange: (event: any) => void;
}) => {
  return (
    <>
      {statusOptionsType.map((option) => (
        <div className="px-3 py-1" key={option.value}>
          <RadioButton
            value={option.value}
            label={option.label}
            name={"Listing Status"}
            onChange={onStatusChange}
            checked={selectedStatus === option.value}
          />
        </div>
      ))}
    </>
  );
};

export default RadioButtonGroup;
