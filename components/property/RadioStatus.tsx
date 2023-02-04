import React from "react";
import { statusOptionsType } from "../../lib/property-types";
import { Status } from "../../types";
import Switch from "../global/Switch";

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
      className="hidden"
      value={value}
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <Switch
      backGround="bg-off-white"
      switchOn={checked}
      checked={checked}
      radioMode={true}
    />
    <label className="inline-flex items-center w-[10rem]">
      <p className="ml-2 text-md whitespace-nowrap">{label}</p>
    </label>
  </label>
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
