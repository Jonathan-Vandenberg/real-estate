import classNames from "classnames";
import React from "react";
import { convertStatus } from "../../lib/property-types";
import Message from "../svgs/Message";
import { Agent, Property, Status } from "../../types";

interface IProps {
  property: Property[] | null | undefined;
  agents: Agent[] | null | undefined;
}

export default function AdminUsersDesktop({ property, agents }: IProps) {
  function hasFlag(prop: Property) {
    let hasFlag: boolean;

    if (
      prop?.offerIn?.ficaDocs?.flag ||
      prop?.offerIn?.elecCompCompany?.flag ||
      prop?.offerIn?.intermologist?.flag ||
      prop?.offerIn?.gasCompliance?.flag ||
      prop?.offerIn?.waterCert?.flag ||
      prop?.offerIn?.offerAccepted?.flag ||
      prop?.offerIn?.bankInspection?.flag ||
      prop?.offerIn?.conveyancer?.flag ||
      prop?.offerIn?.mortgageOriginator?.flag ||
      prop?.offerIn?.electricFence?.flag ||
      prop?.offerIn?.alien?.flag
    ) {
      hasFlag = true;
    } else {
      hasFlag = false;
    }
    return hasFlag;
  }

  return (
    <div className="hidden md:block w-full mx-auto bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
          </colgroup>
          <thead className="w-auto border-y-2 border-y-off-white">
            <tr className="text-left">
              <th className="p-3"></th>
              <th className="p-3"></th>
              <th className="p-3">Listings</th>
              <th className="p-3">status</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
            </tr>
          </thead>

          <tbody>
            {agents &&
              agents.map((agent, i) => (
                <tr key={i} className="border-b-2 border-b-off-white">
                  <td className="p-3">
                    <div className="rounded-full w-12 h-12 overflow-hidden">
                      {agent.profileImage && (
                        <img
                          src={agent.profileImage}
                          alt="Agent Image"
                          className="font-bold"
                        />
                      )}
                    </div>
                  </td>
                  <td className="p-3">
                    <p className="whitespace-nowrap font-semibold">
                      {agent.firstName} {agent.lastName}
                    </p>
                  </td>
                  <td className="p-3">
                    <div className="whitespace-nowrap space-y-3">
                      {property &&
                        property.map(
                          (listing, i) =>
                            listing.agentId === agent.id && (
                              <div className="" key={i}>
                                <p>{listing.address}</p>
                              </div>
                            )
                        )}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="whitespace-nowrap space-y-3">
                      {property &&
                        property.map(
                          (listing, i) =>
                            listing.agentId === agent.id && (
                              <div className="" key={i}>
                                <span
                                  className={classNames(
                                    "px-3 py-1 font-semibold rounded-full text-white",
                                    listing.status === "SOLD"
                                      ? "bg-primary-gradient"
                                      : listing.status === "OFFER_IN"
                                      ? "bg-primary-gradient"
                                      : "bg-white text-black border-[1px]"
                                  )}
                                >
                                  <span className="whitespace-nowrap">
                                    {listing.status === Status.OfferIn ? (
                                      <a
                                        className="hover:cursor-pointer"
                                        href={`/offer-in/${listing.id}`}
                                      >
                                        {convertStatus(listing.status)}
                                      </a>
                                    ) : (
                                      convertStatus(listing.status)
                                    )}
                                  </span>
                                </span>
                              </div>
                            )
                        )}
                    </div>
                  </td>
                  <td className="p-3">
                    <p className="whitespace-nowrap">{agent.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{agent.phoneNumber}</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
