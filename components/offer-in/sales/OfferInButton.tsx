import { useEffect, useState } from "react";
import { useAddOfferInMutation } from "../../../types";
import { Button } from "../../global/Button";

export default function OfferInButton({
  propertyId,
  className,
}: {
  propertyId: string;
  className: string;
}) {
  const [id, setId] = useState("");
  const [offerInId, setOfferInId] = useState("");
  const [elecCompCompanyId, setElecCompCompanyId] = useState("");
  const [intermologistId, setIntermologistId] = useState("");
  const [gasComplianceId, setGasComplianceId] = useState("");
  const [waterCertId, setWaterCertId] = useState("");
  const [offerAcceptedId, setOfferAcceptedId] = useState("");
  const [bankInspectionId, setBankInspectionId] = useState("");
  const [conveyancerId, setConveyancerId] = useState("");
  const [mortgageOriginatorId, setMortgageOriginatorId] = useState("");
  const [ficaDocsId, setFicaDocsId] = useState("");
  const [electricFenceId, setElectricFenceId] = useState("");
  const [alienId, setAlienId] = useState("");

  useEffect(() => {
    var mongoObjectId = function () {
      var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
      return (
        timestamp +
        "xxxxxxxxxxxxxxxx"
          .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
          })
          .toLowerCase()
      );
    };
    setOfferInId(mongoObjectId());
    setElecCompCompanyId(mongoObjectId());
    setIntermologistId(mongoObjectId());
    setGasComplianceId(mongoObjectId());
    setWaterCertId(mongoObjectId());
    setOfferAcceptedId(mongoObjectId());
    setBankInspectionId(mongoObjectId());
    setConveyancerId(mongoObjectId());
    setMortgageOriginatorId(mongoObjectId());
    setFicaDocsId(mongoObjectId());
    setElectricFenceId(mongoObjectId());
    setAlienId(mongoObjectId());
  }, []);

  useEffect(() => {
    propertyId && setId(propertyId);
  }, []);

  const [offerIn, { data, loading, error }] = useAddOfferInMutation();

  const handleCreateOfferIn = async () => {
    await offerIn({
      variables: {
        input: {
          propertyId: id,
          id: offerInId,
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
        },
      },
    });
  };

  if (error) return <p>Oops... Something went wrong :(</p>;
  return (
    <Button
      variant="primary"
      size="small"
      className={className}
      onClick={() => handleCreateOfferIn()}
    >
      {loading ? "Creating Offer-In Workspace" : "Offer-In"}
    </Button>
  );
}
