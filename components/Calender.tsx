import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import DatePicker from "react-datepicker";

interface ICalenderProps {
  onChange: (date: Date) => void;
  selected: Date | null;
}

export default function Calender({ onChange, selected }: ICalenderProps) {
  return (
    <div className="scale-150">
      <DatePicker
        selected={selected}
        onChange={onChange}
        className=" p-[0.7rem] rounded-lg mt-[0.7rem] w-1/2 ml-[2.65rem] text-[1.05rem] bg-[rgb(247,247,247)]"
        dateFormat="dd/MM/yyyy"
        popperPlacement="top-end"
        popperClassName="react-datepicker-popper"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [70, 10],
            },
          },
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "viewport",
              tether: false,
              altAxis: true,
            },
          },
        ]}
      />
    </div>
  );
}
