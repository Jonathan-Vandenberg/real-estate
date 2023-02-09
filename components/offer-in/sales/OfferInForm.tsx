import moment from "moment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ModalImage from "react-modal-image";
import {
  Document,
  Document_Category,
  OfferIn,
  Offer_In_Categories,
  Todo,
  useAddTodoMutation,
  useAddOfferInMutation,
  useUpdateOfferInMutation,
} from "../../../types";
import RemoveImage from "../../aws/DeleteImages";
import EmailSender from "../../aws/EmailSender";
import UploadImage from "../../aws/UploadImage";
import { Button } from "../../global/Button";
import Calender from "../../global/Calender";
import ContainerTitle from "../../global/ContainerTitle";
import Switch from "../../global/Switch";
import Todos from "../../todo/Todos";
import Plus from "../../svgs/Plus";

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

        const deadlineElectricFence = moment(
          offerIn?.electricFence?.deadline
        ).toDate();
        setDeadlineElectricFence(deadlineElectricFence);

        const deadlineAlien = moment(offerIn?.alien?.deadline).toDate();
        setDeadlineAlien(deadlineAlien);
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
  const [addTodo, { loading: loadingAddTodo, error: errorAddTodo }] =
    useAddTodoMutation();

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
      setElectricFenceId(offerIn!.electricFenceId);
      setAlienId(offerIn!.alienId);
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
  const [electricFenceId, setElectricFenceId] = useState(
    offerIn!.electricFenceId
  );
  const [alienId, setAlienId] = useState(offerIn!.alienId);

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
  const [deadlineBankInspection, setDeadlineBankInspection] =
    useState<Date | null>(null);
  const [flagBankInspection, setFlagBankInspection] = useState(
    offerIn?.bankInspection?.flag || false
  );
  // const [messageBankInspection, setMessageBankInspection] = useState(
  //   offerIn?.bankInspection?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ Conveyancer ~~~~~~~~~~~~~~~~~~~~~~~~//
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
  const [deadlineFicaDocs, setDeadlineFicaDocs] = useState<Date | null>(null);
  const [flagFicaDocs, setFlagFicaDocs] = useState<boolean | undefined | null>(
    offerIn?.ficaDocs?.flag || false
  );
  // const [messageFicaDocs, setMessageFicaDocs] = useState(
  //   offerIn?.ficaDocs?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ Electric Fence ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [notesElectricFence, setNotesElectricFence] = useState(
    offerIn?.electricFence?.notes || ""
  );
  const [completedElectricFence, setCompletedElectricFence] = useState(
    offerIn?.electricFence?.completed || false
  );
  const [deadlineElectricFence, setDeadlineElectricFence] =
    useState<Date | null>(null);
  const [flagElectricFence, setFlagElectricFence] = useState(
    offerIn?.electricFence?.flag || false
  );
  // const [messageConveyancer, setMessageConveyancer] = useState(
  //   offerIn?.conveyancer?.message
  // );

  //~~~~~~~~~~~~~~~~~~~~~~~~ Alien ~~~~~~~~~~~~~~~~~~~~~~~~//
  const [notesAlien, setNotesAlien] = useState(offerIn?.alien?.notes || "");
  const [completedAlien, setCompletedAlien] = useState(
    offerIn?.alien?.completed || false
  );
  const [deadlineAlien, setDeadlineAlien] = useState<Date | null>(null);
  const [flagAlien, setFlagAlien] = useState(offerIn?.alien?.flag || false);
  // const [messageConveyancer, setMessageConveyancer] = useState(
  //   offerIn?.conveyancer?.message
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
        electricFenceId: electricFenceId,
        alienId: alienId,
        elecCompCompany: {
          offerInId: offerIn!.id,
          name: nameElecCompCompany,
          phone: phoneElecCompCompany,
          email: emailElecCompCompany,
          notes: notesElecCompCompany,
          completed: completedElecCompCompany,
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
          deadline: deadlineIntermologist,
          flag: flagIntermologist,
        },
        gasCompliance: {
          offerInId: offerIn!.id,
          gasCompCerUrl: gasCompCerUrlGasCompliance,
          notes: notesGasCompliance,
          completed: completedGasCompliance,
          deadline: deadlineGasCompliance,
          flag: flagGasCompliance,
        },
        waterCert: {
          offerInId: offerIn!.id,
          notes: notesWaterCert,
          completed: completedWaterCert,
          deadline: deadlineWaterCert,
          flag: flagWaterCert,
        },
        offerAccepted: {
          offerInId: offerIn!.id,
          withConditions: withConditionsOfferAccepted,
          conditions: conditionsOfferAccepted,
          notes: notesOfferAccepted,
          completed: completedOfferAccepted,
          deadline: deadlineOfferAccepted,
          flag: flagOfferAccepted,
        },
        bankInspection: {
          offerInId: offerIn!.id,
          notes: notesBankInspection,
          completed: completedBankInspection,
          deadline: deadlineBankInspection,
          flag: flagBankInspection,
        },
        conveyancer: {
          offerInId: offerIn!.id,
          name: nameConveyancer,
          phone: phoneConveyancer,
          notes: notesConveyancer,
          completed: completedConveyancer,
          deadline: deadlineConveyancer,
          flag: flagConveyancer,
        },
        mortgageOriginator: {
          offerInId: offerIn!.id,
          phone: phoneMortgageOriginator,
          name: nameMortgageOriginator,
          notes: notesMortgageOriginator,
          completed: completedMortgageOriginator,
          deadline: deadlineMortgageOriginator,
          flag: flagMortgageOriginator,
        },
        ficaDocs: {
          offerInId: offerIn!.id,
          address: addressFicaDocs,
          notes: notesFicaDocs,
          completed: completedFicaDocs,
          deadline: deadlineFicaDocs,
          flag: flagFicaDocs,
        },
        electricFence: {
          offerInId: offerIn!.id,
          notes: notesElectricFence,
          completed: completedElectricFence,
          deadline: deadlineElectricFence,
          flag: flagElectricFence,
        },
        alien: {
          offerInId: offerIn!.id,
          notes: notesAlien,
          completed: completedAlien,
          deadline: deadlineAlien,
          flag: flagAlien,
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

  const handleAddTodo = (offerInCategory: Offer_In_Categories) => {
    addTodo({
      variables: {
        input: {
          offerInCategory: offerInCategory,
          offerInId: offerIn!.id,
        },
      },
    });
  };

  return (
    <form
      onSubmit={onFinish}
      className="md:space-y-1 py-4 w-full mx-auto bg-white md:px-6 px-3"
    >
      <h2
        id="general"
        className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
      >
        Offer In
      </h2>
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
      <div className="flex items-start space-y-1 justify-center flex-col pt-6 text-md">
        <label className="text-black font-bold">Date Of Bond Application</label>
        <Calender
          onChange={(date: Date) => setDateOfBondApplication(new Date(date))}
          selected={dateOfBondApplication || null}
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md">
        <label className="text-black font-bold">Date Of Transfer</label>
        <Calender
          onChange={(date: Date) => setDot(new Date(date))}
          selected={dot || null}
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
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Electrical Compliance Company
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Eleccompcompany)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Eleccompcompany && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Eleccompcompany}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className=" text-black font-bold">Name</label>
        <input
          id="nameElecCompCompany"
          value={nameElecCompCompany as string}
          placeholder="elecCompCompany Name"
          onChange={(e) => setNameElecCompCompany(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Phone</label>
        <input
          id="phoneElecCompCompany"
          value={phoneElecCompCompany as string}
          placeholder=""
          onChange={(e) => setPhoneElecCompCompany(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="text-black font-bold">Email</label>
        <input
          id="emailElecCompCompany"
          value={emailElecCompCompany as string}
          placeholder="emailElecCompCompany"
          onChange={(e) => setEmailElecCompCompany(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          FICA
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Ficadocs)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Ficadocs && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Ficadocs}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
        <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
          <label className="text-black font-bold">Deadline</label>
          <Calender
            onChange={(date: Date) => setDeadlineFicaDocs(new Date(date))}
            selected={deadlineFicaDocs || null}
          />
        </div>
      </div>
      <ContainerTitle>
        <h2
          id="Mortgage"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Mortgage Originator
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Mortgageoriginator)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory ===
                Offer_In_Categories.Mortgageoriginator && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Mortgageoriginator}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
      </div>
      <ContainerTitle>
        <h2
          id="Conveyancer"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Conveyancer
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Conveyancer)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Conveyancer && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Conveyancer}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
      </div>
      <ContainerTitle>
        <h2
          id="BankInspection"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Bank Inspection
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Bankinspection)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Bankinspection && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Bankinspection}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
      </div>
      <ContainerTitle>
        <h2
          id="OfferAccepted"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Offer Accepted
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Offeraccepted)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Offeraccepted && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Offeraccepted}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
      </div>
      <ContainerTitle>
        <h2
          id="Water"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Water Certificate
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Watercert)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Watercert && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Watercert}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
      </div>
      <ContainerTitle>
        <h2
          id="Gas"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Gas Compliance
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Gascompliance)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Gascompliance && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Gascompliance}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
        <input
          id="notesGasCompliance"
          value={notesGasCompliance as string}
          placeholder="Notes"
          onChange={(e) => setNotesGasCompliance(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
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
      </div>
      <ContainerTitle>
        <h2
          id="Intermologist"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Entomologist
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Intermologist)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Intermologist && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Intermologist}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
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
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
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
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineIntermologist(new Date(date))}
          selected={deadlineIntermologist || null}
        />
      </div>
      <ContainerTitle>
        <h2
          id="ElectricFence"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Electric Fence Certificate
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.ElectricFence)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.ElectricFence && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.ElectricFence}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.ElectricFence}
          edit={true}
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
        <input
          id="notesElectricFence"
          value={notesElectricFence as string}
          placeholder="Notes"
          onChange={(e) => setNotesElectricFence(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineElectricFence(new Date(date))}
          selected={deadlineElectricFence || null}
        />
      </div>
      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagElectricFence"
            type="checkbox"
            checked={flagElectricFence as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagElectricFence(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagElectricFence}
            backGround="bg-gray"
            checked={flagElectricFence as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedElectricFence"
            type="checkbox"
            checked={completedElectricFence as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedElectricFence(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedElectricFence}
            backGround="bg-gray"
            checked={completedElectricFence as boolean}
            radioMode={false}
          />
        </label>
      </div>
      <ContainerTitle>
        <h2
          id="AlienSpecies"
          className="scroll-mt-[8rem] text-3xl md:text-3xl font-bold tracking-widest text-center border-y-4 border-off-white py-4 md:py-12"
        >
          Alien Species Certificate
        </h2>
      </ContainerTitle>
      <ul className="space-y-4">
        <div
          onClick={() => handleAddTodo(Offer_In_Categories.Alien)}
          className="w-full mx-auto items-center flex justify-center pt-3 text-md text-[rgb(36,138,52)] hover:cursor-pointer"
        >
          Add todo <Plus className="w-10 h-10 text-[rgb(36,138,52)] " />
        </div>
        {offerIn?.todos
          ?.map(
            (todo, i) =>
              todo?.offerInCategory === Offer_In_Categories.Alien && (
                <li className="md:p-5" key={i}>
                  <Todos
                    todo={todo}
                    offerInCategory={Offer_In_Categories.Alien}
                  />
                </li>
              )
          )
          .slice(0)
          .reverse()}
      </ul>
      <div className="pt-6">
        <p className="text-md font-bold pb-1">Documents</p>
        <ImageGallery
          recipientEmail={recipientEmail}
          userEmail={userEmail}
          removeType="document"
          documents={documents}
          offerIn={offerIn}
          documentCategory={Document_Category.Alien}
          edit={true}
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md ">
        <label className="flex items-center justify-center space-x-2 text-black font-bold">
          <p className="whitespace-nowrap">Flag Note</p>
          <p className="text-xs text-gray font-light">
            (Click &quot;Flag&quot; Button to notify Management)
          </p>
        </label>
        <input
          id="notesAlien"
          value={notesAlien as string}
          placeholder="Notes"
          onChange={(e) => setNotesAlien(e.target.value)}
          className="p-3 rounded-xl w-full bg-[rgb(247,247,247)]"
        />
      </div>
      <div className="flex items-start space-y-1 justify-center flex-col pt-5 text-md">
        <label className="text-black font-bold">Deadline</label>
        <Calender
          onChange={(date: Date) => setDeadlineAlien(new Date(date))}
          selected={deadlineAlien || null}
        />
      </div>
      <div className="flex flex-col items-start justify-center pt-6">
        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="flagAlien"
            type="checkbox"
            checked={flagAlien as boolean}
            placeholder="Flag"
            onChange={(e) => setFlagAlien(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Flag</label>
          <Switch
            switchOn={flagAlien}
            backGround="bg-gray"
            checked={flagAlien as boolean}
            radioMode={false}
          />
        </label>

        <label className="justify-center pt-4 text-md pb-4 flex flex-row-reverse items-center">
          <input
            id="completedAlien"
            type="checkbox"
            checked={completedAlien as boolean}
            placeholder="Completed"
            onChange={(e) => setCompletedAlien(e.target.checked)}
            className="hidden"
          />
          <label className="ml-4 text-md font-bold">Completed</label>
          <Switch
            switchOn={completedAlien}
            backGround="bg-gray"
            checked={completedAlien as boolean}
            radioMode={false}
          />
        </label>
      </div>
      <div className="w-full mx-auto flex items-center justify-center py-10">
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
  removeType: "image" | "document" | "profile-image";
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
                        blogPostId={""}
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
            blogPostId=""
            offerInId={offerIn!.id}
            documentCategory={documentCategory}
          />
        </div>
      </div>
    </section>
  );
};
