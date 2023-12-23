import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ latitude, longitude }) {
  const mapIcon = new Leaflet.icon({
    iconUrl: "/map-marker.png",
    iconSize: [25, 32],
    iconAnchor: [15, 37],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", borderRadius: "40px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={mapIcon}></Marker>
    </MapContainer>
  );
}
