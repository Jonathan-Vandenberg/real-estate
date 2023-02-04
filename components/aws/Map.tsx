import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "40rem",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    if (process.env.GOOGLE_MAPS_API_KEY) {
      let mapApiKey = process.env.GOOGLE_MAPS_API_KEY;
      setApiKey(mapApiKey);
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
