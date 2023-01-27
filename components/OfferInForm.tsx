import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import {
  useAddOfferInMutation,
  useUpdateOfferInMutation,
  OfferIn,
  Document,
  Document_Category,
} from "../types";
import { Button } from "./Button";
import moment from "moment";
import Calender from "./Calender";
import Switch from "./Switch";
import ContainerTitle from "./ContainerTitle";
import RemoveImage from "./DeleteImages";
import ModalImage from "react-modal-image";
import UploadImage from "./UploadImage";
import EmailSender from "./EmailSender";
import { useSession } from "next-auth/react";

interface IProps {
  offerIn: OfferIn | undefined | null;
  add: boolean;
  edit: boolean;
  onClick: () => void;
  propertyId: string;
  documents: Document[];
}

export default function OfferInForm({
  offerIn,
  documents,
  propertyId,
  add,
  edit,
  onClick,
}: IProps) {
  const [formSent, setFormSent] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    function email() {
      if (session?.user?.email) {
        const e = session?.user && session?.user?.email;
        setUserEmail(e);
      }
    }
    email();
  }, []);

  useEffect(() => {
    const datytify = async () => {
      try {
        const dot = moment(offerIn?.dot).toDate();
        setDot(dot);

        const dateOfBondApplication = moment(
          offerIn?.dateOfBondApplication
        ).toDate();
        setDateOfBondApplication(dateOfBondApplication);

        const dateOfBondApprovalInPrincipal = moment(
          offerIn?.dateOfBondApprovalInPrincipal
        ).toDate();
        setDateOfBondApprovalInPrincipal(dateOfBondApprovalInPrincipal);

        const dateOfBondApproved = moment(offerIn?.dateOfBondApproved).toDate();
        setDateOfBondApproved(dateOfBondApproved);

        const deadlineElecCompCompany = moment(
          offerIn?.elecCompCompany?.deadline
        ).toDate();
        setDeadlineElecCompCompany(deadlineElecCompCompany);

        const deadlineIntermologist = moment(
          offerIn?.intermologist?.deadline
        ).toDate();
        setDeadlineIntermologist(deadlineIntermologist);

        const deadlineGasCompliance = moment(
          offerIn?.gasCompliance?.deadline
        ).toDate();
        setDeadlineGasCompliance(deadlineGasCompliance);

        const deadlineWaterCert = moment(offerIn?.waterCert?.deadline).toDate();
        setDeadlineWaterCert(deadlineWaterCert);

        const deadlineOfferAccepted = moment(
          offerIn?.offerAccepted?.deadline
        ).toDate();
        setDeadlineOfferAccepted(deadlineOfferAccepted);

        const deadlineBankInspection = moment(
          offerIn?.bankInspection?.deadline
        ).toDate();
        setDeadlineBankInspection(deadlineBankInspection);

        const deadlineConveyancer = moment(
          offerIn?.conveyancer?.deadline
        ).toDate();
        setDeadlineConveyancer(deadlineConveyancer);

        const deadlineMortgageOriginator = moment(
          offerIn?.mortgageOriginator?.deadline
        ).toDate();
        setDeadlineMortgageOriginator(deadlineMortgageOriginator);

        const deadlineFicaDocs = moment(offerIn?.ficaDocs?.deadline).toDate();
        setDeadlineFicaDocs(deadlineFicaDocs);
      } catch (error) {
        console.log(error);
      }
    };
    datytify();
  }, []);

  const [addOfferIn, { loading: loadingAddOfferIn, error: errorAddProperty }] =
    useAddOfferInMutation();
  const [
    updateOfferIn,
    { loading: loadingUpdateOfferIn, error: errorUpdateProperty },
  ] = useUpdateOfferInMutation();

  //~~~~~~~~~~~~~~~~~~~~~~~~ IDs ~~~~~~~~~~~~~~~~~~~~~~~~//
  useEffect(() => {
    function setIds() {
      setElecCompCompanyId(offerIn!.elecCompCompanyId);
      setIntermologistId(offerIn!.intermologistId);
      setGasComplianceId(offerIn!.gasComplianceId);
      setWaterCertId(offerIn!.waterCertId);
      setOfferAcceptedId(offerIn!.offerAcceptedId);
      setBankInspectionId(offerIn!.bankInspectionId);
      setConveyancerId(offerIn!.conveyancerId);
      setMortgageOriginatorId(offerIn!.mortgageOriginatorId);
      setFicaDocsId(offerIn!.ficaDocsId);
    }
    setIds();
  }, []);

  const [elecCompCompanyId, setElecCompCompanyId] = useState(
    offerIn!.elecCompCompanyId
  );
  const [intermologistId, setIntermologistId] = useState(
    offerIn!.intermologistId
  );
  const [gasComplianceId, setGasComplianceId] = useState(
    offerIn!.gasComplianceId
  );
  const [waterCertId, setWaterCertId] = useState(offerIn!.waterCertId);
  const [offerAcceptedId, setOfferAcceptedId] = useState(
    offerIn!.offerAcceptedId
  );
  const [bankInspectionId, setBankInspectionId] = useState(
    offerIn!.bankInspectionId
  );
  const [conveyancerId, setConveyancerId] = useState(offerIn!.conveyancerId);
  const [mortgageOriginatorId, setMortgageOriginatorId] = useState(
    offerIn!.mortgageOriginatorId
  );
  const [ficaDocsId, setFicaDocsId] = useState(offerIn!.ficaDocsId);

  //~~~~~~~~~~~~~~~~~~~~~~~~ General ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [amount, setAmount] = useState(offerIn?.amount || "");
  const [dot, setDot] = useState<Date | null>(null);
  const [dateOfBondApplication, setDateOfBondApplication] =
    useState<Date | null>(null);
  const [dateOfBondApprovalInPrincipal, setDateOfBondApprovalInPrincipal] =
    useState<Date | null>(null);
  const [dateOfBondApproved, setDateOfBondApproved] = useState<Date | null>(
    null
  );
  const [bankName, setBankName] = useState(offerIn?.bankName || "");
  const [flag, setFlag] = useState(offerIn?.flag || false);

  //~~~~~~~~~~~~~~~~~~~~~~~~ ElecCompCompany ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [nameElecCompCompany, setNameElecCompCompany] = useState(
    offerIn?.elecCompCompany?.name || ""
  );
  const [phoneElecCompCompany, setPhoneElecCompCompany] = useState(
    offerIn?.elecCompCompany?.phone || ""
  );
  const [emailElecCompCompany, setEmailElecCompCompany] = useState(
    offerIn?.elecCompCompany?.email || ""
  );
  const [notesElecCompCompany, setNotesElecCompCompany] = useState(
    offerIn?.elecCompCompany?.notes || ""
  );
  const [flagElecCompCompany, setFlagElecCompCompany] = useState(
    offerIn?.elecCompCompany?.flag || false
  );
  const [completedElecCompCompany, setCompletedElecCompCompany] = useState(
    offerIn?.elecCompCompany?.completed || false
  );
  const [urgentAssistanceElecCompCompany, setUrgentAssistanceElecCompCompany] =
    useState(offerIn?.elecCompCompany?.urgentAssistance || false);
  const [deadlineElecCompCompany, setDeadlineElecCompCompany] =
    useState<Date | null>(null);

  //~~~~~~~~~~~~~~~~~~~~~~~~ Intermologist ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [nameIntermologist, setNameIntermologist] = useState(
    offerIn?.intermologist?.name || ""
  );
  const [phoneIntermologist, setPhoneIntermologist] = useState(
    offerIn?.intermologist?.phone || ""
  );
  const [emailIntermologist, setEmailIntermologist] = useState(
    offerIn?.intermologist?.email || ""
  );
  const [notesIntermologist, setNotesIntermologist] = useState(
    offerIn?.intermologist?.notes || ""
  );
  const [flagIntermologist, setFlagIntermologist] = useState(
    offerIn?.intermologist?.flag || false
  );
  const [completedIntermologist, setCompletedIntermologist] = useState(
    offerIn?.intermologist?.completed || false
  );
  const [urgentAssistanceIntermologist, setUrgentAssistanceIntermologist] =
    useState(offerIn?.intermologist?.urgentAssistance || false);
  const [deadlineIntermologist, setDeadlineIntermologist] =
    useState<Date | null>(null);

  //~~~~~~~~~~~~~~~~~~~~~~~~ GasCompliance ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [gasCompCerUrlGasCompliance, setGasCompCerUrlGasCompliance] = useState(
    offerIn?.gasCompliance?.gasCompCerUrl || ""
  );
  const [notesGasCompliance, setNotesGasCompliance] = useState(
    offerIn?.gasCompliance?.notes || ""
  );
  const [completedGasCompliance, setCompletedGasCompliance] = useState(
    offerIn?.gasCompliance?.completed || false
  );
  const [urgentAssistanceGasCompliance, setUrgentAssistanceGasCompliance] =
    useState(offerIn?.gasCompliance?.urgentAssistance || false);
  const [deadlineGasCompliance, setDeadlineGasCompliance] =
    useState<Date | null>(null);
  const [flagGasCompliance, setFlagGasCompliance] = useState(
    offerIn?.gasCompliance?.flag || false
  );

  //~~~~~~~~~~~~~~~~~~~~~~~~ WaterCert ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [notesWaterCert, setNotesWaterCert] = useState(
    offerIn?.waterCert?.notes || ""
  );
  const [completedWaterCert, setCompletedWaterCert] = useState(
    offerIn?.waterCert?.completed || false
  );
  const [urgentAssistanceWaterCert, setUrgentAssistanceWaterCert] = useState(
    offerIn?.waterCert?.urgentAssistance || false
  );

  const [deadlineWaterCert, setDeadlineWaterCert] = useState<Date | null>(null);

  const [flagWaterCert, setFlagWaterCert] = useState(
    offerIn?.waterCert?.flag || false
  );
  // const [messageWaterCert, setMessageWaterCert] = useState(
  //   offerIn?.waterCert?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ OfferAccepted ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [withConditionsOfferAccepted, setWithConditionsOfferAccepted] =
    useState(offerIn?.offerAccepted?.withConditions || false);
  const [conditionsOfferAccepted, setConditionsOfferAccepted] = useState(
    offerIn?.offerAccepted?.conditions || ""
  );
  const [notesOfferAccepted, setNotesOfferAccepted] = useState(
    offerIn?.offerAccepted?.notes || ""
  );
  const [completedOfferAccepted, setCompletedOfferAccepted] = useState(
    offerIn?.offerAccepted?.completed || false
  );
  const [urgentAssistanceOfferAccepted, setUrgentAssistanceOfferAccepted] =
    useState(offerIn?.offerAccepted?.urgentAssistance || false);
  const [deadlineOfferAccepted, setDeadlineOfferAccepted] =
    useState<Date | null>(null);
  const [flagOfferAccepted, setFlagOfferAccepted] = useState(
    offerIn?.offerAccepted?.flag || false
  );
  // const [messageOfferAccepted, setMessageOfferAccepted] = useState(
  //   offerIn?.offerAccepted?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ BankInspection ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [notesBankInspection, setNotesBankInspection] = useState(
    offerIn?.bankInspection?.notes || ""
  );
  const [completedBankInspection, setCompletedBankInspection] = useState(
    offerIn?.bankInspection?.completed || false
  );
  const [urgentAssistanceBankInspection, setUrgentAssistanceBankInspection] =
    useState(offerIn?.bankInspection?.urgentAssistance || false);

  const [deadlineBankInspection, setDeadlineBankInspection] =
    useState<Date | null>(null);
  const [flagBankInspection, setFlagBankInspection] = useState(
    offerIn?.bankInspection?.flag || false
  );
  // const [messageBankInspection, setMessageBankInspection] = useState(
  //   offerIn?.bankInspection?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ BankInspection ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [nameConveyancer, setNameConveyancer] = useState(
    offerIn?.conveyancer?.name || ""
  );
  const [phoneConveyancer, setPhoneConveyancer] = useState(
    offerIn?.conveyancer?.phone || ""
  );
  const [notesConveyancer, setNotesConveyancer] = useState(
    offerIn?.conveyancer?.notes || ""
  );
  const [completedConveyancer, setCompletedConveyancer] = useState(
    offerIn?.conveyancer?.completed || false
  );
  const [urgentAssistanceConveyancer, setUrgentAssistanceConveyancer] =
    useState(offerIn?.conveyancer?.urgentAssistance || false);

  const [deadlineConveyancer, setDeadlineConveyancer] = useState<Date | null>(
    null
  );
  const [flagConveyancer, setFlagConveyancer] = useState(
    offerIn?.conveyancer?.flag || false
  );
  // const [messageConveyancer, setMessageConveyancer] = useState(
  //   offerIn?.conveyancer?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ MortgageOriginator ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [phoneMortgageOriginator, setPhoneMortgageOriginator] = useState(
    offerIn?.mortgageOriginator?.phone || ""
  );
  const [nameMortgageOriginator, setNameMortgageOriginator] = useState(
    offerIn?.mortgageOriginator?.name || ""
  );
  const [notesMortgageOriginator, setNotesMortgageOriginator] = useState(
    offerIn?.mortgageOriginator?.notes || ""
  );
  const [completedMortgageOriginator, setCompletedMortgageOriginator] =
    useState(offerIn?.mortgageOriginator?.completed || false);
  const [
    urgentAssistanceMortgageOriginator,
    setUrgentAssistanceMortgageOriginator,
  ] = useState(offerIn?.mortgageOriginator?.urgentAssistance || false);

  const [deadlineMortgageOriginator, setDeadlineMortgageOriginator] =
    useState<Date | null>(null);
  const [flagMortgageOriginator, setFlagMortgageOriginator] = useState(
    offerIn?.mortgageOriginator?.flag || false
  );
  // const [messageMortgageOriginator, setMessageMortgageOriginator] = useState(
  //   offerIn?.mortgageOriginator?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ FicaDocs ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [addressFicaDocs, setAddressFicaDocs] = useState(
    offerIn?.ficaDocs?.address || ""
  );

  const [notesFicaDocs, setNotesFicaDocs] = useState(
    offerIn?.ficaDocs?.notes || ""
  );
  const [completedFicaDocs, setCompletedFicaDocs] = useState(
    offerIn?.ficaDocs?.completed || false
  );
  const [urgentAssistanceFicaDocs, setUrgentAssistanceFicaDocs] = useState(
    offerIn?.ficaDocs?.urgentAssistance || false
  );
  const [deadlineFicaDocs, setDeadlineFicaDocs] = useState<Date | null>(null);
  const [flagFicaDocs, setFlagFicaDocs] = useState<boolean | undefined | null>(
    offerIn?.ficaDocs?.flag || false
  );
  // const [messageFicaDocs, setMessageFicaDocs] = useState(
  //   offerIn?.ficaDocs?.message
  // );

  let offerInDetails = {
    variables: {
      input: {
        id: offerIn!.id,
        propertyId: propertyId,
        amount: amount,
        dot: dot,
        dateOfBondApplication: dateOfBondApplication,
        dateOfBondApprovalInPrincipal: dateOfBondApprovalInPrincipal,
        dateOfBondApproved: dateOfBondApproved,
        bankName: bankName,
        flag: flag,
        elecCompCompanyId: elecCompCompanyId,
        intermologistId: intermologistId,
        gasComplianceId: gasComplianceId,
        waterCertId: waterCertId,
        offerAcceptedId: offerAcceptedId,
        bankInspectionId: bankInspectionId,
        conveyancerId: conveyancerId,
        mortgageOriginatorId: mortgageOriginatorId,
        ficaDocsId: ficaDocsId,
        elecCompCompany: {
          offerInId: offerIn!.id,
          name: nameElecCompCompany,
          phone: phoneElecCompCompany,
          email: emailElecCompCompany,
          notes: notesElecCompCompany,
          completed: completedElecCompCompany,
          urgentAssistance: urgentAssistanceElecCompCompany,
          deadline: deadlineElecCompCompany,
          flag: flagElecCompCompany,
        },
        intermologist: {
          offerInId: offerIn!.id,
          name: nameIntermologist,
          phone: phoneIntermologist,
          email: emailIntermologist,
          notes: notesIntermologist,
          completed: completedIntermologist,
          urgentAssistance: urgentAssistanceIntermologist,
          deadline: deadlineIntermologist,
          flag: flagIntermologist,
        },
        gasCompliance: {
          offerInId: offerIn!.id,
          gasCompCerUrl: gasCompCerUrlGasCompliance,
          notes: notesGasCompliance,
          completed: completedGasCompliance,
          urgentAssistance: urgentAssistanceGasCompliance,
          deadline: deadlineGasCompliance,
          flag: flagGasCompliance,
        },
        waterCert: {
          offerInId: offerIn!.id,
          notes: notesWaterCert,
          completed: completedWaterCert,
          urgentAssistance: urgentAssistanceWaterCert,
          deadline: deadlineWaterCert,
          flag: flagWaterCert,
        },
        offerAccepted: {
          offerInId: offerIn!.id,
          withConditions: withConditionsOfferAccepted,
          conditions: conditionsOfferAccepted,
          notes: notesOfferAccepted,
          completed: completedOfferAccepted,
          urgentAssistance: urgentAssistanceOfferAccepted,
          deadline: deadlineOfferAccepted,
          flag: flagOfferAccepted,
        },
        bankInspection: {
          offerInId: offerIn!.id,
          notes: notesBankInspection,
          completed: completedBankInspection,
          urgentAssistance: urgentAssistanceBankInspection,
          deadline: deadlineBankInspection,
          flag: flagBankInspection,
        },
        conveyancer: {
          offerInId: offerIn!.id,
          name: nameConveyancer,
          phone: phoneConveyancer,
          notes: notesConveyancer,
          completed: completedConveyancer,
          urgentAssistance: urgentAssistanceConveyancer,
          deadline: deadlineConveyancer,
          flag: flagConveyancer,
        },
        mortgageOriginator: {
          offerInId: offerIn!.id,
          phone: phoneMortgageOriginator,
          name: nameMortgageOriginator,
          notes: notesMortgageOriginator,
          completed: completedMortgageOriginator,
          urgentAssistance: urgentAssistanceMortgageOriginator,
          deadline: deadlineMortgageOriginator,
          flag: flagMortgageOriginator,
        },
        ficaDocs: {
          offerInId: offerIn!.id,
          address: addressFicaDocs,
          notes: notesFicaDocs,
          completed: completedFicaDocs,
          urgentAssistance: urgentAssistanceFicaDocs,
          deadline: deadlineFicaDocs,
          flag: flagFicaDocs,
        },
      },
    },
  };
  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      if (add) {
        addOfferIn(offerInDetails);
      }
      if (edit) {
        updateOfferIn(offerInDetails);
      }
      setTimeout(() => {
        setFormSent(!formSent);
      }, 1000);
    }

    sendForm();
    setTimeout(() => {
      setFormSent(!formSent);
    }, 1000);
  };

  return (
    <form
      onSubmit={onFinish}
      className="space-y-1 py-4 w-full mx-auto bg-white px-6"
    >
      <h2
        id="general"
        className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
      >
        Offer In
      </h2>

      <label className="justify-center text-md pb-4 flex flex-row-reverse items-center pt-12">
        <input
          id="flag"
          type="checkbox"
          checked={flag as boolean}
          placeholder="flag"
          onChange={(e) => setFlag(e.target.checked)}
          className="hidden"
        />
        <label className="ml-4 text-md font-bold">Flag</label>
        <Switch
          switchOn={flag}
          backGround="bg-gray"
          checked={flag as boolean}
          radioMode={false}
        />
      </label>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md">
        <label className="text-black font-bold">Bank Name</label>
        <input
          id="bankName"
          value={bankName as string}
          placeholder="Absa"
          onChange={(e) => setBankName(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Amount</label>
        <input
          id="amount"
          value={amount as string}
          placeholder=""
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md">
        <label className="text-black font-bold">Date Of Transfer</label>
        <Calender
          onChange={(date: Date) => setDot(new Date(date))}
          selected={dot || null}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-6 text-md">
        <label className="text-black font-bold">Date Of Bond Application</label>
        <Calender
          onChange={(date: Date) => setDateOfBondApplication(new Date(date))}
          selected={dateOfBondApplication || null}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">
          Date of Bond Approval In Principal
        </label>
        <Calender
          onChange={(date: Date) =>
            setDateOfBondApprovalInPrincipal(new Date(date))
          }
          selected={dateOfBondApprovalInPrincipal || null}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Date of Bond Approved</label>
        <Calender
          onChange={(date: Date) => setDateOfBondApproved(new Date(date))}
          selected={dateOfBondApproved || null}
        />
      </div>

      <ContainerTitle>
        <h2
          id="ECC"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Electrical Compliance Company
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.Eleccompcompany}
          edit={true}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className=" text-black font-bold">name ElecCompCompany</label>
        <input
          id="nameElecCompCompany"
          value={nameElecCompCompany as string}
          placeholder="elecCompCompany Name"
          onChange={(e) => setNameElecCompCompany(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">phone ElecCompCompany</label>
        <input
          id="phoneElecCompCompany"
          value={phoneElecCompCompany as string}
          placeholder=""
          onChange={(e) => setPhoneElecCompCompany(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">email ElecCompCompany</label>
        <input
          id="emailElecCompCompany"
          value={emailElecCompCompany as string}
          placeholder="emailElecCompCompany"
          onChange={(e) => setEmailElecCompCompany(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">notes ElecCompCompany</label>
        <input
          id="notesElecCompCompany"
          value={notesElecCompCompany as string}
          placeholder=""
          onChange={(e) => setNotesElecCompCompany(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagElecCompCompany"
            type="checkbox"
            checked={flagElecCompCompany as boolean}
            placeholder=""
            onChange={(e) => setFlagElecCompCompany(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagElecCompCompany}
            backGround="bg-gray"
            checked={flagElecCompCompany as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedElecCompCompany"
            type="checkbox"
            checked={completedElecCompCompany as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedElecCompCompany(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedElecCompCompany}
            backGround="bg-gray"
            checked={completedElecCompCompany as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceElecCompCompany"
            type="checkbox"
            checked={urgentAssistanceElecCompCompany as boolean}
            placeholder="urgent assistance ElecCompCompany"
            onChange={(e) =>
              setUrgentAssistanceElecCompCompany(e.target.checked)
            }
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">urgentAssistance</label>
          <Switch
            switchOn={urgentAssistanceElecCompCompany}
            backGround="bg-gray"
            checked={urgentAssistanceElecCompCompany as boolean}
            radioMode={false}
          />
        </label>
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineElecCompCompany(new Date(date))}
          selected={deadlineElecCompCompany || null}
        />
      </div>

      <ContainerTitle>
        <h2
          id="FICA"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          FICA
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.FicaDocuments}
          edit={true}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineFicaDocs(new Date(date))}
          selected={deadlineFicaDocs || null}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">address</label>
        <input
          id="addressFicaDocs"
          value={addressFicaDocs as string}
          placeholder="Address"
          onChange={(e) => setAddressFicaDocs(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">notes</label>
        <input
          id="notesFicaDocs"
          value={notesFicaDocs as string}
          placeholder="Notes"
          onChange={(e) => setNotesFicaDocs(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagFicaDocs"
            type="checkbox"
            checked={flagFicaDocs as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagFicaDocs(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagFicaDocs}
            backGround="bg-gray"
            checked={flagFicaDocs as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedFicaDocs"
            type="checkbox"
            checked={completedFicaDocs as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedFicaDocs(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedFicaDocs}
            backGround="bg-gray"
            checked={completedFicaDocs as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceFicaDocs"
            type="checkbox"
            checked={urgentAssistanceFicaDocs as boolean}
            placeholder="urgent assistance"
            onChange={(e) => setUrgentAssistanceFicaDocs(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">urgentAssistance</label>
          <Switch
            switchOn={urgentAssistanceFicaDocs}
            backGround="bg-gray"
            checked={urgentAssistanceFicaDocs as boolean}
            radioMode={false}
          />
        </label>
      </div>

      <ContainerTitle>
        <h2
          id="Mortgage"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Mortgage Originator
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.Mortgage}
          edit={true}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Name</label>
        <input
          id="nameMortgageOriginator"
          value={nameMortgageOriginator as string}
          placeholder="Name"
          onChange={(e) => setNameMortgageOriginator(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Phone</label>
        <input
          id="phoneMortgageOriginator"
          value={phoneMortgageOriginator as string}
          placeholder="Phone"
          onChange={(e) => setPhoneMortgageOriginator(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Notes</label>
        <input
          id="notesMortgageOriginator"
          value={notesMortgageOriginator as string}
          placeholder="Notes"
          onChange={(e) => setNotesMortgageOriginator(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) =>
            setDeadlineMortgageOriginator(new Date(date))
          }
          selected={deadlineMortgageOriginator || null}
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagMortgageOriginator"
            type="checkbox"
            checked={flagMortgageOriginator as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagMortgageOriginator(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagMortgageOriginator}
            backGround="bg-gray"
            checked={flagMortgageOriginator as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedMortgageOriginator"
            type="checkbox"
            checked={completedMortgageOriginator as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedMortgageOriginator(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedMortgageOriginator}
            backGround="bg-gray"
            checked={completedMortgageOriginator as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceMortgageOriginator"
            type="checkbox"
            checked={urgentAssistanceMortgageOriginator as boolean}
            placeholder="urgent assistance"
            onChange={(e) =>
              setUrgentAssistanceMortgageOriginator(e.target.checked)
            }
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Urgent Assistance</label>
          <Switch
            switchOn={urgentAssistanceMortgageOriginator}
            backGround="bg-gray"
            checked={urgentAssistanceMortgageOriginator as boolean}
            radioMode={false}
          />
        </label>
      </div>

      <ContainerTitle>
        <h2
          id="Conveyancer"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Conveyancer
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.Conveyancer}
          edit={true}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Name</label>
        <input
          id="nameConveyancer"
          value={nameConveyancer as string}
          placeholder="Name"
          onChange={(e) => setNameConveyancer(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Phone</label>
        <input
          id="phoneConveyancer"
          value={phoneConveyancer as string}
          placeholder="Phone"
          onChange={(e) => setPhoneConveyancer(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Notes</label>
        <input
          id="notesConveyancer"
          value={notesConveyancer as string}
          placeholder="Notes"
          onChange={(e) => setNotesConveyancer(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineConveyancer(new Date(date))}
          selected={deadlineConveyancer || null}
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagConveyancer"
            type="checkbox"
            checked={flagConveyancer as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagConveyancer(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagConveyancer}
            backGround="bg-gray"
            checked={flagConveyancer as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedConveyancer"
            type="checkbox"
            checked={completedConveyancer as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedConveyancer(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedConveyancer}
            backGround="bg-gray"
            checked={completedConveyancer as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceConveyancer"
            type="checkbox"
            checked={urgentAssistanceConveyancer as boolean}
            placeholder="urgent assistance"
            onChange={(e) => setUrgentAssistanceConveyancer(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Urgent Assistance</label>
          <Switch
            switchOn={urgentAssistanceConveyancer}
            backGround="bg-gray"
            checked={urgentAssistanceConveyancer as boolean}
            radioMode={false}
          />
        </label>
      </div>

      <ContainerTitle>
        <h2
          id="BankInspection"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Bank Inspection
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.BankInspection}
          edit={true}
        />
      </div>

      <p className="text-black font-bold text-md text-center">
        Add Bank Inspection Docs
      </p>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Notes</label>
        <input
          id="notesBankInspection"
          value={notesBankInspection as string}
          placeholder="Notes"
          onChange={(e) => setNotesBankInspection(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineBankInspection(new Date(date))}
          selected={deadlineBankInspection || null}
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagBankInspection"
            type="checkbox"
            checked={flagBankInspection as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagBankInspection(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagBankInspection}
            backGround="bg-gray"
            checked={flagBankInspection as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedBankInspection"
            type="checkbox"
            checked={completedBankInspection as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedBankInspection(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedBankInspection}
            backGround="bg-gray"
            checked={completedBankInspection as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceBankInspection"
            type="checkbox"
            checked={urgentAssistanceBankInspection as boolean}
            placeholder="urgent assistance"
            onChange={(e) =>
              setUrgentAssistanceBankInspection(e.target.checked)
            }
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Urgent Assistance</label>
          <Switch
            switchOn={urgentAssistanceBankInspection}
            backGround="bg-gray"
            checked={urgentAssistanceBankInspection as boolean}
            radioMode={false}
          />
        </label>
      </div>

      <ContainerTitle>
        <h2
          id="OfferAccepted"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Offer Accepted
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.OfferAccepted}
          edit={true}
        />
      </div>

      <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
        <input
          id="withConditionsOfferAccepted"
          type="checkbox"
          checked={withConditionsOfferAccepted as boolean}
          placeholder="Flag"
          onChange={(e) => setWithConditionsOfferAccepted(e.target.checked)}
          className="hidden"
        />
        <label className="ml-4 text-md font-bold">With Conditions</label>
        <Switch
          switchOn={withConditionsOfferAccepted}
          backGround="bg-gray"
          checked={withConditionsOfferAccepted as boolean}
          radioMode={false}
        />
      </label>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Conditions</label>
        <input
          id="conditionsOfferAccepted"
          value={conditionsOfferAccepted as string}
          placeholder="Notes"
          onChange={(e) => setConditionsOfferAccepted(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Notes</label>
        <input
          id="notesOfferAccepted"
          value={notesOfferAccepted as string}
          placeholder="URL"
          onChange={(e) => setNotesOfferAccepted(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineOfferAccepted(new Date(date))}
          selected={deadlineOfferAccepted || null}
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagOfferAccepted"
            type="checkbox"
            checked={flagOfferAccepted as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagOfferAccepted(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagOfferAccepted}
            backGround="bg-gray"
            checked={flagOfferAccepted as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedOfferAccepted"
            type="checkbox"
            checked={completedOfferAccepted as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedOfferAccepted(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedOfferAccepted}
            backGround="bg-gray"
            checked={completedOfferAccepted as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceOfferAccepted"
            type="checkbox"
            checked={urgentAssistanceOfferAccepted as boolean}
            placeholder="urgent assistance"
            onChange={(e) => setUrgentAssistanceOfferAccepted(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Urgent Assistance</label>
          <Switch
            switchOn={urgentAssistanceOfferAccepted}
            backGround="bg-gray"
            checked={urgentAssistanceOfferAccepted as boolean}
            radioMode={false}
          />
        </label>
      </div>

      <ContainerTitle>
        <h2
          id="Water"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Water Certificate
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.WaterCert}
          edit={true}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Notes</label>
        <input
          id="notesWaterCert"
          value={notesWaterCert as string}
          placeholder="Notes"
          onChange={(e) => setNotesWaterCert(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineWaterCert(new Date(date))}
          selected={deadlineWaterCert || null}
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagWaterCert"
            type="checkbox"
            checked={flagWaterCert as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagWaterCert(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagWaterCert}
            backGround="bg-gray"
            checked={flagWaterCert as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedWaterCert"
            type="checkbox"
            checked={completedWaterCert as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedWaterCert(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedWaterCert}
            backGround="bg-gray"
            checked={completedWaterCert as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceWaterCert"
            type="checkbox"
            checked={urgentAssistanceWaterCert as boolean}
            placeholder="urgent assistance"
            onChange={(e) => setUrgentAssistanceWaterCert(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Urgent Assistance</label>
          <Switch
            switchOn={urgentAssistanceWaterCert}
            backGround="bg-gray"
            checked={urgentAssistanceWaterCert as boolean}
            radioMode={false}
          />
        </label>
      </div>

      <ContainerTitle>
        <h2
          id="Gas"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Gas Compliance
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.GasComCert}
          edit={true}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Notes</label>
        <input
          id="notesGasCompliance"
          value={notesGasCompliance as string}
          placeholder="Notes"
          onChange={(e) => setNotesGasCompliance(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Water Cert URL</label>
        <input
          id="urlGasCompliance"
          value={gasCompCerUrlGasCompliance as string}
          placeholder="Notes"
          onChange={(e) => setGasCompCerUrlGasCompliance(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineGasCompliance(new Date(date))}
          selected={deadlineGasCompliance || null}
        />
      </div>

      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagGasCompliance"
            type="checkbox"
            checked={flagGasCompliance as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagGasCompliance(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagGasCompliance}
            backGround="bg-gray"
            checked={flagGasCompliance as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedGasCompliance"
            type="checkbox"
            checked={completedGasCompliance as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedGasCompliance(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedGasCompliance}
            backGround="bg-gray"
            checked={completedGasCompliance as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceGasCompliance"
            type="checkbox"
            checked={urgentAssistanceGasCompliance as boolean}
            placeholder="urgent assistance"
            onChange={(e) => setUrgentAssistanceGasCompliance(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Urgent Assistance</label>
          <Switch
            switchOn={urgentAssistanceGasCompliance}
            backGround="bg-gray"
            checked={urgentAssistanceGasCompliance as boolean}
            radioMode={false}
          />
        </label>
      </div>

      <ContainerTitle>
        <h2
          id="Intermologist"
          className="scroll-mt-navigation-height text-3xl font-light text-center border-y-4 border-off-white py-12"
        >
          Entomologist
        </h2>
      </ContainerTitle>

      <div className="pt-6">
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.Intermologist}
          edit={true}
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Name</label>
        <input
          id="nameIntermologist"
          value={nameIntermologist as string}
          placeholder="Intermologist Name"
          onChange={(e) => setNameIntermologist(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Phone</label>
        <input
          id="phoneIntermologist"
          value={phoneIntermologist as string}
          placeholder=""
          onChange={(e) => setPhoneIntermologist(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Email</label>
        <input
          id="emailIntermologist"
          value={emailIntermologist as string}
          placeholder="emailIntermologist"
          onChange={(e) => setEmailIntermologist(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>

      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Notes</label>
        <input
          id="notesIntermologist"
          value={notesIntermologist as string}
          placeholder=""
          onChange={(e) => setNotesIntermologist(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagIntermologist"
            type="checkbox"
            checked={flagIntermologist as boolean}
            placeholder=""
            onChange={(e) => setFlagIntermologist(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagIntermologist}
            backGround="bg-gray"
            checked={flagIntermologist as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedIntermologist"
            type="checkbox"
            checked={completedIntermologist as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedIntermologist(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedIntermologist}
            backGround="bg-gray"
            checked={completedIntermologist as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="urgentAssistanceIntermologist"
            type="checkbox"
            checked={urgentAssistanceIntermologist as boolean}
            placeholder="urgent assistance"
            onChange={(e) => setUrgentAssistanceIntermologist(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">urgentAssistance</label>
          <Switch
            switchOn={urgentAssistanceIntermologist}
            backGround="bg-gray"
            checked={urgentAssistanceIntermologist as boolean}
            radioMode={false}
          />
        </label>
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineIntermologist(new Date(date))}
          selected={deadlineIntermologist || null}
        />
      </div>

      <div className="w-full mx-auto flex items-center justify-center pt-10">
        <div className="space-x-3">
          <Button variant="secondary" onClick={onClick} className="text-white">
            Cancel
          </Button>
          {loadingUpdateOfferIn || loadingAddOfferIn ? (
            <Button className="text-white">Saving Changes</Button>
          ) : (
            <Button type="submit" className="text-white">
              Save
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}

export const ImageGallery = ({
  documents,
  showNoImage,
  newId,
  add,
  edit,
  offerIn,
  documentCategory,
  removeType,
  userEmail,
  recipientEmail,
}: {
  documents: Document[] | undefined | null;
  showNoImage?: boolean;
  newId?: string;
  add?: boolean;
  edit?: boolean;
  offerIn: OfferIn | undefined | null;
  documentCategory: Document_Category;
  removeType: "image" | "document";
  userEmail: string;
  recipientEmail: string;
}) => {
  return (
    <section className="pb-6">
      <div className="grid grid-cols-2 gap-2 w-full mx-auto md:grid-cols-4 h-full">
        {documents?.map(
          (doc, i) =>
            doc.offerInId === offerIn?.id &&
            doc.documentCategory === documentCategory && (
              <div key={i} className="relative ">
                <ModalImage
                  className="rounded-xl object-cover aspect-square"
                  small={doc.url}
                  large={doc.url}
                  hideDownload
                  hideZoom
                />
                {edit && (
                  <div className="absolute bottom-5 left-5">
                    <div className="flex items-center justify-center space-x-3">
                      <RemoveImage
                        url={doc.url}
                        imageId={doc.id}
                        removeType={removeType}
                        documentId={doc.id}
                      />
                      <EmailSender
                        bucketName={"landmark-real-eastate"}
                        keys={[
                          "0348b44e-fff7-4cda-bab4-de985b5ed820/submain1.png",
                        ]}
                        recipient={"jonvdberg8@gmail.com"}
                        sender={userEmail}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
        )}
        <div className="w-full h-full bg-[rgb(240,240,240)] rounded-xl">
          <UploadImage
            propertyId={""}
            uploadType={"document"}
            offerInId={offerIn!.id}
            documentCategory={documentCategory}
          />
        </div>
      </div>
    </section>
  );
};
