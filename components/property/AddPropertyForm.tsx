import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux-hooks/hooks";
import {
  Document_Category,
  ImageProduct,
  Image_Category,
  Property,
  Property_Category,
  Residential_Category,
  Status,
  useAddPropertyMutation,
  useUpdatePropertyMutation,
} from "../../types";
import UploadImage from "../aws/UploadImage";
import { Button } from "../global/Button";
import Switch from "../global/Switch";
import { ImageGallery } from "../property/PropertyDetails";
import RadioButtonGroup from "./RadioPropertyType";
import RadioStatus from "./RadioStatus";
import { formatMoney } from "../../lib/format-money";
import cache from "../../lib/cache";

interface IProps {
  property: Property | undefined | null;
  image: ImageProduct[] | undefined | null;
  add: boolean;
  edit: boolean;
  onCancel: () => void;
}

export default function AddPropertyForm({
  property,
  add,
  edit,
  image,
  onCancel,
}: IProps) {
  const [formSent, setFormSent] = useState(false);

  const editInterior = add ? "" : property!.interior;
  const editFeatured = add ? false : property?.featured;
  const editStatus = add ? false : property?.status;
  const editTitle = add ? "" : property!.title;
  const editOverview = add ? "" : property!.overview;
  const editAddress = add ? "" : property!.address;
  const editPrice = add ? "" : formatMoney(+property!.price);
  const editYearBuilt = add ? "" : property!.yearBuilt;
  const editHeating = add ? "" : property?.heating;
  const editCooling = add ? "" : property?.cooling;
  const editParking = add ? 0 : property!.parking;
  const editLotSize = add ? "" : property!.lotSize;
  const editOtherInteriorFeatures = add ? "" : property?.otherInteriorFeatures;
  const editSchools = add ? "" : property?.schools;
  const editDistanceToNearestSchool = add
    ? ""
    : property?.distanceToNearestSchool;
  const editShopping = add ? "" : property?.shopping;
  const editNightlife = add ? "" : property?.nightlife;
  const editForKids = add ? "" : property?.forKids;
  const editSurroundingSuburbs = add ? "" : property?.surroundingSuburbs;
  const editBedrooms = add ? 0 : property!.bedrooms;
  const editBathrooms = add ? 0 : property!.bathrooms;
  const editBasement = add ? "" : property?.basement;
  const editFlooring = add ? "" : property!.flooring;
  const editAppliances = add ? "" : property?.appliances;
  const editOtherPropertyFeatures = add ? "" : property?.otherPropertyFeatures;
  const editResidentialCategory = add ? null : property?.residentialCategory;
  const editPropertyCategory = add
    ? Property_Category.Commercial
    : property?.propertyCategory;

  const [interior, setInterior] = useState(editInterior);
  const [featured, setFeatured] = useState(editFeatured);
  const [status, setStatus] = useState(editStatus);
  const [title, setTitle] = useState(editTitle);
  const [overview, setOverview] = useState(editOverview);
  const [address, setAddress] = useState(editAddress);
  const [price, setPrice] = useState(editPrice);
  const [yearBuilt, setYearBuilt] = useState(editYearBuilt);
  const [heating, setHeating] = useState(editHeating);
  const [cooling, setCooling] = useState(editCooling);
  const [parking, setParking] = useState(editParking);
  const [lotSize, setLotSize] = useState(editLotSize);
  const [otherInteriorFeatures, setOtherInteriorFeatures] = useState(
    editOtherInteriorFeatures
  );
  const [schools, setSchools] = useState(editSchools);
  const [distanceToNearestSchool, setDistanceToNearestSchool] = useState(
    editDistanceToNearestSchool
  );
  const [shopping, setShopping] = useState(editShopping);
  const [nightlife, setNightlife] = useState(editNightlife);
  const [forKids, setForKids] = useState(editForKids);
  const [surroundingSuburbs, setSurroundingSuburbs] = useState(
    editSurroundingSuburbs
  );
  const [bedrooms, setBedrooms] = useState(editBedrooms);
  const [bathrooms, setBathrooms] = useState(editBathrooms);
  const [basement, setBasement] = useState(editBasement);
  const [flooring, setFlooring] = useState(editFlooring);
  const [appliances, setAppliances] = useState(editAppliances);
  const [otherPropertyFeatures, setOtherPropertyFeatures] = useState(
    editOtherPropertyFeatures
  );
  const [selectedResidentialCategory, setResidentialCategory] = useState(
    editResidentialCategory
  );
  const [selectedPropertyCategory, setPropertyCategory] =
    useState(editPropertyCategory);

  const [newId, setNewId] = useState("");

  const [
    addProperty,
    { loading: loadingAddProperty, error: errorAddProperty },
  ] = useAddPropertyMutation();
  const [
    updateProperty,
    { loading: loadingUpdateProperty, error: errorUpdateProperty },
  ] = useUpdatePropertyMutation();

  useEffect(() => {
    var mongoObjectId = function () {
      var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
      return (
        timestamp +
        "xxxxxxxxxxxxxxxx"
          .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
          })
          .toLowerCase()
      );
    };
    setNewId(mongoObjectId());
  }, [add]);

  const { agentId } = useAppSelector((state) => state.agentId);

  let propertyDetails = {
    variables: {
      input: {
        id: add ? newId : property!.id,
        interior: interior,
        featured: featured,
        status: status as Status,
        title: title,
        overview: overview,
        address: address,
        price: price.replace(/[^0-9.]+/g, ""),
        yearBuilt: yearBuilt,
        heating: heating,
        cooling: cooling,
        parking: parking,
        lotSize: lotSize.replace(/[^0-9.]+/g, ""),
        otherInteriorFeatures: otherInteriorFeatures,
        schools: schools,
        distanceToNearestSchool:
          distanceToNearestSchool &&
          distanceToNearestSchool.replace(/[^0-9.]+/g, ""),
        shopping: shopping,
        nightlife: nightlife,
        forKids: forKids,
        surroundingSuburbs: surroundingSuburbs,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        basement: basement,
        flooring: flooring,
        appliances: appliances,
        otherPropertyFeatures: otherPropertyFeatures,
        residentialCategory:
          selectedResidentialCategory as Residential_Category,
        propertyCategory: selectedPropertyCategory as Property_Category,
        agentId: agentId,
      },
      agentId: agentId,
    },
  };

  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    async function sendForm() {
      if (add) {
        await addProperty(propertyDetails);
      }
      if (edit) {
        updateProperty(propertyDetails);
      }

      setTimeout(() => {
        setFormSent(!formSent);
      }, 1000);
    }

    sendForm();

    // add &&
    //   setTimeout(() => {
    //     setInterior("");
    //     setFeatured(false);
    //     setOnMarket(false);
    //     setTitle("");
    //     setOverview("");
    //     setAddress("");
    //     setPrice("");
    //     setYearBuilt("");
    //     setHeating("");
    //     setCooling("");
    //     setParking(0);
    //     setLotSize("");
    //     setSchools("");
    //     setDistanceToNearestSchool("");
    //     setShopping("");
    //     setNightlife("");
    //     setForKids("");
    //     setSurroundingSuburbs("");
    //     setBedrooms(0);
    //     setBathrooms(0);
    //     setBasement("");
    //     setFlooring("");
    //     setAppliances("");
    //     setOtherInteriorFeatures("");
    //     setOtherPropertyFeatures("");
    //   }, 2000);

    setTimeout(() => {
      setFormSent(!formSent);
    }, 1000);
  };

  let mainImage;

  image?.map((img) => {
    if (
      img.propertyId === property?.id &&
      img.imageCategory === Image_Category.Main
    ) {
      mainImage = img.url;
    }
  });

  return (
    <>
      <form onSubmit={onFinish} className="space-y-1 py-4 w-full mx-auto ">
        <div className="pt-4 text-md">
          <p className="text-black font-bold">Property type</p>
          <RadioButtonGroup
            value={selectedPropertyCategory as Property_Category}
            onPropertyChange={(event: {
              target: { value: Property_Category };
            }) => {
              if (event.target.value !== ("RESIDENTIAL" as Property_Category)) {
                setPropertyCategory(event.target.value);
                setResidentialCategory(null);
              }
              setPropertyCategory(event.target.value);
            }}
            selectedPropertyCategory={
              selectedPropertyCategory as Property_Category
            }
            residentialCategory={
              selectedResidentialCategory as Residential_Category
            }
            onResidentialChange={(event: {
              target: { value: Residential_Category };
            }) => {
              setResidentialCategory(event.target.value);
            }}
          />
        </div>

        <label className="justify-center pt-4 text-md pb-4 inline-flex items-center">
          <input
            id="featured"
            type="checkbox"
            checked={featured as boolean}
            placeholder="Featured"
            onChange={(e) => setFeatured(e.target.checked)}
            className="hidden"
          />
          <label className="mr-2 text-md font-bold">Featured</label>
          <Switch
            backGround="bg-off-white"
            switchOn={featured}
            checked={featured as boolean}
            radioMode={false}
          />
        </label>

        <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold w-full text-md whitespace-nowrap">
            Listing Status
          </label>
          <RadioStatus
            value={status as Status}
            selectedStatus={status as Status}
            onStatusChange={(event: { target: { value: Status } }) =>
              setStatus(event.target.value)
            }
          />
        </div>

        {edit && (
          <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md">
            <label className="text-black font-bold">Hero Image</label>
            {mainImage ? (
              <div>
                <ImageGallery
                  add={add}
                  edit={edit}
                  newId={newId}
                  showNoImage={true}
                  image={image}
                  property={property}
                  category={Image_Category.Main}
                  removeType={"image"}
                />
              </div>
            ) : (
              <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center">
                <UploadImage
                  category={Image_Category.Main}
                  propertyId={add ? newId : property!.id}
                  uploadType={"image"}
                  offerInId=""
                  blogPostId=""
                />
              </div>
            )}
          </div>
        )}

        <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Title</label>
          <input
            required
            id="title"
            value={title as string}
            placeholder="Stunning 3 Bed Home for New Family"
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Address</label>
          <input
            required
            id="address"
            value={address as string}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        {edit && (
          <>
            <div className="pt-6">
              <ImageGallery
                add={add}
                edit={edit}
                newId={newId}
                showNoImage={true}
                image={image}
                property={property}
                category={Image_Category.Property}
                removeType={"image"}
              />
            </div>

            <p className="text-black font-bold text-md">
              Other Images (Multiple)
            </p>
            <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center text-md">
              <UploadImage
                category={Image_Category.Property}
                propertyId={add ? newId : property!.id}
                uploadType={"image"}
                offerInId={""}
                blogPostId=""
                documentCategory={Document_Category.Cop}
              />
            </div>
          </>
        )}

        {/* FEATURES */}

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="bedrooms">
            Bedrooms
          </label>
          <input
            required
            id="bedrooms"
            type="number"
            value={bedrooms as number}
            placeholder="3"
            onChange={(e) => setBedrooms(e.target.valueAsNumber)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="bathrooms">
            Bathrooms
          </label>
          <input
            required
            id="bathrooms"
            type="number"
            value={bathrooms as number}
            placeholder="2"
            onChange={(e) => setBathrooms(e.target.valueAsNumber)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Lot Size in m²</label>
          <input
            id="lotSize"
            value={lotSize as string}
            placeholder="1000m2"
            onChange={(e) => setLotSize(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Asking Price</label>
          <input
            required
            id="price"
            value={price}
            placeholder="R 1, 250, 000"
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="parking">
            Parking
          </label>
          <input
            required
            id="parking"
            type="number"
            value={parking as number}
            placeholder="2"
            onChange={(e) => setParking(e.target.valueAsNumber)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Year Built</label>
          <input
            required
            id="yearBuilt"
            value={yearBuilt as string}
            placeholder="1992"
            onChange={(e) => setYearBuilt(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="basement">
            Basement
          </label>
          <input
            required
            id="basement"
            value={basement as string}
            placeholder="Yes"
            onChange={(e) => setBasement(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label
            className="text-black font-bold"
            htmlFor="otherPropertyFeatures"
          >
            Other Property Features
          </label>
          <textarea
            id="otherPropertyFeatures"
            rows={5}
            value={otherPropertyFeatures as string}
            placeholder="Other Property Features"
            onChange={(e) => setOtherPropertyFeatures(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white resize-none"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md pb-10">
          <label className="text-black font-bold">Overview</label>
          <textarea
            required
            id="overview"
            rows={5}
            value={overview as string}
            placeholder="A lengthy overview of the property"
            onChange={(e) => setOverview(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white resize-none"
          />
        </div>

        <p className="prose text-center font-bold w-full pt-8 text-3xl">
          Interior
        </p>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Interior</label>
          <textarea
            required
            id="interior"
            value={interior as string}
            placeholder="Short Description of Interior"
            onChange={(e) => setInterior(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white resize-none"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="flooring">
            Flooring
          </label>
          <input
            required
            id="flooring"
            value={flooring as string}
            placeholder="Wood | Tiles"
            onChange={(e) => setFlooring(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Cooling</label>
          <input
            id="cooling"
            value={cooling as string}
            placeholder="AC in Master Bedroom and Lounge/Dining-Room"
            onChange={(e) => setCooling(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Heating</label>
          <input
            id="heating"
            value={heating as string}
            placeholder="Oil Heaters / No Heating"
            onChange={(e) => setHeating(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="appliances">
            Appliances
          </label>
          <input
            id="appliances"
            value={appliances as string}
            placeholder="Kitchen and Laundry appliances included"
            onChange={(e) => setAppliances(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md pb-10">
          <label
            className="text-black font-bold"
            htmlFor="otherInteriorFeatures"
          >
            Other Interior Features
          </label>
          <textarea
            id="otherInteriorFeatures"
            rows={5}
            value={otherInteriorFeatures as string}
            placeholder="Other Interior Features"
            onChange={(e) => setOtherInteriorFeatures(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white resize-none"
          />
        </div>

        <p className="prose text-center font-bold w-full pt-8 text-3xl">
          Surroundings
        </p>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="surroundingSuburbs">
            Surrounding Suburbs
          </label>
          <input
            id="surroundingSuburbs"
            value={surroundingSuburbs as string}
            placeholder="Kloof | Hillcrest | Gillets | Everton"
            onChange={(e) => setSurroundingSuburbs(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="schools">
            Schools
          </label>
          <input
            id="schools"
            value={schools as string}
            placeholder="Schools in the Area"
            onChange={(e) => setSchools(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label
            className="text-black font-bold"
            htmlFor="distanceToNearestSchool"
          >
            Distance to Nearest School in Kilometers
          </label>
          <input
            id="distanceToNearestSchool"
            value={distanceToNearestSchool as string}
            placeholder="10"
            onChange={(e) =>
              setDistanceToNearestSchool(
                e.target.value.replace(/[^0-9.]+/g, "")
              )
            }
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="nightlife">
            Nightlife
          </label>
          <input
            id="nightlife"
            value={nightlife as string}
            placeholder="Highly rated restaurants and live music venues nearby"
            onChange={(e) => setNightlife(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="shopping">
            Shopping
          </label>
          <input
            id="shopping"
            value={shopping as string}
            placeholder="Large mall 2km away, Groceries 200m away"
            onChange={(e) => setShopping(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="forKids">
            Childertainment
          </label>
          <input
            id="forKids"
            value={forKids as string}
            placeholder="Park/Zoo/Fishing/Sport-Field nearby to keep your child entertained"
            onChange={(e) => setForKids(e.target.value)}
            className="p-3 rounded-xl w-full bg-off-white"
          />
        </div>

        <div className="w-full mx-auto flex items-center justify-center pt-10">
          <div className="space-x-3">
            <Button
              variant="secondary"
              onClick={onCancel}
              className="text-white"
            >
              Cancel
            </Button>
            {loadingUpdateProperty || loadingAddProperty ? (
              <Button className="text-white">Saving Changes</Button>
            ) : (
              <Button type="submit" className="text-white">
                Save
              </Button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
