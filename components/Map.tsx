import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={{
          height: "50vh",
          width: "100%",
        }}
        zoom={16}
        center={{ lat: 10.8114635, lng: 106.7312362 }}
      ></GoogleMap>
    </LoadScript>
  );
}

export default Map;
