import classNames from "classnames";
import React, { useState } from "react";

export default function Switch({
  checked,
  radioMode,
  backGround,
  switchOn,
}: {
  checked?: boolean | undefined;
  radioMode: boolean;
  backGround: string;
  switchOn: boolean | null | undefined;
}) {
  const [on, setOn] = useState(switchOn);
  return (
    <>
      {radioMode && (
        <div
          className={classNames(
            ` relative w-12 h-7 rounded-full transition-[colors, transform] ease-in-out duration-100`,
            checked ? "bg-[rgb(235,139,243)]" : `${backGround}`
          )}
          onClick={() => setOn(!on)}
        >
          <span
            className={classNames(
              "absolute h-6 w-6  top-1/2  -translate-y-1/2 transform transition duration-300 ease-in-out bg-white rounded-full",
              checked ? "right-0 mr-[0.3rem]" : "left-0 ml-[0.3rem]"
            )}
          />
        </div>
      )}
      {!radioMode && (
        <div
          className={classNames(
            "relative w-12 h-7 rounded-full transition-[colors, transform] ease-in-out duration-100",
            on ? "bg-[rgb(235,139,243)]" : `${backGround}`
          )}
          onClick={() => setOn(!on)}
        >
          <span
            className={classNames(
              "absolute h-6 w-6  top-1/2  -translate-y-1/2 transform transition duration-300 ease-in-out bg-white rounded-full",
              on ? "right-0 mr-[0.3rem]" : "left-0 ml-[0.3rem]"
            )}
          />
        </div>
      )}
    </>
  );
}
