import { useEffect, useState } from "react";
import {
  useAddPropertyMutation,
  useUpdatePropertyMutation,
  Property,
  RESIDENTIAL_CATEGORY,
  PROPERTY_CATEGORY,
  useAddImageMutation,
  Image,
  IMAGE_CATEGORY,
  STATUS,
} from "../types";
import { Button } from "./Button";
import RadioButtonGroup from "./RadioPropertyType";
import UploadImage from "./UploadImage";
import { ImageGallery } from "./PropertyDetails";
import RadioStatus from "./RadioStatus";

interface IProps {
  property: Property | undefined | null;
  image: Image[] | undefined | null;
  add: boolean;
  edit: boolean;
}

export default function AddPropertyForm({
  property,
  add,
  edit,
  image,
}: IProps) {
  const [formSent, setFormSent] = useState(false);

  const editInterior = add ? "" : property!.interior;
  const editFeatured = add ? false : property?.featured;
  const editStatus = add ? false : property?.status;
  const editTitle = add ? "" : property!.title;
  const editOverview = add ? "" : property!.overview;
  const editAddress = add ? "" : property!.address;
  const editPrice = add ? "" : property!.price;
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
    ? PROPERTY_CATEGORY.COMMERCIAL
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

  const [addProperty] = useAddPropertyMutation();
  const [updateProperty] = useUpdatePropertyMutation();
  const [AddInteriorImage] = useAddImageMutation();

  useEffect(() => {}, []);

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

  let imageDetails = {
    variables: {
      input: {
        id: newId,
        url: "https://landmark-real-eastate.s3.ap-southeast-1.amazonaws.com/houseImage1.jpeg",
        property: property,
        propertyId: newId,
        imageCategory: IMAGE_CATEGORY.MAIN,
      },
    },
  };

  let propertyDetails = {
    variables: {
      input: {
        id: add ? newId : property!.id,
        interior: interior,
        featured: featured,
        status: status as STATUS,
        title: title,
        overview: overview,
        address: address,
        price: price,
        yearBuilt: yearBuilt,
        heating: heating,
        cooling: cooling,
        parking: parking,
        lotSize: lotSize,
        otherInteriorFeatures: otherInteriorFeatures,
        schools: schools,
        distanceToNearestSchool: distanceToNearestSchool,
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
          selectedResidentialCategory as RESIDENTIAL_CATEGORY,
        propertyCategory: selectedPropertyCategory as PROPERTY_CATEGORY,
      },
    },
  };
  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      if (add) {
        addProperty(propertyDetails);
        AddInteriorImage(imageDetails);
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

  let src;

  image?.map((i) => {
    if (
      i.propertyId === property?.id &&
      i.imageCategory === IMAGE_CATEGORY.MAIN
    ) {
      src = i.url;
    }
  });

  return (
    <>
      <form
        onSubmit={onFinish}
        className="space-y-1 py-4 max-w-[100rem] w-full mx-auto"
      >
        <div className="max-w-[20rem] py-10 bg-white rounded-xl ml-3">
          <div className="px-3 flex items-center w-full">
            <label className="text-black font-bold w-full text-md">
              Featured
            </label>
            <input
              id="featured"
              type="checkbox"
              checked={featured as boolean}
              placeholder="Featured"
              onChange={(e) => setFeatured(e.target.checked)}
              className="p-3 rounded-xl w-full"
            />
          </div>
        </div>
        <div className="px-3 flex items-center pt-3 w-full">
          <label className="text-black font-bold w-full text-md whitespace-nowrap">
            Listing Status
          </label>
          <RadioStatus
            value={status as STATUS}
            selectedStatus={status as STATUS}
            onStatusChange={(event: { target: { value: STATUS } }) =>
              setStatus(event.target.value)
            }
          />
        </div>

        <p className="prose text-center font-bold w-full pt-8 text-3xl pb-6">
          Property
        </p>

        {src ? (
          <div className="p-3 rounded-xl py-3">
            <img src={src} alt="" />
          </div>
        ) : (
          <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center">
            <UploadImage
              category={IMAGE_CATEGORY.MAIN}
              propertyId={add ? newId : property!.id}
            />
          </div>
        )}

        <div className="flex items-start space-y-1 justify-center flex-col pt-4 text-md pb-4">
          <label className="text-black font-bold">Title</label>
          <input
            required
            id="title"
            value={title as string}
            placeholder="Stunning 3 Bed Home for New Family"
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-xl w-full"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Address</label>
          <input
            required
            id="address"
            value={address as string}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            className="p-3 rounded-xl w-full"
          />
        </div>

        <div className="pt-6">
          <ImageGallery
            add={add}
            newId={newId}
            showNoImage={true}
            image={image}
            property={property}
            category={IMAGE_CATEGORY.SUBMAIN}
          />
        </div>

        <p className="text-lg font-bold py-2">Below Main Image</p>

        <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center">
          <UploadImage
            category={IMAGE_CATEGORY.SUBMAIN}
            propertyId={add ? newId : property!.id}
          />
        </div>

        <div className="pt-6">
          <ImageGallery
            add={add}
            newId={newId}
            showNoImage={true}
            image={image}
            property={property}
            category={IMAGE_CATEGORY.PROPERTY}
          />
        </div>

        <p className="text-lg font-bold py-2">
          Pictures of Property from the Outside
        </p>

        <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center">
          <UploadImage
            category={IMAGE_CATEGORY.PROPERTY}
            propertyId={add ? newId : property!.id}
          />
        </div>

        {/* listing status */}
        {/* features */}

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
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Lot Size</label>
          <input
            id="lotSize"
            value={lotSize as string}
            placeholder="1000m2"
            onChange={(e) => setLotSize(e.target.value)}
            className="p-3 rounded-xl w-full"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Asking Price</label>
          <input
            required
            id="price"
            value={price as string}
            placeholder="R 1, 250, 000"
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 rounded-xl w-full"
          />
        </div>

        <RadioButtonGroup
          value={selectedPropertyCategory as PROPERTY_CATEGORY}
          onPropertyChange={(event: {
            target: { value: PROPERTY_CATEGORY };
          }) => {
            if (event.target.value !== ("RESIDENTIAL" as PROPERTY_CATEGORY)) {
              setPropertyCategory(event.target.value);
              setResidentialCategory(null);
            }
            setPropertyCategory(event.target.value);
          }}
          selectedPropertyCategory={
            selectedPropertyCategory as PROPERTY_CATEGORY
          }
          residentialCategory={
            selectedResidentialCategory as RESIDENTIAL_CATEGORY
          }
          onResidentialChange={(event: {
            target: { value: RESIDENTIAL_CATEGORY };
          }) => {
            setResidentialCategory(event.target.value);
          }}
        />

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
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full resize-none"
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
            className="p-3 rounded-xl w-full resize-none"
          />
        </div>

        <p className="prose text-center font-bold w-full pt-8 text-3xl">
          Interior
        </p>

        <div className="pt-6">
          <ImageGallery
            add={add}
            newId={newId}
            showNoImage={true}
            image={image}
            property={property}
            category={IMAGE_CATEGORY.INTERIOR}
          />
        </div>

        <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center">
          <UploadImage
            category={IMAGE_CATEGORY.INTERIOR}
            propertyId={add ? newId : property!.id}
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Interior</label>
          <textarea
            required
            id="interior"
            value={interior as string}
            placeholder="Short Description of Interior"
            onChange={(e) => setInterior(e.target.value)}
            className="p-3 rounded-xl w-full resize-none"
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
            className="p-3 rounded-xl w-full"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Cooling</label>
          <input
            id="cooling"
            value={cooling as string}
            placeholder="AC in Master Bedroom and Lounge/Dining-Room"
            onChange={(e) => setCooling(e.target.value)}
            className="p-3 rounded-xl w-full"
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold">Heating</label>
          <input
            id="heating"
            value={heating as string}
            placeholder="Oil Heaters / No Heating"
            onChange={(e) => setHeating(e.target.value)}
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full resize-none"
          />
        </div>

        <p className="prose text-center font-bold w-full pt-8 text-3xl">
          Surroundings
        </p>

        <div className="pt-6">
          <ImageGallery
            add={add}
            newId={newId}
            showNoImage={true}
            image={image}
            property={property}
            category={IMAGE_CATEGORY.SURROUNDINGS}
          />
        </div>

        <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center">
          <UploadImage
            category={IMAGE_CATEGORY.SURROUNDINGS}
            propertyId={add ? newId : property!.id}
          />
        </div>

        <div className=" flex items-start space-y-1 justify-center flex-col pt-4 text-md">
          <label className="text-black font-bold" htmlFor="surroundingSuburbs">
            Surrounding Suburbs
          </label>
          <input
            id="surroundingSuburbs"
            value={surroundingSuburbs as string}
            placeholder="Kloof | Hillcrest | Gillets | Everton"
            onChange={(e) => setSurroundingSuburbs(e.target.value)}
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
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
            onChange={(e) => setDistanceToNearestSchool(e.target.value)}
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
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
            className="p-3 rounded-xl w-full"
          />
        </div>

        <div className="w-full mx-auto flex items-center justify-center pt-10">
          {formSent ? (
            <Button className="text-white">Changes Saved</Button>
          ) : (
            <Button className="text-white">Save</Button>
          )}
        </div>
      </form>
    </>
  );
}
