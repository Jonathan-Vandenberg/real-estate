import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { Agent, Property, Status } from "../types";
import { useAppSelector } from "../redux-hooks/hooks";
import classNames from "classnames";
import {
  convertEnum,
  convertStatus,
  propertyOptionsType,
} from "../lib/property-types";
import OfferInButton from "./OfferInButton";
import Edit from "./svgs/Edit";
import { ChevDown } from "./svgs/Arrows";
import { Button } from "./Button";
import Image from "next/image";

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
                    <div className="flex items-center justify-center space-x-1">
                      <div>
                        {agent.profileImage && (
                          <div className="block rounded-full max-w-[4rem] max-h-[4rem]">
                            <img
                              src={agent.profileImage}
                              alt=""
                              className="rounded-full aspect-square"
                              // layout="responsive"
                              // width={30}
                              // height={30}
                            />
                          </div>
                        )}
                      </div>
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
                              className="flex items-center justify-between px-2 bg-off-white  space-y-2 border-t border-t-white "
                              onClick={() => setOpen(!open)}
                            >
                              <div className="flex items-center justify-start py-3 font-semibold w-full">
                                <p>{prop.address}</p>
                              </div>
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
                              <div className="bg-[rgb(247,247,247)] px-2 border-b-2 border-b-white">
                                <p>{convertEnum(prop.propertyCategory)}</p>
                              </div>
                              <div className=" bg-[rgb(247,247,247)] border-b-2 border-b-white px-2">
                                <p>{prop.price}</p>
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
