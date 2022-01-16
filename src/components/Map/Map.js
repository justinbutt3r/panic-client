import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { MapContainer, TileLayer, ZoomControl, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "./leaflet.css";

import icon from "./images/marker-icon.png";

const L = require("leaflet");

const myIcon = L.icon({
  iconUrl: icon,
  iconSize: [25, 41],
  iconAnchor: [25, 41],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

const Map = ({ events, setMap }) => {
  let navigate = useNavigate();

  return (
    <div className="map">
      <MapContainer
        center={[-33.9249, 18.5241]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />

        {events.map((item) => (
          <Marker
            key={item._id}
            position={[item.lat, item.lng]}
            icon={myIcon}
            eventHandlers={{
              click: () => {
                navigate(`/event/${item._id}`);
              },
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.number,
      gender: PropTypes.string,
      lat: PropTypes.string,
      lng: PropTypes.string,
      location: PropTypes.string,
      details: PropTypes.string,
      name: PropTypes.string,
      _id: PropTypes.string,
    })
  ),
  setMap: PropTypes.func.isRequired,
};

Map.defaultProps = {
  event: [],
};

export default Map;
