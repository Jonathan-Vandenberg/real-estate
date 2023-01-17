import React, { useState } from "react";
import AddPropertyForm from "./AddPropertyForm";
import Plus from "./svgs/Plus";
import { Image, Property } from "../types";
import Edit from "./svgs/Edit";

interface IData {
  property: Property | undefined | null;
  image: Image[] | undefined | null;
  addType: boolean;
  editType: boolean;
}

export default function AddProperty({
  property,
  addType,
  editType,
  image,
}: IData) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col space-y-4 [&_div]:rounded-md [&_div]:text-md">
      <div className="flex items-center justify-center w-full mx-auto space-x-12 pb-6">
        {addType && (
          <button onClick={handleShowForm}>
            <div className="flex space-x-2 items-center mx-auto w-full">
              <Plus className="w-8 h-8" />
              <p className="text-lg">Add New Listing</p>
            </div>
          </button>
        )}
        {editType && (
          <button onClick={handleShowForm}>
            <div className="flex space-x-2 items-center mx-auto w-full">
              <Edit className="w-8 h-8" />
              <p className="text-lg">Edit This Listing</p>
            </div>
          </button>
        )}
      </div>
      {showForm && (
        <AddPropertyForm
          add={addType}
          edit={editType}
          property={property}
          image={image}
        />
      )}
    </div>
  );
}
