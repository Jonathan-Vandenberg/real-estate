import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function FicaProgress({ offerIn }: { offerIn: OfferIn }) {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.ficaDocs?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]"
        )}
      >
        <div>
          {offerIn?.ficaDocs?.flag ? (
            <>
              {!offerIn?.ficaDocs?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2  animate-blink" />
              )}
            </>
          ) : (
            <>
              {!offerIn?.ficaDocs?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
              )}
            </>
          )}
        </div>
        <p
          id="FICA"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.ficaDocs?.completed ? "text-black" : "text-white"
          )}
        >
          FICA {offerIn?.ficaDocs?.completed && "- Completed"}
        </p>
      </div>
      {!offerIn?.ficaDocs?.completed && (
        <div className="border border-off-white ">
          <div className="py-1 font-semibold pl-2 bg-[rgb(211,241,250)]">
            Address
          </div>
          <div className="pl-2 py-1 bg-white">{offerIn?.ficaDocs?.address}</div>
          {offerIn?.ficaDocs?.flag && (
            <div className="border border-[rgb(255,22,22)]">
              <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
                Flag
              </div>
              <div className="p-3 bg-white font-semibold">
                {offerIn?.ficaDocs?.notes}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
