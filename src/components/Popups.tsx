import { Popup } from "react-leaflet";

interface PopupsProps {
  place: {
    NombreAgente: string;
    Tlf: string;
    Direccion: string;
  };
}

const Popups: React.FC<PopupsProps> = ({ place }) => {
  const { NombreAgente, Tlf, Direccion } = place;

  return (
    <Popup>
      <div> {NombreAgente} </div>
      <div> {Tlf} </div>
      <div> {Direccion} </div>
    </Popup>
  );
};

export default Popups;
