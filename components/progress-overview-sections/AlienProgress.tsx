import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function AAlienProgress({ offerIn }: { offerIn: OfferIn }) {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.alien?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]"
        )}
      >
        <div>
          {offerIn?.alien?.flag ? (
            <>
              {!offerIn?.alien?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2" />
              )}
            </>
          ) : (
            <>
              {!offerIn?.alien?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
              )}
            </>
          )}
        </div>
        <p
          id="alien"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.alien?.completed ? "text-black" : "text-white"
          )}
        >
          Alien Species Certificate {offerIn?.alien?.completed && "- Completed"}
        </p>
      </div>
      <div className="border border-off-white ">
        {offerIn?.alien?.flag && (
          <div className="border border-[rgb(255,22,22)]">
            <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
              Flag
            </div>
            <div className="p-3 bg-white font-semibold">
              {offerIn?.alien?.notes}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
