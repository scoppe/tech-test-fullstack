import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon, point } from "leaflet";
import houseIcon from "../assets/house.png";
import { Estate } from "../graphql";

type MapProps = {
  estates?: Estate[] | null;
};

const Map: React.FC<MapProps> = (props) => {
  return (
    <MapContainer
      className="h-full"
      center={[47, 10]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.estates
        ?.filter((estate) => estate.geopoint)
        .map((estate) => (
          <Marker
            key={estate.id}
            icon={icon({ iconUrl: houseIcon, iconSize: point(24, 24) })}
            position={[estate.geopoint!.latitude, estate.geopoint!.longitude]}
          />
        ))}
    </MapContainer>
  );
};

export default Map;
