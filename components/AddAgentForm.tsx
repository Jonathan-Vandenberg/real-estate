import React, { useEffect, useState } from "react";
import { useAddAgentMutation } from "../types";
import { Button } from "./Button";
import { useSession } from "next-auth/react";

export default function AddAgentForm({ user }: { user: any }) {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    async function userId() {
      if (session?.user) {
        await user.map((u: any) => {
          if (u.email === session?.user?.email) {
            setUserId(u.id), setProfileImage(u.image), setEmail(u.email);
          }
        });
      }
    }

    userId();
  }, []);

  const [addAgent, { loading, error }] = useAddAgentMutation();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const variables = {
        input: {
          userId: userId,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          createdAt: new Date().toString(),
          updatedAt: new Date().toString(),
          address: address,
          phoneNumber: phoneNumber,
          aboutMe: aboutMe,
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
      className="[&_label]:text-md [&_label]:p-3 flex flex-col items-center justify-center space-y-3 [&_input]:text-md"
    >
      <label htmlFor="first-name">First Name</label>
      <input
        name="first-name"
        onChange={(e) => setFirstName(e.target.value)}
        className="bg-off-white rounded-lg w-[40rem] p-3"
        value={firstName}
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        name="last-name"
        onChange={(e) => setLastName(e.target.value)}
        className="bg-off-white rounded-lg w-[40rem] p-3"
        value={lastName}
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        className="bg-off-white rounded-lg w-[40rem] p-3"
        value={password}
      />

      <label htmlFor="phone-number">Phone</label>
      <input
        name="phone-number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="bg-off-white rounded-lg w-[40rem] p-3"
        value={phoneNumber}
      />

      <label htmlFor="about-me">About me </label>
      <input
        name="about-me"
        onChange={(e) => setAboutMe(e.target.value)}
        className="bg-off-white rounded-lg w-[40rem] p-3"
        value={aboutMe}
      />

      <Button type="submit" className="text-md text-white ">
        {error ? `${error}` : loading ? "Adding Agent " : "Add Agent"}
      </Button>
    </form>
  );
}
