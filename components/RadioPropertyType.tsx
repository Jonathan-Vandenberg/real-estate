import React from "react";
import { propertyOptionsType } from "../lib/property-types";
import { Property_Category, Residential_Category } from "../types";
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
  selectedPropertyCategory,
  onPropertyChange,
  onResidentialChange,
  residentialCategory,
}: {
  value: Property_Category | undefined | null;
  selectedPropertyCategory: Property_Category;
  onPropertyChange: (event: any) => void;
  onResidentialChange: (event: any) => void;
  residentialCategory: Residential_Category;
}) => {
  return (
    <>
      {propertyOptionsType.map((option) => (
        <div className="px-3 py-1" key={option.value}>
          <RadioButton
            value={option.value}
            label={option.label}
            name={"Property Category"}
            onChange={onPropertyChange}
            checked={selectedPropertyCategory === option.value}
          />
          {option.value === "RESIDENTIAL" && (
            <div className="ml-6">
              <Collapsible
                open={selectedPropertyCategory === "RESIDENTIAL"}
                trigger=""
              >
                <SelectField
                  value={residentialCategory}
                  onChange={onResidentialChange}
                />
              </Collapsible>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default RadioButtonGroup;
