import React from "react";
import { rolesOptionsType } from "../../lib/property-types";
import { Roles } from "../../types";
import Switch from "../global/Switch";

interface RadioButtonProps {
  label: string;
  name: string;
  onChange: (event: any) => void;
  checked: boolean;
  value: string;
  className?: string;
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
      backGround="bg-gray"
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
  selectedRole,
  onRoleChange,
  className,
}: {
  value: Roles | undefined | null;
  selectedRole: Roles;
  className?: string;
  onRoleChange: (event: any) => void;
}) => {
  return (
    <>
      {rolesOptionsType.map((option) => (
        <>
          {option.value !== "CEO" && (
            <div className="px-3 -my-5" key={option.value}>
              <RadioButton
                className={className}
                value={option.value}
                label={option.label}
                name={"Role"}
                onChange={onRoleChange}
                checked={selectedRole === option.value}
              />
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default RadioButtonGroup;
