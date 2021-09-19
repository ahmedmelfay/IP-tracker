import React from "react";
import mapStyles from "../../styles/map/map.module.scss";
import { Popup, MapContainer, TileLayer, Marker } from "react-leaflet";
import { useSelector } from "react-redux";
const Map = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return state.loading ? (
    <h1>Loading..</h1>
  ) : (
    <section id={mapStyles.map}>
      <div style={{ position: "relative", zIndex: 0 }}>
        <MapContainer
          className={mapStyles.mapContainer}
          center={[state.data.location.lat, state.data.location.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[state.data.location.lat, state.data.location.lng]}>
            <Popup>IP Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
