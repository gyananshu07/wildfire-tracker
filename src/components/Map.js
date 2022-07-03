import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import { useState } from "react";

const API_KEY = "AIzaSyCj_qqL_ij4TNRVrDGjUgGQNHv9W5OV1ls";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState();

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === "wildfires") {
      return (
        <LocationMarker
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
            })
          }
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
