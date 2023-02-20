import classNames from "classnames";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { convertEnum } from "../../lib/property-types";
import { useAppSelector } from "../../redux-hooks/hooks";
import { ImageProduct, Property, Status } from "../../types";
import { Button } from "../global/Button";
import OfferInButton from "../offer-in/sales/OfferInButton";
import AddPropertyForm from "../property/AddPropertyForm";
import { ChevDown } from "../svgs/Arrows";
import Edit from "../svgs/Edit";

interface IProps {
  property: Property[] | null | undefined;
  onShowEditListing: () => void;
  image: ImageProduct[] | null | undefined;
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
        property.map((prop, i) => (
          <>
            {prop.agentId === agentId && !showEdit && (
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
                      <div className={classNames("transition", open ? "" : "")}>
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
        ))}
      {showEdit && (
        <div className="flex-col flex items-center justify-center space-x-2 py-8 border-b-2 border-b-off-white">
          <h2 className="text-3xl md:text-5xl font-extralight leading-tight md:pb-3">
            Editing
          </h2>
          <h2 className="text-lg md:text-2xl font-semibold">
            {listing?.address}
          </h2>
        </div>
      )}
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
