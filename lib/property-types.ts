import { Property_Category, Image_Category, Status } from "../types";

export const propertyOptionsType = [
  { value: Property_Category.Commercial, label: "Commercial" },
  { value: Property_Category.Residential, label: "Residential" },
  { value: Property_Category.Industrial, label: "Industrial" },
  { value: Property_Category.RawLand, label: "Raw Land" },
  { value: Property_Category.SpecialUse, label: "Special Use" },
  { value: Property_Category.Office, label: "Office" },
];

export const imageOptionsType = [
  { value: Image_Category.MAIN, label: "Main" },
  { value: Image_Category.Submain, label: "Sub-Main" },
  { value: Image_Category.Interior, label: "Interior" },
  { value: Image_Category.Surroundings, label: "Surroundings" },
  { value: Image_Category.Property, label: "Property" },
];

export const statusOptionsType = [
  { value: Status.ForSale, label: "For Sale" },
  { value: Status.ForRent, label: "For Rent" },
  { value: Status.Sold, label: "Sold" },
];

export const residentialOptionType = [
  "Swimming Pool",
  "Tennis Court",
  "Home Gym",
  "Sauna/Hot Tub",
  "Generator",
  "Solar Panels",
  "Green/Energy-Efficient Features",
  "Smart Home Technology",
  "Theatre Room",
  "Game Room",
  "Wine Cellar",
  "Home Office",
  "Guest House",
  "Workshop",
  "Studio",
  "Greenhouse",
  "Land for Gardening or Farming",
  "Pond/Lake/River Access",
  "Beach/Waterfront Access",
  "Mountain/Hill Views",
  "Golf Course Access",
  "Gated Community",
  "Pool/Spa",
  "Playground",
  "Wheelchair Accessible",
  "Sprinkler System",
  "Security System",
  "Intercom",
  "Video Surveillance",
  "Rooftop Deck",
  "Balcony",
  "Patio",
  "Deck",
  "Porch",
  "Grill",
  "Fireplace",
  "Private Yard",
  "Fenced Yard",
  "Landscaping",
  "Water Feature",
  "Lighting",
];

export const commercialOptionType = [
  "Elevator",
  "Loading Dock",
  "Freight Elevator",
  "Drive-In Door",
  "Parking Lot",
  "On-Site Parking",
  "Visitor Parking",
  "Handicap Parking",
  "Underground Parking",
  "Parking Garage",
  "Street Parking",
  "Valet Parking",
  "Security Guard",
  "Gated Access",
  "CCTV",
  "Alarm System",
  "Sprinkler System",
  "Generator",
  "Solar Panels",

  "Green/Energy-Efficient Features",

  "Smart Building Technology",
  "Building Automation System",
  "Conference Room",
  "Meeting Room",
  "Break Room",
  "Kitchen",
  "Lounge",
  "Reception Area",
  "Waiting Area",
  "Showroom",
  "Display Area",
  "Storage Room",
  "IT Room",
  "Data Center",
  "Server Room",
  "Mailroom",
  "Copier Room",
  "Supply Room",
  "Restroom",
  "Shower",
  "Change Room",
  "Fitness Center",
  "On-Site Gym",
  "Shower Room",
  "Locker Room",
  "Sauna",
  "Swimming Pool",
  "Tennis Court",
  "Basketball Court",
  "Volleyball Court",
  "Baseball Diamond",
  "Soccer Field",
  "Running Track",
  "Putting Green",
  "Driving Range",
  "Golf Simulator",
  "Ice-Skating Rink",
  "Skatepark",
  "Rock-Climbing Wall",
  "Zip Line",
  "Trampoline Park",
  "Indoor Playground",
  "Outdoor Playground",
  "Picnic Area",
  "BBQ Area",
  "Beer Garden",
  "Food Court",
  "Convenience Store",
  "Daycare Center",
  "Pet Daycare",
  "Pet Grooming",
  "Pet Hotel",
  "Pet Park",
  "Dog Park",
  "Dog Run",
  "Cat Jungle Gym",
];

export const convertEnum = (value: string | undefined | null) => {
  switch (value) {
    case "RESIDENTIAL":
      return "Residential";
      break;
    case "COMMERCIAL":
      return "Commercial";
      break;
    case "INDUSTRIAL":
      return "Industrial";
      break;
    case "RAW_LAND":
      return "Raw Land";
      break;
    case "SPECIAL_USE":
      return "Special Use";
      break;
    case "OFFICE":
      return "Office";
      break;
    default:
      "Property Type";
  }
};
