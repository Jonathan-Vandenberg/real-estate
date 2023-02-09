import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function ConveyancerProgress({ offerIn }: { offerIn: OfferIn }) {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.conveyancer?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]"
        )}
      >
        <div>
          {offerIn?.conveyancer?.flag ? (
            <>
              {!offerIn?.conveyancer?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2 animate-blink" />
              )}
            </>
          ) : (
            <>
              {!offerIn?.conveyancer?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
              )}
            </>
          )}
        </div>
        <p
          id="Conveyancer"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.conveyancer?.completed ? "text-black" : "text-white"
          )}
        >
          Conveyancer {offerIn?.conveyancer?.completed && "- Completed"}
        </p>
      </div>
      {!offerIn?.conveyancer?.completed && (
        <div className="border border-off-white ">
          <div className="py-1 font-semibold pl-2 bg-[rgb(211,241,250)]">
            Name
          </div>
          <div className="pl-2 py-1 bg-white">{offerIn?.conveyancer?.name}</div>
          <div className="py-1 font-semibold pl-2 bg-[rgb(211,241,250)]">
            Phone
          </div>
          <div className="pl-2 py-1 bg-white">
            {offerIn?.conveyancer?.phone}
          </div>
          {offerIn?.conveyancer?.flag && (
            <div className="border border-[rgb(255,22,22)]">
              <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
                Flag
              </div>
              <div className="p-3 bg-white font-semibold">
                {offerIn?.conveyancer?.notes}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
