import { PROPERTY_CATEGORY, IMAGE_CATEGORY, STATUS } from "@prisma/client";

export const propertyOptionsType = [
  { value: PROPERTY_CATEGORY.COMMERCIAL, label: "Commercial" },
  { value: PROPERTY_CATEGORY.RESIDENTIAL, label: "Residential" },
  { value: PROPERTY_CATEGORY.INDUSTRIAL, label: "Industrial" },
  { value: PROPERTY_CATEGORY.RAW_LAND, label: "Raw Land" },
  { value: PROPERTY_CATEGORY.SPECIAL_USE, label: "Special Use" },
  { value: PROPERTY_CATEGORY.OFFICE, label: "Office" },
];

export const imageOptionsType = [
  { value: IMAGE_CATEGORY.MAIN, label: "Main" },
  { value: IMAGE_CATEGORY.SUBMAIN, label: "Sub-Main" },
  { value: IMAGE_CATEGORY.INTERIOR, label: "Interior" },
  { value: IMAGE_CATEGORY.SURROUNDINGS, label: "Surroundings" },
  { value: IMAGE_CATEGORY.PROPERTY, label: "Property" },
];

export const statusOptionsType = [
  { value: STATUS.FOR_SALE, label: "For Sale" },
  { value: STATUS.FOR_RENT, label: "For Rent" },
  { value: STATUS.SOLD, label: "Sold" },
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
  { elevator: "Elevator" },
  { loadingDock: "Loading Dock" },
  { freightElevator: "Freight Elevator" },
  { driveInDoor: "Drive-In Door" },
  { parkingLot: "Parking Lot" },
  { onSiteParking: "On-Site Parking" },
  { visitorParking: "Visitor Parking" },
  { handicapParking: "Handicap Parking" },
  { undergroundParking: "Underground Parking" },
  { parkingGarage: "Parking Garage" },
  { streetParking: "Street Parking" },
  { valetParking: "Valet Parking" },
  { securityGuard: "Security Guard" },
  { gatedAccess: "Gated Access" },
  { cctv: "CCTV" },
  { alarmSystem: "Alarm System" },
  { sprinklerSystem: "Sprinkler System" },
  { generator: "Generator" },
  { solarPanels: "Solar Panels" },
  {
    greenEnergyEfficientFeatures: "Green/Energy-Efficient Features",
  },
  { smartBuildingTechnology: "Smart Building Technology" },
  { buildingAutomationSystem: "Building Automation System" },
  { conferenceRoom: "Conference Room" },
  { meetingRoom: "Meeting Room" },
  { breakRoom: "Break Room" },
  { kitchen: "Kitchen" },
  { lounge: "Lounge" },
  { receptionArea: "Reception Area" },
  { waitingArea: "Waiting Area" },
  { showroom: "Showroom" },
  { displayArea: "Display Area" },
  { storageRoom: "Storage Room" },
  { itRoom: "IT Room" },
  { dataCenter: "Data Center" },
  { serverRoom: "Server Room" },
  { mailroom: "Mailroom" },
  { copierRoom: "Copier Room" },
  { supplyRoom: "Supply Room" },
  { restroom: "Restroom" },
  { shower: "Shower" },
  { changeRoom: "Change Room" },
  { fitnessCenter: "Fitness Center" },
  { onSiteGym: "On-Site Gym" },
  { showerRoom: "Shower Room" },
  { lockerRoom: "Locker Room" },
  { sauna: "Sauna" },
  { swimmingPool: "Swimming Pool" },
  { tennisCourt: "Tennis Court" },
  { basketballCourt: "Basketball Court" },
  { volleyballCourt: "Volleyball Court" },
  { baseballDiamond: "Baseball Diamond" },
  { soccerField: "Soccer Field" },
  { runningTrack: "Running Track" },
  { puttingGreen: "Putting Green" },
  { drivingRange: "Driving Range" },
  { golfSimulator: "Golf Simulator" },
  { iceSkatingRink: "Ice-Skating Rink" },
  { skatepark: "Skatepark" },
  { rockClimbingWall: "Rock-Climbing Wall" },
  { zipLine: "Zip Line" },
  { trampolinePark: "Trampoline Park" },
  { indoorPlayground: "Indoor Playground" },
  { outdoorPlayground: "Outdoor Playground" },
  { picnicArea: "Picnic Area" },
  { bbqArea: "BBQ Area" },
  { beerGarden: "Beer Garden" },
  { foodCourt: "Food Court" },
  { convenienceStore: "Convenience Store" },
  { daycareCenter: "Daycare Center" },
  { petDaycare: "Pet Daycare" },
  { petGrooming: "Pet Grooming" },
  { petHotel: "Pet Hotel" },
  { petPark: "Pet Park" },
  { dogPark: "Dog Park" },
  { dogRun: "Dog Run" },
  { catJungleGym: "Cat Jungle Gym" },
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
