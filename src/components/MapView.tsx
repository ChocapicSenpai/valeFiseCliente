import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {useState, useEffect } from 'react'

import Markers from './Markers'


const Map = () => {
    
    const defaultZoom = 10;

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5079/agente')
            .then(response => response.json())
            .then(data => {
                setPlaces(data);
            });
    }, []);


    return (
<MapContainer 
style={{
    height: "80vh",
}}
center={[-6.771590, -79.838013]} zoom={defaultZoom} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <Markers places={places} />
</MapContainer>
    );
};

export default Map;