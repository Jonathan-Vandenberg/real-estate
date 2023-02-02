import ModalImage from "react-modal-image";
import {
  Property_Category,
  Image_Category,
  ImageProduct,
  Property,
  Status,
  Agent,
} from "../types";
import {
  convertEnum,
  convertResidentialTypes,
  residentialOptionType,
  statusOptionsType,
} from "../lib/property-types";
import Map from "../components/Map";
import classNames from "classnames";
import { Button } from "./Button";
import RemoveImage from "./DeleteImages";
import Image from "next/image";
import { useSession } from "next-auth/react";

export const ImageGallery = ({
  image,
  showNoImage,
  newId,
  add,
  edit,
  property,
  category,
  removeType,
  documentId,
}: {
  image: ImageProduct[] | undefined | null;
  showNoImage: boolean;
  newId: string;
  add: boolean;
  edit: boolean;
  property: Property | undefined | null;
  category: Image_Category;
  documentId: string;
  removeType: "image" | "document";
}) => {
  const { data: session } = useSession();

  return (
    <section className="pb-6">
      <div className="grid grid-cols-2 gap-2 w-full mx-auto md:grid-cols-4">
        {image?.map(
          (img, i) =>
            img.propertyId === property?.id &&
            img.imageCategory === category && (
              <div key={i} className="relative">
                <ModalImage
                  className="rounded-xl object-cover aspect-square"
                  small={img.url}
                  large={img.url}
                  hideDownload
                  hideZoom
                />
                {edit && (
                  <div className="absolute bottom-5 left-5">
                    <RemoveImage
                      url={img.url}
                      imageId={img.id}
                      removeType={removeType}
                      documentId={documentId}
                    />
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default function PropertyDetails({
  property,
  image,
  newId,
  add,
  agent,
}: {
  property: Property;
  image: ImageProduct[];
  newId: string;
  add: boolean;
  agent: Agent[];
}) {
  let heroImage;
  image?.map((i) => {
    if (i.propertyId === property.id && i.imageCategory === Image_Category.Main)
      heroImage = i.url;
  });

  return (
    <section className="relative mx-auto px-4 pt-8 w-full md:max-w-[110rem] bg-white">
      <div className="">
        <h1 className="text-xl tracking-wider font-thin text-black">
          {property?.title}
        </h1>

        <p className="text-md font-semibold lg:text-3xl">
          <i>{property?.address}</i>
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4 lg:items-start pt-4">
        <div className="lg:col-span-3">
          <div className="block">
            <img
              alt={heroImage}
              src={heroImage}
              className="aspect-video object-cover w-full h-full"
            />
          </div>

          <div className="mt-2">
            <ImageGallery
              showNoImage={false}
              image={image}
              edit={false}
              property={property}
              newId={newId}
              add={add}
              category={Image_Category.Property}
              documentId={""}
              removeType={"image"}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl lg:sticky lg:top-[calc(var(--navigation-height)+0.2rem)] bg-[rgb(251,251,251)] drop-shadow-md">
          <form className="space-y-4">
            <div>
              <legend className="text-lg font-bold">Listing Status</legend>
              <div className="space-x-2 flex items-center ">
                <span
                  className={classNames(
                    "w-3 h-3 rounded-full",
                    property?.status === Status.Sold
                      ? "bg-[rgb(249,57,57)]"
                      : property?.status === Status.OfferIn
                      ? "bg-orange-gradient"
                      : "bg-[rgb(30,212,60)]"
                  )}
                />
                <p className="text-md">
                  {statusOptionsType.map((s) => {
                    if (s.value === property?.status) return s.label;
                  })}
                </p>
              </div>
            </div>

            <fieldset>
              <legend className="text-lg font-bold">Features</legend>

              <div className="mt-2  flex flex-wrap gap-2">
                {property?.residentialFeatures?.map((feature, i) => (
                  <label
                    key={i}
                    htmlFor="material_cotton"
                    className="cursor-pointer"
                  >
                    <span className="inline-block rounded-full border border-[#d7d7d7] px-3 py-1 text-xs bg-white">
                      {feature?.residentialFeature}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="rounded border border-[rgb(215,215,215)] p-4 bg-white">
              <div className="text-sm">
                <div className="flex flex-col space-y-2">
                  <p>
                    <strong>Bedrooms:</strong> {property?.bedrooms}
                  </p>
                  <p>
                    <strong>Bathrooms:</strong> {property?.bathrooms}
                  </p>
                  <p>
                    <strong>Lot size:</strong> {property?.lotSize}
                  </p>
                </div>
              </div>
            </div>

            {agent.map(
              (a, i) =>
                a.id === property.agentId && (
                  <div
                    key={i}
                    className="flex-col items-center p-2 space-y-2 justify-center hidden md:flex"
                  >
                    {a.profileImage && (
                      <Image
                        src={a.profileImage || "/profileImagePlaceholder.png"}
                        width={50}
                        height={50}
                        alt={"Highway Properties"}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <h2 className="text-sm font-semibold hidden md:block text-center mb-1">
                        {a.firstName} {a.lastName}
                      </h2>
                      <p className="text-sm text-gray">{a.aboutMe}</p>
                    </div>
                  </div>
                )
            )}

            <div className="flex justify-center">
              <p className="text-xl font-bold">{property?.price}</p>
            </div>

            <div className="flex justify-center">
              <Button type="button" className="text-white">
                Contact
              </Button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-3">
          <div className="prose w-full text-lg [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl tracking-wider font-light pb-4">
            <p className="ml-4 md:ml-8">{property?.overview}</p>

            <h2 className="w-full md:ml-[6rem] pt-8 border-t-2 border-t-[rgb(231,229,229)]">
              Property
            </h2>

            <ul className="">
              <li className="mb-5 text-lg list-none  border-[rgb(212,210,214)] -ml-6">
                {property?.otherPropertyFeatures}
              </li>
              <li>
                <strong>Category:</strong>{" "}
                {convertEnum(property?.propertyCategory)}
              </li>
              <li>
                <strong>Residential Category</strong>:{" "}
                {convertResidentialTypes(property?.residentialCategory)}
              </li>
              <li>
                <strong>Parking: </strong>
                {property?.parking}
              </li>
              <li>
                <strong>Year Built:</strong> {property?.yearBuilt}
              </li>
            </ul>
          </div>

          <div className="prose w-full text-lg [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl tracking-wider font-light pb-4">
            <h2 className="w-full md:ml-[6rem] pt-8 border-t-2 border-t-[rgb(231,229,229)]">
              Interior
            </h2>

            <ul className="">
              <li className="mb-5 text-lg list-none -ml-6">
                {property?.interior}
              </li>
              <li>
                <strong>Flooring:</strong> {property?.flooring}
              </li>
              <li>
                <strong>Cooling:</strong> {property?.cooling}
              </li>
              <li>
                <strong>Heating:</strong> {property?.heating}
              </li>
              <li>
                <strong>Appliances:</strong> {property?.appliances}
              </li>
              <li>
                <strong>Other:</strong> {property?.otherInteriorFeatures}
              </li>
            </ul>
          </div>

          <div className="prose w-full text-lg [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl tracking-wider font-light pb-4">
            <h2 className="w-full md:ml-[6rem] pt-8 border-t-2 border-t-[rgb(231,229,229)]">
              Surroundings
            </h2>

            <ul className="">
              <li>
                <strong>Suburbs:</strong> {property?.surroundingSuburbs}
              </li>
              <li>
                <strong>Schools:</strong> {property?.schools}
              </li>
              <li>
                <strong>Distance to nearest school:</strong>{" "}
                {property?.distanceToNearestSchool}
              </li>
              <li>
                <strong>NightLifeIcon:</strong> {property?.nightlife}
              </li>
              <li>
                <strong>ShoppingIcon:</strong> {property?.shopping}
              </li>
              <li>
                <strong>Childertainment:</strong> {property?.forKids}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-10 rounded-lg pb-9">
        <Map />
      </div>
    </section>
  );
}
