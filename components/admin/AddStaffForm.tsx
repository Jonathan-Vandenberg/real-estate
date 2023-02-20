import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux-hooks/hooks";
import { Roles, useAddAgentMutation } from "../../types";
import { Button } from "../global/Button";
import AddRole from "./AddRole";

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

  console.log(user);

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
      <h2 className="text-xl md:text-2xl font-light tracking-widest py-[2.4rem] ">
        Add New Staff
      </h2>
      <div className="">
        <div className="p-3">
          <label className="-ml-3 font-bold" htmlFor="email">
            Email{"  "}
            <i className="text-gray font-light">
              (Same email they logged in with)
            </i>
          </label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-off-white rounded-lg p-3 w-full mt-2"
            value={email}
          />
        </div>
        <p className="text-md p-3 font-bold">Role</p>
        <AddRole
          value={undefined}
          selectedRole={role}
          onRoleChange={(event) => setRole(event.target.value)}
        />
      </div>

      <div className="space-x-3 flex items-center justify-center pt-9">
        <Button
          variant="secondary"
          type="button"
          className="text-md text-white "
          onClick={onClick}
        >
          Cancel
        </Button>
        <Button type="submit" className="text-md text-white ">
          {loading ? "Adding Staff " : "Add Staff"}
        </Button>
      </div>
    </form>
  );
}
