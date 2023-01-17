import React from "react";
import { statusOptionsType } from "../lib/property-types";
import { Status } from "../types";

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
  <>
    <label className="inline-flex items-center">
      <p className="ml-2 text-md whitespace-nowrap">{label}</p>
    </label>
    <input
      type="radio"
      className="form-radio "
      value={value}
      name={name}
      onChange={onChange}
      checked={checked}
    />
  </>
);

const RadioButtonGroup = ({
  selectedStatus,
  onStatusChange,
}: {
  value: Status | undefined | null;
  selectedStatus: Status;
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
