import React, { useState } from "react";
import Plus from "./svgs/Plus";
import AddPropertyForm from "../components/AddPropertyForm";
import { Property } from "../types";

interface IProps {
  data: Property;
  add: boolean;
  edit: boolean;
}

export default function ModalAddListing({ data, add, edit }: IProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setShowModal(!showModal)}>
        <Plus className="w-7 h-7 text-[rgb(69, 75, 27)]" />
      </div>
      {showModal && (
        <div className="absolute h-screen w-screen offset-0 bg-black/20">
          <AddPropertyForm
            data={data}
            add={add}
            edit={edit}
            handleClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      )}
    </div>
  );
}
