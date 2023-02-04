import moment from "moment";
import { OfferIn } from "../../../types";
import BankInspectionProgress from "../../progress-overview-sections/BankInspectionProgress";
import ConveyancerProgress from "../../progress-overview-sections/ConveyancerProgress";
import EccProgress from "../../progress-overview-sections/EccProgress";
import EntomologistProgress from "../../progress-overview-sections/EntomologistProgress";
import FicaProgress from "../../progress-overview-sections/FicaProgress";
import GasComplianceProgress from "../../progress-overview-sections/GasComplianceProgress";
import MortgageProgress from "../../progress-overview-sections/MortgageProgress";
import OfferAcceptedProgress from "../../progress-overview-sections/OfferAcceptedProgress";
import WaterCertificateProgress from "../../progress-overview-sections/WaterCertificateProgress";
import Edit from "../../svgs/Edit";

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
    <section className="w-full mx-auto items-center bg-[rgb(249,249,249)] border-l border-l-off-white p-2 max-w-[100rem]">
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

        <EccProgress offerIn={offerIn} />
        <FicaProgress offerIn={offerIn} />
        <MortgageProgress offerIn={offerIn} />
        <ConveyancerProgress offerIn={offerIn} />
        <BankInspectionProgress offerIn={offerIn} />
        <OfferAcceptedProgress offerIn={offerIn} />
        <WaterCertificateProgress offerIn={offerIn} />
        <GasComplianceProgress offerIn={offerIn} />
        <EntomologistProgress offerIn={offerIn} />
      </div>
    </section>
  );
}
