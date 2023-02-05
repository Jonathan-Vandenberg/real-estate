import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function OfferAcceptedProgress({
  offerIn,
}: {
  offerIn: OfferIn;
}) {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.offerAccepted?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]"
        )}
      >
        <div>
          {offerIn?.offerAccepted?.flag ? (
            <>
              {!offerIn?.offerAccepted?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2" />
              )}
            </>
          ) : (
            <>
              {!offerIn?.offerAccepted?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
              )}
            </>
          )}
        </div>
        <p
          id="OfferAccepted"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.offerAccepted?.completed ? "text-black" : "text-white"
          )}
        >
          Offer Accepted {offerIn?.offerAccepted?.completed && "- Completed"}
        </p>
      </div>
      {offerIn?.offerAccepted?.withConditions && (
        <>
          <div className="py-1 font-semibold pl-2 bg-[rgb(211,241,250)]">
            Conditionally
          </div>

          <div className="pl-2 py-1 bg-white">
            {offerIn?.offerAccepted?.conditions}
          </div>
        </>
      )}
      <div className="border border-off-white ">
        {offerIn?.offerAccepted?.flag && (
          <div className="border border-[rgb(255,22,22)]">
            <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
              Flag
            </div>
            <div className="p-3 bg-white font-semibold">
              {offerIn?.offerAccepted?.notes}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
