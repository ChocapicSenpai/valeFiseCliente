import React from "react";
import { Marker } from "react-leaflet";
import Popups from "./Popups";


interface Place {
  NombreAgente: string;
  Tlf: string;
  Direccion: string;
  latlng: string;
  estado: number;
}

interface MarkersProps {
  places: Place[];
}

const Markers: React.FC<MarkersProps> = ({ places }) => {
  const filteredPlaces = places.filter((place) => place.estado === 1);
  const markers = filteredPlaces.map((place, i) => {
    if (!place || !place.latlng) {
      return null;
    }

    const [lat, lng] = place.latlng.split(",").map((coord) => parseFloat(coord));

    if (isNaN(lat) || isNaN(lng)) {
      return null;
    }

    return (
      <Marker key={i} position={[lat, lng]} >
        <Popups place={place} />
      </Marker>
    );
  });

  return <>{markers}</>;
};

export default Markers;
