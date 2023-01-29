import React, { useEffect, useState } from "react";
import { Roles, useAddAgentMutation } from "../types";
import { Button } from "./Button";
import { useSession } from "next-auth/react";
import AddRole from "./AddRole";
import { AugmentedAIRuntime } from "aws-sdk";
import { useAppSelector } from "../redux-hooks/hooks";

export default function AddAgentForm({
  user,
  onClick,
}: {
  user: any;
  onClick: () => void;
}) {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const { agentId } = useAppSelector((state) => state.agentId);

  const [addAgent, { loading, error }] = useAddAgentMutation();
  const [role, setRole] = useState<Roles>(Roles.Agent);

  useEffect(() => {
    async function userId() {
      await user.map((u: any) => {
        if (u.email === email) {
          setUserId(u.id), setProfileImage(u.image);
        }
      });
    }
    userId();
  }, [email]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const variables = {
        input: {
          id: agentId,
          userId: userId,
          email: email,
          roles: role,
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
          profileImage: profileImage,
        },
      };
      addAgent({ variables });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="[&_label]:text-md [&_label]:p-3 flex flex-col items-center justify-center space-y-2 [&_input]:text-md my-6"
    >
      <h2 className="text-2xl tracking-widest font-light mb-3">
        Add New Staff
      </h2>
      <div className="text-md space-y-1 text-[rgb(222,70,70)] py-3 px-6 border border-[rgb(224,42,42)]">
        <p>* To add staff, they have to have already logged in.</p>
        <p>
          * The email field in this form must match the email which they logged
          in with.
        </p>
        <p>
          * If they logged in with the facebook button, it will be the same
          email connected to their facebook.
        </p>
      </div>
      <div className="grid grid-cols2">
        <label className="font-bold" htmlFor="phone-number ">
          Email{" "}
          <i className="text-gray font-light">
            (The same email they used to log in)
          </i>
        </label>
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-off-white rounded-lg  p-3"
          value={email}
        />
        <p className="text-md p-3 font-bold mt-4">Role</p>
        <div className="bg-off-white rounded-lg">
          <AddRole
            className="bg-gray"
            value={undefined}
            selectedRole={role}
            onRoleChange={(event) => setRole(event.target.value)}
          />
        </div>
      </div>

      <div className="space-x-3 flex items-center justify-center pt-6">
        <Button
          variant="secondary"
          type="submit"
          className="text-md text-white "
          onClick={onClick}
        >
          Cancel
        </Button>
        <Button type="submit" className="text-md text-white ">
          {error ? `${error}` : loading ? "Adding Agent " : "Add Agent"}
        </Button>
      </div>
    </form>
  );
}
