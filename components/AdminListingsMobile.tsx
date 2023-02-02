import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { ImageProduct, Property, Status } from "../types";
import { useAppSelector } from "../redux-hooks/hooks";
import classNames from "classnames";
import { convertEnum } from "../lib/property-types";
import OfferInButton from "./OfferInButton";
import Edit from "./svgs/Edit";
import { ChevDown } from "./svgs/Arrows";
import { Button } from "./Button";
import AddPropertyForm from "./AddPropertyForm";

interface IProps {
  property: Property[];
  onShowEditListing: () => void;
  image: ImageProduct[];
}

export default function AdminListingsMobile({
  property,
  image,
  onShowEditListing,
}: IProps) {
  const { agentId } = useAppSelector((state) => state.agentId);
  const [open, setOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [listing, setListing] = useState<Property>();

  const editForm = (listing) => setListing(listing);

  return (
    <div className="border-b border-b-off-white">
      {property &&
        property.map((prop, i) => {
          if (prop.agentId === agentId)
            return (
              <>
                {!showEdit && (
                  <div className="[&_p]:text-xs [&_p]:p-1 space-y-3" key={i}>
                    <Collapsible
                      transitionTime={200}
                      trigger={
                        <div
                          className="flex items-center justify-between px-2  space-y-2 border-t border-t-off-white "
                          onClick={() => setOpen(!open)}
                        >
                          <div className="flex items-center justify-start py-3 font-semibold">
                            <p>{prop.address}</p>
                          </div>
                          <div
                            className={classNames("transition", open ? "" : "")}
                          >
                            <ChevDown className="w-6 h-6" />
                          </div>
                        </div>
                      }
                    >
                      <div className="bg-[rgb(247,247,247)]">
                        <div className="flex items-center justify-between px-2 py-4  border-t border-t-off-white bg-[rgb(247,247,247)]">
                          <div
                            className="flex items-center justify-center space-x-1"
                            onClick={() => {
                              setShowEdit(true), editForm(prop);
                            }}
                          >
                            <Edit className="w-6 h-6" />
                            <p className="font-semibold">Edit Listing</p>
                          </div>
                          {prop.status === Status.OfferIn && (
                            <Button
                              size="small"
                              className="text-white font-semibold"
                            >
                              <a href={`/offer-in/${prop.id}`}>
                                Offer-In Workspace
                              </a>
                            </Button>
                          )}
                          {prop.status === Status.ForRent && (
                            <div className="">
                              <OfferInButton
                                className="text-white bg-green-gradient whitespace-nowrap"
                                propertyId={prop.id}
                              />
                            </div>
                          )}
                          {prop.status === Status.ForSale && (
                            <div className="">
                              <OfferInButton
                                className="text-white bg-green-gradient whitespace-nowrap"
                                propertyId={prop.id}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border-t-2 border-t-white">
                        <div className="bg-[rgb(247,247,247)] px-2 border-b-2 border-b-white">
                          <p>{convertEnum(prop.propertyCategory)}</p>
                        </div>
                        <div className=" bg-[rgb(247,247,247)] border-b-2 border-b-white px-2">
                          <p>{prop.price}</p>
                        </div>
                        <div className="bg-[rgb(247,247,247)] flex items-center justify-start space-x-2 px-3">
                          <span
                            className={classNames(
                              "h-3 w-3 rounded-full",
                              prop.featured
                                ? "bg-[rgb(1,174,33)]"
                                : "bg-[rgb(145,145,145)]"
                            )}
                          />
                          <p>Featured</p>
                        </div>
                      </div>
                    </Collapsible>
                  </div>
                )}
              </>
            );
        })}
      {showEdit && (
        <div className="px-3">
          <AddPropertyForm
            property={listing}
            image={image}
            add={false}
            edit={true}
            onCancel={() => setShowEdit(false)}
          />
        </div>
      )}
    </div>
  );
}
