import classNames from "classnames";
import { useState } from "react";
import { convertEnum, convertStatus } from "../lib/property-types";
import { ImageProduct, Property, Status } from "../types";
import AddPropertyForm from "./AddPropertyForm";
import Edit from "./svgs/Edit";
import Plus from "./svgs/Plus";
import Todo from "./svgs/Todo";
import OfferInButton from "./OfferInButton";
import { useAppSelector } from "../redux-hooks/hooks";
import AdminListingsMobile from "./AdminListingsMobile";

export default function AdminListings({
  property,
  image,
}: {
  property: Property[];
  image: ImageProduct[];
}) {
  const [showAddListing, setShowAddListing] = useState(false);
  const [showEditListing, setShowEditListing] = useState(false);
  const [listing, setListing] = useState<Property>();
  const [selectedListing, setSelectedListing] = useState(false);

  const { agentId } = useAppSelector((state) => state.agentId);

  const editForm = (listing) => setListing(listing);

  return (
    <div className="w-full mx-auto bg-white">
      <div
        className={classNames(
          "flex items-center justify-between px-2 w-full",
          showAddListing && "flex-col"
        )}
      >
        {!showAddListing && !showEditListing && (
          <h2 className="ml-5 text-xl md:text-2xl font-light tracking-widest py-[2.4rem]">
            Listings
          </h2>
        )}

        {!showAddListing && !showEditListing && (
          <div
            onClick={() => {
              setShowAddListing(true), setShowEditListing(false);
            }}
          >
            <Plus className="w-10 h-10 text-[rgb(50,188,62)]" />
          </div>
        )}

        {showAddListing && (
          <h2 className="text-xl md:text-2xl font-light tracking-widest py-[2.4rem] ">
            New Listing
          </h2>
        )}
      </div>

      {showAddListing && (
        <div className="px-2">
          <AddPropertyForm
            image={image}
            property={listing}
            add={true}
            edit={false}
            onCancel={() => setShowAddListing(false)}
          />
        </div>
      )}

      <div className="md:hidden">
        <AdminListingsMobile
          showEditListing={false}
          property={property}
          onClick={() => {}}
        />
      </div>

      <div className="overflow-x-auto hidden md:block">
        {!showAddListing && !showEditListing && (
          <table className="min-w-full text-xs">
            <colgroup>
              {!showAddListing && (
                <>
                  <col className="w-auto" />
                  <col className="w-auto" />
                  <col className="w-auto" />
                  <col className="w-auto" />
                  <col className="w-auto" />
                  <col className="w-auto" />
                  <col className="w-auto" />
                </>
              )}
            </colgroup>

            <thead className="w-auto border-y-2 border-y-off-white">
              <tr className="text-left">
                {!showAddListing && (
                  <>
                    <th className="p-3">Edit</th>
                    <th className="p-3">Todo</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">Property</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Status</th>
                    <th className="p-3"></th>
                  </>
                )}
              </tr>
            </thead>

            <tbody>
              {property.map(
                (listing, i) =>
                  listing.agentId === agentId && (
                    <tr key={i} className="border-b-2 border-b-off-white">
                      <td className="p-3">
                        <div
                          onClick={() => {
                            editForm(listing),
                              setShowEditListing(!showEditListing),
                              setShowAddListing(false);
                            setSelectedListing(!selectedListing);
                          }}
                        >
                          <Edit className="w-5 h-5" />
                        </div>
                      </td>
                      <td className="p-3">
                        <Todo className="h-6 w-6" />
                      </td>
                      <td className="p-3">
                        <p className="font-bold whitespace-nowrap">
                          {listing.address}
                        </p>
                      </td>
                      <td className="p-3">
                        <p>{convertEnum(listing.propertyCategory)}</p>
                      </td>
                      <td className="p-3">
                        <p className="whitespace-nowrap">{listing.price}</p>
                      </td>
                      <td className="p-3">
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
                      </td>
                      <td className="p-3">
                        {listing.status === Status.ForRent && (
                          <OfferInButton
                            className="text-white text-xs px-3 py-1 rounded-full bg-green-gradient whitespace-nowrap font-semibold"
                            propertyId={listing.id}
                          />
                        )}
                        {listing.status === Status.ForSale && (
                          <OfferInButton
                            className="text-white text-xs px-3 py-1 rounded-full bg-green-gradient whitespace-nowrap font-semibold"
                            propertyId={listing.id}
                          />
                        )}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        )}
        {showEditListing && (
          <div className="flex-col flex items-center justify-center space-x-2 py-8">
            <h2 className="text-3xl md:text-5xl font-extralight leading-tight md:pb-3">
              Editing
            </h2>
            <h2 className="text-lg md:text-2xl font-semibold">
              {listing?.address}
            </h2>
          </div>
        )}
        {listing && showEditListing && (
          <div className="px-4">
            <AddPropertyForm
              property={listing}
              image={image}
              add={false}
              edit={true}
              onCancel={() => {
                setShowEditListing(false), setShowAddListing(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
