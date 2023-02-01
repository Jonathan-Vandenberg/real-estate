import { useState } from "react";
import { Agent, Property } from "../types";
import AddAgentForm from "./AddStaffForm";
import AdminUsersDesktop from "./AdminUsersDesktop";
import AdminUsersMobile from "./AdminUsersMobile";
import Plus from "./svgs/Plus";

interface IAdminUsers {
  property: Property[];
  agents: Agent[];
  user: any[];
}

export default function AdminUsers({ property, agents, user }: IAdminUsers) {
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [showAgents, setShowAgents] = useState(true);
  return (
    <div className="flex flex-col items-center justify-start w-full bg-white">
      {showAgents && (
        <>
          <div className="flex items-center justify-between w-full px-2 border-b border-b-off-white">
            <h2 className="text-xl md:text-2xl font-light tracking-widest py-[2.4rem] ml-5">
              Agents
            </h2>
            <div
              onClick={() => {
                setShowAddAgent(true);
                setShowAgents(false);
              }}
            >
              <Plus className="w-10 h-10 text-[rgb(50,188,62)]" />
            </div>
          </div>
          <AdminUsersMobile
            agents={agents}
            property={property}
            showEditListing
            onClick={() => {}}
          />
          <AdminUsersDesktop property={property} agents={agents} />
        </>
      )}
      {showAddAgent && (
        <AddAgentForm
          user={user}
          onClick={() => {
            setShowAddAgent(false), setShowAgents(true);
          }}
        />
      )}
    </div>
  );
}
