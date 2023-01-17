import ModalImage from "react-modal-image";
import { IMAGE_CATEGORY, Image, Property, STATUS } from "@prisma/client";
import { statusOptionsType } from "../lib/property-types";
import Map from "../components/Map";

export const ImageGallery = ({
  image,
  showNoImage,
  newId,
  add,
  property,
  category,
}: {
  image: Image[] | undefined | null;
  showNoImage: boolean;
  newId: string;
  add: boolean;
  property: Property | undefined | null;
  category: IMAGE_CATEGORY;
}) => {
  return (
    <section className="pb-6">
      <div className="grid grid-cols-2 gap-2 w-full mx-auto md:grid-cols-4">
        {image?.map(
          (img, i) =>
            img.propertyId === property?.id &&
            img.imageCategory === category && (
              <ModalImage
                key={i}
                className=" rounded-xl object-cover aspect-square"
                small={img.url}
                large={img.url}
                hideDownload
                hideZoom
              />
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
}: {
  property: Property;
  image: Image[];
  newId: string;
  add: boolean;
}) {
  let heroImage;
  image?.map((i) => {
    if (i.propertyId === property.id && i.imageCategory === IMAGE_CATEGORY.MAIN)
      heroImage = i.url;
  });

  const styleStatus =
    property?.status === STATUS.FOR_SALE || STATUS.FOR_RENT
      ? "bg-[rgb(36,197,30)] w-3 h-3  rounded-full"
      : "bg-[rgb(158,21,21)] w-3 h-3  rounded-full";

  return (
    <section>
      <div className="relative mx-auto px-4 pt-8 md:max-w-[110rem] bg-white">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">{property?.title}</h1>

          <p className="text-xl tracking-wider font-light text-gray-500 mt-1">
            <i>{property?.address}</i>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4 ">
              <img
                alt={heroImage}
                src={heroImage}
                className="aspect-video object-cover w-full h-full rounded-xl"
              />
            </div>

            <div className="mt-2">
              <ImageGallery
                showNoImage={false}
                image={image}
                property={property}
                newId={newId}
                add={add}
                category={IMAGE_CATEGORY.SUBMAIN}
              />
            </div>
          </div>

          <div className="border-black border-[0.1rem] mt-4 p-3 rounded-xl lg:sticky lg:top-[calc(var(--navigation-height)+0.1rem)]">
            <form className="space-y-4 lg:pt-8">
              <div>
                <legend className="text-lg font-bold">Listing Status</legend>

                <div className="space-x-2 flex items-center ">
                  <span className={styleStatus} />
                  <p className="text-md">
                    {statusOptionsType.map((s) => {
                      if (s.value === property?.status) return s.label;
                    })}
                  </p>
                </div>
              </div>

              <fieldset>
                <legend className="text-lg font-bold">Features</legend>

                <div className="mt-2 flex gap-1">
                  <label htmlFor="material_cotton" className="cursor-pointer">
                    <input
                      type="radio"
                      id="material_cotton"
                      name="material"
                      className="peer sr-only"
                      checked
                    />

                    <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                      Pool
                    </span>
                  </label>

                  <label htmlFor="material_wool" className="cursor-pointer">
                    <input
                      type="radio"
                      id="material_wool"
                      name="material"
                      className="peer sr-only"
                      checked
                    />

                    <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                      Jacuzzi
                    </span>
                  </label>
                </div>
              </fieldset>

              <div className="rounded border bg-gray-100 p-4">
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

              <div>
                <p className="text-xl font-bold">{property?.price}</p>
              </div>

              <button
                type="submit"
                className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Add to cart
              </button>

              <button
                type="button"
                className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Contact
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="prose w-full text-lg [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl tracking-wider font-light">
              <p>{property?.overview}</p>

              <h2 className="w-full pt-8 border-t-2 border-t-[rgb(231,229,229)]">
                Property
              </h2>

              <ul className="list-none -ml-5 font-light">
                <li className="mb-5 text-lg  border-[rgb(212,210,214)]">
                  {property?.otherPropertyFeatures}
                </li>
                <li>
                  <strong>Category:</strong> {property?.propertyCategory}
                </li>
                <li>
                  <strong>Residential Category</strong>:{" "}
                  {property?.residentialCategory}
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

            <div className="pt-6">
              <ImageGallery
                showNoImage={false}
                image={image}
                property={property}
                newId={newId}
                add={add}
                category={IMAGE_CATEGORY.PROPERTY}
              />
            </div>
            <div className="prose w-full text-lg [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl tracking-wider font-light">
              <h2 className="w-full pt-8 border-t-2 border-t-[rgb(231,229,229)]">
                Interior
              </h2>

              <ul className="list-none -ml-5 font-light">
                <li className="mb-5 text-lg">{property?.interior}</li>
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
            <div className="pt-6">
              <ImageGallery
                showNoImage={false}
                image={image}
                property={property}
                newId={newId}
                add={add}
                category={IMAGE_CATEGORY.INTERIOR}
              />
            </div>

            <div className="prose w-full text-lg [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl tracking-wider font-light">
              <h2 className="w-full pt-8 border-t-2 border-t-[rgb(231,229,229)] font-light">
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

            <div className="pt-6">
              <ImageGallery
                showNoImage={false}
                image={image}
                property={property}
                newId={newId}
                add={add}
                category={IMAGE_CATEGORY.SURROUNDINGS}
              />
            </div>
          </div>
        </div>
        <div className="pt-10 rounded-lg">
          <Map />
        </div>
      </div>
    </section>
  );
}
