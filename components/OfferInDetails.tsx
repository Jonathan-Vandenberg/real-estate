import React from "react";
import { OfferIn } from "../types";
import moment from "moment";
import Edit from "./svgs/Edit";
import { Container } from "./Container";
import ProgressCircle from "./ProgressCircle";

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
    <section className="w-full mx-auto items-center">
      <div onClick={onClick}>
        <Edit className="w-6 h-6" />
      </div>
      <div className="[&_p]:text-md">
        <p>{offerIn?.amount}</p>
        <p>{offerIn?.bankName}</p>
        <p>{dot}</p>
        <p>{dateOfBondApprovalInPrincipal}</p>
        <p>{dateOfBondApplication}</p>
        <p>{dateOfBondApproved}</p>
      </div>
    </section>
  );
}
