import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function GasComplianceProgress({
  offerIn,
}: {
  offerIn: OfferIn;
}) {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.gasCompliance?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]"
        )}
      >
        <div>
          {offerIn?.gasCompliance?.flag ? (
            <>
              {!offerIn?.gasCompliance?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2 animate-blink" />
              )}
            </>
          ) : (
            <>
              {!offerIn?.gasCompliance?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
              )}
            </>
          )}
        </div>
        <p
          id="Gas"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.gasCompliance?.completed ? "text-black" : "text-white"
          )}
        >
          Gas Compliance {offerIn?.gasCompliance?.completed && "- Completed"}
        </p>
      </div>
      {!offerIn?.gasCompliance?.completed && (
        <div className="border border-off-white ">
          <div className="pl-2 py-1 bg-white">
            {offerIn?.gasCompliance?.gasCompCerUrl}
          </div>
          {offerIn?.gasCompliance?.flag && (
            <div className="border border-[rgb(255,22,22)]">
              <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
                Flag
              </div>
              <div className="p-3 bg-white font-semibold">
                {offerIn?.gasCompliance?.notes}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
