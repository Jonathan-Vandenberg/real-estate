import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function BankInspectionProgress({
  offerIn,
}: {
  offerIn: OfferIn;
}) {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.bankInspection?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]"
        )}
      >
        <div>
          {offerIn?.bankInspection?.flag ? (
            <>
              {!offerIn?.bankInspection?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2 animate-blink" />
              )}
            </>
          ) : (
            <>
              {!offerIn?.bankInspection?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
              )}
            </>
          )}
        </div>
        <p
          id="BankInspection"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.bankInspection?.completed ? "text-black" : "text-white"
          )}
        >
          Bank Valuation {offerIn?.bankInspection?.completed && "- Completed"}
        </p>
      </div>
      <div className="border border-off-white ">
        {offerIn?.bankInspection?.flag && (
          <div className="border border-[rgb(255,22,22)]">
            <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
              Flag
            </div>
            <div className="p-3 bg-white font-semibold">
              {offerIn?.bankInspection?.notes}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
