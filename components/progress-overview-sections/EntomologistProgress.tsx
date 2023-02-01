import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function EntomologistProgress({
  offerIn,
}: {
  offerIn: OfferIn;
}) {
  return (
    <div
      className={classNames(
        offerIn?.intermologist?.urgentAssistance &&
          "border-2 border-[rgb(255,10,10)]"
      )}
    >
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.intermologist?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]",
          offerIn?.intermologist?.urgentAssistance && "bg-[rgb(255,6,6)]"
        )}
      >
        <div>
          {!offerIn?.intermologist?.urgentAssistance && (
            <>
              {offerIn?.intermologist?.flag ? (
                <>
                  {!offerIn?.intermologist?.completed && (
                    <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2" />
                  )}
                </>
              ) : (
                <>
                  {!offerIn?.intermologist?.completed && (
                    <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
                  )}
                </>
              )}
            </>
          )}
        </div>
        <p
          id="Intermologist"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.intermologist?.completed ? "text-black" : "text-white"
          )}
        >
          Entomologist {offerIn?.intermologist?.completed && "- Completed"}
        </p>
      </div>
      <div className="border border-off-white ">
        <div
          className={classNames(
            "py-1 font-semibold pl-2 bg-[rgb(211,241,250)]",
            offerIn?.intermologist?.urgentAssistance && "bg-[rgb(255,168,168)]"
          )}
        >
          Name
        </div>
        <div className="pl-2 py-1 bg-white">{offerIn?.intermologist?.name}</div>
        <div
          className={classNames(
            "py-1 font-semibold pl-2 bg-[rgb(211,241,250)]",
            offerIn?.intermologist?.urgentAssistance && "bg-[rgb(255,168,168)]"
          )}
        >
          Phone
        </div>
        <div className="pl-2 py-1 bg-white">
          {offerIn?.intermologist?.phone}
        </div>
        <div
          className={classNames(
            "py-1 font-semibold pl-2 bg-[rgb(211,241,250)]",
            offerIn?.intermologist?.urgentAssistance && "bg-[rgb(255,168,168)]"
          )}
        >
          Email
        </div>
        <div className="pl-2 py-1 bg-white">
          {offerIn?.intermologist?.email}
        </div>
        {offerIn?.intermologist?.flag ||
          (offerIn?.intermologist?.urgentAssistance && (
            <div className="border border-[rgb(255,22,22)]">
              <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
                Flag
              </div>
              <div className="p-3 bg-white font-semibold">
                {offerIn?.intermologist?.notes}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
