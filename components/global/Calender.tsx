import classNames from "classnames";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ICalenderProps {
  onChange: (date: Date) => void;
  selected: Date | null;
  className?: string;
}

export default function Calender({
  onChange,
  selected,
  className,
}: ICalenderProps) {
  return (
    <div className="scale-150">
      <DatePicker
        selected={selected}
        onChange={onChange}
        className={classNames(
          " p-[0.7rem] rounded-lg mt-[0.7rem] w-1/2 ml-[2.65rem] text-[1.05rem]",
          className ? className : "bg-[rgb(247,247,247)]"
        )}
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
