import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "40rem",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDTpc9hXO-sPwXguvXMUBie6R9kkj3OL7U">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
