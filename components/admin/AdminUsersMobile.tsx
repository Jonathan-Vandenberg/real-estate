import classNames from "classnames";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { convertEnum } from "../../lib/property-types";
import { useAppSelector } from "../../redux-hooks/hooks";
import { Agent, OfferIn, Property, Status } from "../../types";
import { Button } from "../global/Button";
import OfferInButton from "../offer-in/sales/OfferInButton";
import { ChevDown } from "../svgs/Arrows";
import Image from "next/image";
import { formatMoney } from "../../lib/format-money";

interface IProps {
  showEditListing: boolean;
  property: Property[];
  agents: Agent[];
  onClick: () => void;
}

export default function AdminListingsMobile({
  property,
  agents,
  showEditListing,
  onClick,
}: IProps) {
  const { agentId } = useAppSelector((state) => state.agentId);
  const [open, setOpen] = useState(false);
  // const [agentHasFlag, setAgentHasFlag] = useState(false);

  // useEffect(() => {
  //   if (issue) setAgentHasFlag(true);
  //   console.log(agentHasFlag);
  // }, []);

  // let issue: boolean;
  // function hasFlag(prop: Property) {
  //   if (
  //     prop?.offerIn?.ficaDocs?.flag ||
  //     prop?.offerIn?.elecCompCompany?.flag ||
  //     prop?.offerIn?.intermologist?.flag ||
  //     prop?.offerIn?.gasCompliance?.flag ||
  //     prop?.offerIn?.waterCert?.flag ||
  //     prop?.offerIn?.offerAccepted?.flag ||
  //     prop?.offerIn?.bankInspection?.flag ||
  //     prop?.offerIn?.conveyancer?.flag ||
  //     prop?.offerIn?.mortgageOriginator?.flag ||
  //     prop?.offerIn?.electricFence?.flag ||
  //     prop?.offerIn?.alien?.flag
  //   ) {
  //     issue = true;
  //   } else {
  //     issue = false;
  //   }
  //   return issue;
  // }

  return (
    <div className="bg-white w-full md:hidden">
      {agents &&
        agents.map((agent, i) => {
          return (
            <div className="[&_p]:text-xs [&_p]:p-1 space-y-3 " key={i}>
              <Collapsible
                transitionTime={200}
                trigger={
                  <div
                    className="flex items-center justify-between px-2  space-y-2 border-b border-b-off-white "
                    onClick={() => setOpen(!open)}
                  >
                    <div className="flex items-center justify-center space-x-1 relative">
                      <div>
                        {agent.profileImage && (
                          <div className="h-10 w-10 relative">
                            <Image
                              src={agent.profileImage}
                              alt="HomeProp Image"
                              className="rounded-full object-cover"
                              layout="fill"
                            />
                          </div>
                        )}
                      </div>
                      {agent?.flag && (
                        <div className="absolute top-[0.4rem] -left-[0.8rem] bg-[rgb(253,27,27)] w-2 h-2 rounded-full animate-blink"></div>
                      )}
                      <div className="flex items-center justify-start py-3 font-semibold">
                        <p>{`${agent.firstName} ${agent.lastName}`}</p>
                      </div>
                    </div>
                    <div className={classNames("transition", open ? "" : "")}>
                      <ChevDown className="w-6 h-6" />
                    </div>
                  </div>
                }
              >
                {property.map((prop) => (
                  <div key={prop.id}>
                    {prop.agentId === agent.id && (
                      <div>
                        <Collapsible
                          transitionTime={200}
                          trigger={
                            <div
                              className="relative flex items-center justify-between px-2 bg-off-white  space-y-2 border-t border-t-white "
                              onClick={() => setOpen(!open)}
                            >
                              <div className="flex items-center justify-start py-3 font-semibold w-full">
                                <p>{prop.address}</p>
                              </div>
                              {prop?.offerIn?.flag && (
                                <div className="absolute top-0 bg-[rgb(253,27,27)] w-2 h-2 rounded-full animate-blink"></div>
                              )}
                              <div
                                className={classNames(
                                  "transition",
                                  open ? "" : ""
                                )}
                              >
                                <ChevDown className="w-6 h-6" />
                              </div>
                            </div>
                          }
                          key={prop.id}
                        >
                          <div>
                            <div className="border-t-2 border-t-white">
                              {prop?.offerIn?.conveyancer?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Conveyancer
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.conveyancer?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.elecCompCompany?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Electrical Compliance
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.elecCompCompany?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.intermologist?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Entomologist
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.intermologist?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.gasCompliance?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Gas Compliance
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.gasCompliance?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.waterCert?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Water Certificate
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.waterCert?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.offerAccepted?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Offer Accepted
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.offerAccepted?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.bankInspection?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Bank Valuation
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.bankInspection?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.mortgageOriginator?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Mortgage Originator
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.mortgageOriginator?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.ficaDocs?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    FICA
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.ficaDocs?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.electricFence?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Electric Fence
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.electricFence?.notes}
                                  </p>
                                </div>
                              )}
                              {prop?.offerIn?.alien?.flag && (
                                <div className="bg-[rgb(255,200,200)] px-2 border-b-2 border-b-white">
                                  <p className="text-md font-semibold w-full border-b ">
                                    Alien Species
                                  </p>
                                  <p className="my-2">
                                    {prop?.offerIn?.alien?.notes}
                                  </p>
                                </div>
                              )}
                              <div className="bg-[rgb(247,247,247)] px-2 border-b-2 border-b-white">
                                <p>{convertEnum(prop.propertyCategory)}</p>
                              </div>
                              <div className=" bg-[rgb(247,247,247)] border-b-2 border-b-white px-2">
                                <p>{formatMoney(+prop.price)}</p>
                              </div>
                              <div className="bg-[rgb(247,247,247)] flex items-center justify-start space-x-2 px-3">
                                <span
                                  className={classNames(
                                    "h-3 w-3 rounded-full",
                                    prop.featured
                                      ? "bg-[rgb(1,174,33)]"
                                      : "bg-[rgb(145,145,145)]"
                                  )}
                                />
                                <p>Featured</p>
                              </div>
                            </div>
                            <div className="bg-[rgb(247,247,247)]">
                              <div className="flex items-center justify-center px-2 py-4  border-t-2 border-t-white bg-[rgb(247,247,247)]">
                                {prop.status === Status.OfferIn && (
                                  <Button
                                    size="small"
                                    className="text-white font-semibold"
                                  >
                                    <a href={`/offer-in/${prop.id}`}>
                                      Progress Overview
                                    </a>
                                  </Button>
                                )}
                                {prop.status === Status.ForRent && (
                                  <div className="">
                                    <OfferInButton
                                      className="text-white bg-green-gradient whitespace-nowrap"
                                      propertyId={prop.id}
                                    />
                                  </div>
                                )}
                                {prop.status === Status.ForSale && (
                                  <div className="">
                                    <OfferInButton
                                      className="text-white bg-green-gradient whitespace-nowrap"
                                      propertyId={prop.id}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </Collapsible>
                      </div>
                    )}
                  </div>
                ))}
              </Collapsible>
            </div>
          );
        })}
    </div>
  );
}
