import { useState } from "react";
import { ImageProduct, Property } from "../../types";
import Edit from "../svgs/Edit";
import Plus from "../svgs/Plus";

interface IData {
  property: Property | undefined | null;
  image: ImageProduct[] | undefined | null;
  addType: boolean;
  editType: boolean;
  onEdit: () => void;
}

export default function AddProperty({
  property,
  addType,
  editType,
  image,
  onEdit,
}: IData) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col space-y-4 [&_div]:rounded-md [&_div]:text-md">
      {addType && (
        <button
          onClick={() => {
            handleShowForm(), onEdit();
          }}
        >
          <Plus className="w-10 h-10 text-[rgb(50,188,62)]" />
        </button>
      )}
      {editType && (
        <button
          onClick={() => {
            handleShowForm(), onEdit();
          }}
        >
          <Edit className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
