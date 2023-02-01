import React from "react";
import { OfferIn } from "../types";
import moment from "moment";
import Edit from "./svgs/Edit";
import classNames from "classnames";
import Hero from "./Hero";

export default function OfferInDetails({
  offerIn,
  onClick,
}: {
  offerIn: OfferIn;
  onClick: () => void;
}) {
  let dot = moment(offerIn?.dot).toString() || null;
  let dateOfBondApprovalInPrincipal =
    moment(offerIn?.dateOfBondApprovalInPrincipal).toString() || null;
  let dateOfBondApplication =
    moment(offerIn?.dateOfBondApplication).toString() || null;
  let dateOfBondApproved =
    moment(offerIn?.dateOfBondApproved).toString() || null;

  return (
    <section className="w-full mx-auto items-center bg-[rgb(249,249,249)] border-l border-l-off-white p-2">
      <div onClick={onClick} className="flex items-center justify-between p-2">
        <p className="text-lg font-light tracking-widest p-2">
          Progress Overview
        </p>
        <Edit className="w-6 h-6" />
      </div>
      <div className="[&_*]:text-sm space-y-4">
        <div className="border border-off-white">
          <div className="bg-[rgb(211,241,250)] py-1 font-semibold pl-2">
            Bank
          </div>
          <div className="pl-2 py-1 bg-white">{offerIn?.bankName}</div>
        </div>

        <div className="border border-off-white">
          <div className="bg-[rgb(211,241,250)] py-1 font-semibold pl-2">
            Amount
          </div>
          <div className="pl-2 py-1 bg-white">{offerIn?.amount}</div>
        </div>

        <div className="border border-off-white">
          <div className="bg-[rgb(211,241,250)] py-1 font-semibold pl-2">
            Date of Bond Application
          </div>
          <div className="pl-2 py-1 bg-white">
            {moment(dateOfBondApplication).format("DD MMMM YYYY")}
          </div>
        </div>

        <div className="border border-off-white">
          <div className="bg-[rgb(211,241,250)] py-1 font-semibold pl-2">
            Date of Transfer
          </div>
          <div className="pl-2 py-1 bg-white">
            {moment(dot).format("DD MMMM YYYY")}
          </div>
        </div>

        <div className="border border-off-white">
          <div className="bg-[rgb(211,241,250)] py-1 font-semibold pl-2">
            Date of Bond Approval in Principal
          </div>
          <div className="pl-2 py-1 bg-white">
            {moment(dateOfBondApprovalInPrincipal).format("DD MMMM YYYY")}
          </div>
        </div>

        <div className="border border-off-white">
          <div className="bg-[rgb(211,241,250)] py-1 font-semibold pl-2">
            Date of Bond Approved
          </div>
          <div className="pl-2 py-1 bg-white">
            {moment(dateOfBondApproved).format("DD MMMM YYYY")}
          </div>
        </div>

        <div
          className={classNames(
            offerIn?.elecCompCompany?.urgentAssistance &&
              "border-2 border-[rgb(255,10,10)]"
          )}
        >
          <div
            className={classNames(
              "flex items-center justify-start ",
              offerIn.elecCompCompany?.completed
                ? "bg-[#fbd3fa]"
                : "bg-[#2313d1]",
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
                offerIn?.elecCompCompany?.completed
                  ? "text-black"
                  : "text-white"
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
      </div>
    </section>
  );
}
