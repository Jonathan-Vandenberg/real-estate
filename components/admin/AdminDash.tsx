import Link from "next/link";
import { useState } from "react";
import { Agent, ImageProduct, OfferIn, Property } from "../../types";
import JokeCard from "../global/JokeCard";
import User from "../svgs/User";
import AdminListings from "./AdminListings";
import AdminUsers from "./AdminUsers";
import UserSettings from "./UserSettings";

interface IDash {
  property: Property[] | null | undefined;
  image: ImageProduct[] | null | undefined;
  agents: Agent[] | null | undefined;
  user: any[] | null | undefined;
  role: string | null | undefined;
}

export default function AdminDash({
  property,
  image,
  agents,
  user,
  role,
}: IDash) {
  const [feelGood, setFeelGood] = useState(false);
  const [listings, setListings] = useState(true);
  const [users, setUsers] = useState(false);
  const [showEditUserProfile, setShowEditUserProfile] = useState(false);
  const [showAddAgent, setShowAddAgent] = useState(false);

  return (
    <div className="flex bg-white-off-white w-full min-h-[calc(100vh_-_var(--navigation-height))]">
      <div className="flex flex-col max-h-[calc(100vh_-_var(--navigation-height))] p-3 w-[5rem]  md:w-[20rem] bg-white sticky top-navigation-height border-r-off-white border-r">
        <div className="space-y-3">
          <div className="h-auto">
            <ul className="pb-4 space-y-6 md:space-y-1 text-sm flex flex-col items-center justify-center md:items-start">
              <li className="rounded-md md:hover:bg-off-white transition duration-150 w-full ease-in-out">
                <div
                  onClick={() => {
                    setUsers(false),
                      setListings(true),
                      setShowEditUserProfile(false);
                  }}
                  className="flex items-center md:p-2 space-x-3 rounded-md "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current dark:text-gray-400"
                  >
                    <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                  </svg>
                  <span className="hidden md:block cursor-default">
                    My Listings
                  </span>
                </div>
              </li>
              {role === "ADMIN" && (
                <li className="rounded-md md:hover:bg-off-white transition duration-150 w-full ease-in-out">
                  <div
                    className="flex items-center md:p-2 space-x-3 rounded-md "
                    onClick={() => {
                      setUsers(false),
                        setListings(false),
                        setShowEditUserProfile(false);
                      setUsers(true);
                    }}
                  >
                    <User className="w-6 h-6 text-black" />
                    <span className="hidden md:block cursor-default">
                      Agents
                    </span>
                  </div>
                </li>
              )}
              <li className="rounded-md md:hover:bg-off-white transition duration-150 w-full ease-in-out">
                <div
                  onClick={() => {
                    setShowEditUserProfile(true),
                      setUsers(false),
                      setListings(false);
                  }}
                  className="flex items-center md:p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current dark:text-gray-400"
                  >
                    <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                    <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                  </svg>
                  <span className="hidden md:block cursor-default">
                    Profile
                  </span>
                </div>
              </li>
              <li className="rounded-md md:hover:bg-off-white transition duration-150 w-full ease-in-out">
                <Link href="/">
                  <a>
                    <div className="flex items-center md:p-2 space-x-3 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current dark:text-gray-400"
                      >
                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                        <rect width="32" height="64" x="256" y="232"></rect>
                      </svg>
                      <span className="hidden md:block cursor-default">
                        Logout
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {listings && <AdminListings property={property} image={image} />}
      {showEditUserProfile && (
        <UserSettings
          agents={agents}
          onCancel={() => {
            setShowEditUserProfile(true),
              setUsers(false),
              setListings(false),
              setShowAddAgent(false);
          }}
        />
      )}
      {users && <AdminUsers property={property} agents={agents} user={user} />}
    </div>
  );
}
