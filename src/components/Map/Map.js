import React from "react";
import mapStyles from "../../styles/map/map.module.scss";
import { Popup, MapContainer, TileLayer, Marker } from "react-leaflet";
const Map = () => {
  return (
    <section id={mapStyles.map}>
      <div style={{ position: "relative", zIndex: 0 }}>
        <MapContainer className={mapStyles.mapContainer} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
