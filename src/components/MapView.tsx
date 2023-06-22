import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import Markers from './Markers';
import { LatLngTuple } from 'leaflet';

const Map = () => {
  const defaultZoom = 10;
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState<LatLngTuple | undefined>(undefined);

  useEffect(() => {
    fetch('http://localhost:5079/agente')
      .then(response => response.json())
      .then(data => {
        setPlaces(data);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:5079/agente')
        .then(response => response.json())
        .then(data => {
          setPlaces(data);
        });
    }, 30000);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
        },
        error => {
          console.log("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  const defaultCenter: LatLngTuple = [-6.771590, -79.838013];

  return (
    
    

    <MapContainer
      style={{
        height: "80vh",
        marginTop: "2vh",
      }}
      center={center || defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers places={places} />
    </MapContainer>
  );
};

export default Map;


// import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
// import {useState, useEffect } from 'react'

// import Markers from './Markers'


// const Map = () => {
    
//     const defaultZoom = 10;

//     const [places, setPlaces] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5079/agente')
//             .then(response => response.json())
//             .then(data => {
//                 setPlaces(data);
//             });
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//           fetch('http://localhost:5079/agente')
//             .then(response => response.json())
//             .then(data => {
//               setPlaces(data);
//             });
//         }, 30000);
    
//         return () => {
//           clearInterval(interval);
//         };
//       }, []);
    


//     return (
// <MapContainer 
// style={{
//     height: "80vh",
// }}
// center={[-6.771590, -79.838013]} zoom={defaultZoom} scrollWheelZoom={true}>
//   <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//     <Markers places={places} />
// </MapContainer>
//     );
// };

// export default Map;