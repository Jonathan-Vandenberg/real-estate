import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function EccProgress({ offerIn }: { offerIn: OfferIn }) {
  return (
    <div
      className={classNames(
        offerIn?.elecCompCompany?.urgentAssistance &&
          "border-2 border-[rgb(255,10,10)]"
      )}
    >
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.elecCompCompany?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]",
          offerIn?.elecCompCompany?.urgentAssistance && "bg-[rgb(255,6,6)]"
        )}
      >
        <div>
          {!offerIn?.elecCompCompany?.urgentAssistance && (
            <>
              {offerIn?.elecCompCompany?.flag ? (
                <>
                  {!offerIn?.elecCompCompany?.completed && (
                    <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2" />
                  )}
                </>
              ) : (
                <>
                  {!offerIn?.elecCompCompany?.completed && (
                    <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
                  )}
                </>
              )}
            </>
          )}
        </div>
        <p
          id="ECC"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.elecCompCompany?.completed ? "text-black" : "text-white"
          )}
        >
          ECC {offerIn?.elecCompCompany?.completed && "- Completed"}
        </p>
      </div>
      <div className="border border-off-white ">
        <div
          className={classNames(
            "py-1 font-semibold pl-2 bg-[rgb(211,241,250)]",
            offerIn?.elecCompCompany?.urgentAssistance &&
              "bg-[rgb(255,168,168)]"
          )}
        >
          Name
        </div>
        <div className="pl-2 py-1 bg-white">
          {offerIn?.elecCompCompany?.name}
        </div>
        <div
          className={classNames(
            "py-1 font-semibold pl-2 bg-[rgb(211,241,250)]",
            offerIn?.elecCompCompany?.urgentAssistance &&
              "bg-[rgb(255,168,168)]"
          )}
        >
          Phone
        </div>
        <div className="pl-2 py-1 bg-white">
          {offerIn?.elecCompCompany?.phone}
        </div>
        <div
          className={classNames(
            "py-1 font-semibold pl-2 bg-[rgb(211,241,250)]",
            offerIn?.elecCompCompany?.urgentAssistance &&
              "bg-[rgb(255,168,168)]"
          )}
        >
          Email
        </div>
        <div className="pl-2 py-1 bg-white">
          {offerIn?.elecCompCompany?.email}
        </div>
        {offerIn?.elecCompCompany?.flag ||
          (offerIn?.elecCompCompany?.urgentAssistance && (
            <div className="border border-[rgb(255,22,22)]">
              <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
                Flag
              </div>
              <div className="p-3 bg-white font-semibold">
                {offerIn?.elecCompCompany?.notes}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
