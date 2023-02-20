import React, { useEffect, useState } from "react";
import { Agent, Image_Category, useUpdateAgentMutation } from "../../types";
import { Button } from "../global/Button";
import ModalImage from "react-modal-image";
import { useSession } from "next-auth/react";
import UploadImage from "../aws/UploadImage";
import { useAppSelector } from "../../redux-hooks/hooks";
import RemoveImage from "../aws/DeleteImages";

export default function AddAgentForm({
  onCancel,
  agents,
}: {
  agents: Agent[] | null | undefined;
  onCancel: () => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const { userId } = useAppSelector((state) => state.userId);
  const { agentId } = useAppSelector((state) => state.agentId);

  useEffect(() => {
    if (session?.user?.email) {
      agents &&
        agents.map((agent) => {
          if (agent.email === session?.user?.email) {
            setFirstName(agent!.firstName! || "");
            setLastName(agent!.lastName! || "");
            setAddress(agent!.address! || "");
            setPhoneNumber(agent!.phoneNumber! || "");
            setAboutMe(agent!.aboutMe! || "");
            setProfileImage(agent!.profileImage! || "");
          }
        });
    }
  }, []);

  const [updateAgent, { loading, error }] = useUpdateAgentMutation();

  const { data: session } = useSession();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const variables = {
        input: {
          id: agentId,
          userId: userId,
          updatedAt: new Date().toString(),
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
    <div className="flex flex-col items-center justify-center w-full h-full bg-off-white">
      <div className="flex items-start space-y-1 justify-center flex-col py-8 text-md ">
        <div>
          {profileImage && (
            <div className=" rounded-full flex items-center justify-center">
              <div className="relative max-w-[16rem]">
                <ModalImage
                  className="rounded-full object-cover aspect-square"
                  small={profileImage}
                  large={profileImage}
                  hideDownload
                  hideZoom
                />
                {profileImage !== "/profileImagePlaceholder.png" && (
                  <div className="absolute bottom-0 right-0">
                    <div className="flex items-center justify-center space-x-3">
                      <RemoveImage
                        url={profileImage}
                        imageId={""}
                        removeType={"profile-image"}
                        blogPostId=""
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {profileImage === "/profileImagePlaceholder.png" && (
            <div className="">
              <UploadImage
                category={Image_Category.Main}
                propertyId={""}
                uploadType={"profile-image"}
                offerInId={""}
                blogPostId=""
              />
            </div>
          )}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="[&_label]:text-md bg-white w-full [&_label]:p-1 flex flex-col items-center justify-center space-y-2 md:space-y-6 [&_input]:text-md p-4 md:p-0"
      >
        <h2 className="text-2xl tracking-widest font-light mb-3 pt-8">
          Edit Profile
        </h2>

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

        <div className="flex flex-col items-start justify-center md:grid md:grid-cols-2 w-full md:w-auto">
          <label className="font-bold md:ml-2" htmlFor="about">
            About Me
          </label>
          <textarea
            rows={6}
            name="about"
            onChange={(e) => setAboutMe(e.target.value)}
            className="bg-off-white rounded-lg w-full md:w-auto p-3 text-md resize-none"
            value={aboutMe}
          />
        </div>

        <div className="space-x-3 flex items-center justify-center pt-6 pb-8">
          <Button
            variant="secondary"
            type="submit"
            className="text-md text-white "
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" className="text-md text-white ">
            {error ? `${error}` : loading ? "Updating Agent " : "Update"}
          </Button>
        </div>
      </form>
    </div>
  );
}
