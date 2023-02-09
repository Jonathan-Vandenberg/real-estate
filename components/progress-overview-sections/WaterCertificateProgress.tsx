import classNames from "classnames";
import React from "react";
import { OfferIn } from "../../types";

export default function WaterCertificateProgress({
  offerIn,
}: {
  offerIn: OfferIn;
}) {
  return (
    <div>
      <div
        className={classNames(
          "flex items-center justify-start ",
          offerIn.waterCert?.completed ? "bg-[#fbd3fa]" : "bg-[#2313d1]"
        )}
      >
        <div>
          {offerIn?.waterCert?.flag ? (
            <>
              {!offerIn?.waterCert?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(253,5,5)] block ml-2 animate-blink" />
              )}
            </>
          ) : (
            <>
              {!offerIn?.waterCert?.completed && (
                <span className="w-3 h-3 rounded-full bg-[rgb(6,255,72)] block ml-2" />
              )}
            </>
          )}
        </div>
        <p
          id="Water"
          className={classNames(
            "p-2 font-bold scroll-mt-[7rem]",
            offerIn?.waterCert?.completed ? "text-black" : "text-white"
          )}
        >
          Water Certificate {offerIn?.waterCert?.completed && "- Completed"}
        </p>
      </div>
      <div className="border border-off-white ">
        {offerIn?.waterCert?.flag && (
          <div className="border border-[rgb(255,22,22)]">
            <div className="py-1 font-semibold pl-2 bg-[rgb(255,168,168)]">
              Flag
            </div>
            <div className="p-3 bg-white font-semibold">
              {offerIn?.waterCert?.notes}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
