import React, { useEffect, useState } from "react";
import { Agent, Roles, useUpdateAgentMutation } from "../types";
import { Button } from "./Button";
import AddRole from "./AddRole";
import { useSession } from "next-auth/react";

export default function AddAgentForm({
  user,
  agentId,
  onCancel,
}: {
  user: any;
  onCancel: () => void;
  agentId: string;
}) {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const [updateAgent, { loading, error }] = useUpdateAgentMutation();

  const { data: session } = useSession();

  useEffect(() => {
    async function userId() {
      if (session?.user) {
        await user.map((u: any) => {
          if (u.email === session?.user?.email) {
            setUserId(u.id);
          }
        });
      }
    }
    userId();
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const variables = {
        input: {
          id: agentId,
          userId: userId,
          updatedAt: new Date().toString(),
          profileImage: profileImage,
          firstName: firstName,
          lastName: lastName,
          address: address,
          phoneNumber: phoneNumber,
          aboutMe: aboutMe,
        },
      };
      updateAgent({ variables });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="[&_label]:text-md bg-white w-full [&_label]:p-3 flex flex-col items-center justify-center space-y-2 md:space-y-6 [&_input]:text-md p-4 md:p-0"
    >
      <h2 className="text-2xl tracking-widest font-light mb-3">Edit Profile</h2>

      <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 w-full md:w-auto">
        <label className="font-bold" htmlFor="first-name">
          First name
        </label>
        <input
          name="Phone"
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-off-white rounded-lg w-full md:w-auto  p-3"
          value={firstName}
        />
      </div>

      <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 w-full md:w-auto ">
        <label className="font-bold" htmlFor="last-name">
          Last name
        </label>
        <input
          name="last-name"
          onChange={(e) => setLastName(e.target.value)}
          className="bg-off-white rounded-lg w-full md:w-auto  p-3"
          value={lastName}
        />
      </div>

      <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 w-full md:w-auto ">
        <label className="font-bold" htmlFor="address">
          Address
        </label>
        <input
          name="Address"
          onChange={(e) => setAddress(e.target.value)}
          className="bg-off-white rounded-lg w-full md:w-auto  p-3"
          value={address}
        />
      </div>

      <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 w-full md:w-auto ">
        <label className="font-bold" htmlFor="phone-number">
          Phone
        </label>
        <input
          name="Phone"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-off-white rounded-lg w-full md:w-auto  p-3"
          value={phoneNumber}
        />
      </div>

      <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 w-full md:w-auto ">
        <label className="font-bold" htmlFor="profile-image">
          Profile Image
        </label>
        <input
          name="profile image"
          onChange={(e) => setProfileImage(e.target.value)}
          className="bg-off-white rounded-lg w-full md:w-auto  p-3"
          value={profileImage}
        />
      </div>

      <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 w-full md:w-auto">
        <label className="font-bold md:ml-2" htmlFor="about">
          About Me
        </label>
        <textarea
          rows={6}
          name="about"
          onChange={(e) => setAboutMe(e.target.value)}
          className="bg-off-white rounded-lg w-full md:w-auto p-3 text-md"
          value={aboutMe}
        />
      </div>

      <div className="space-x-3 flex items-center justify-center pt-6">
        <Button
          variant="secondary"
          type="submit"
          className="text-md text-white "
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" className="text-md text-white ">
          {error ? `${error}` : loading ? "Adding Agent " : "Update"}
        </Button>
      </div>
    </form>
  );
}
