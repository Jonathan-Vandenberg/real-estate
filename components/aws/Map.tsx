import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Places from "./Places";

const containerStyle = {
  width: "100%",
  height: "40rem",
};

type LatLongLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

function MyComponent() {
  const [property, setProperty] = useState<LatLongLiteral>();

  const mapRef = useRef<GoogleMap>();

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUi: true,
      clickableIcons: false,
      mapId: "cb4147238dda04c1",
    }),
    []
  );

  const center = useMemo<LatLongLiteral>(
    () => ({
      lat: 10.8198961,
      lng: 106.73527,
    }),
    []
  );

  return (
    <div className="flex">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          zoom={15}
          onLoad={onLoad}
        >
          {property && <Marker position={property} />}
        </GoogleMap>
      </LoadScript>
      <div className="h-full">
        <Places
          setProperty={(position) => {
            setProperty(position);
            mapRef.current?.panTo(position);
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(MyComponent);
