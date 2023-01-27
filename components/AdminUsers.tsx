import React, { useState } from "react";
import classNames from "classnames";
import AddAgentForm from "./AddAgentForm";
import { Image, Property, Agent, Status } from "../types";
import Plus from "./svgs/Plus";
import { convertStatus } from "../lib/property-types";
import Message from "./svgs/Message";

interface IAdminUsers {
  property: Property[];
  image: Image[];
  agents: Agent[];
  user: any[];
}

export default function AdminUsers({
  property,
  image,
  agents,
  user,
}: IAdminUsers) {
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [showEditListing, setShowEditListing] = useState(false);

  return (
    <div className="w-full p-2 mx-auto sm:p-4 bg-white border-l-2 border-l-off-white">
      <div
        className={classNames(
          "flex items-center justify-between px-12 mb-4 w-full",
          showAddAgent && "flex-col"
        )}
      >
        {!showAddAgent && !showEditListing && (
          <h2 className="text-2xl font-semibold leading-tight">Agents</h2>
        )}

        {showAddAgent && (
          <h2 className="text-2xl font-semibold leading-tight">New Agent</h2>
        )}

        <div
          className=""
          onClick={() => {
            setShowAddAgent(true), setShowEditListing(false);
          }}
        >
          {!showAddAgent && (
            <Plus className="w-10 h-10 text-[rgb(50,188,62)]" />
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
            <col className="w-auto" />
          </colgroup>
          <thead className="w-auto border-y-2 border-y-off-white">
            <tr className="text-left">
              <th className="p-3">Message</th>
              <th className="p-3">Picture</th>
              <th className="p-3">Name</th>
              <th className="p-3">Listings</th>
              <th className="p-3">status</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent, i) => (
              <tr key={i} className="border-b-2 border-b-off-white">
                <td className="p-3">
                  <Message className="w-7 h-7" />
                </td>
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
                  <p className="whitespace-nowrap">{agent.firstName}</p>
                </td>
                <td className="p-3">
                  <div className="whitespace-nowrap space-y-3">
                    {property.map(
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
                    {property.map(
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
        {showAddAgent && <AddAgentForm user={user} />}
      </div>
    </div>
  );
}
