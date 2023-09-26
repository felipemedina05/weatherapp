import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import Days from "./components/Days/Days";
import Unidades from "./components/Unidades/Unidades";
import Nav from "./components/Nav/Nav";
import Modal from "./components/Modal/Modal";

function App() {
  const appikey = "7753563720f9768f952766c255e6ce65";
  const [city, setCity] = useState("quito");
  const [datos, setDatos] = useState(null);
  const [datoshora, setDatoshora] = useState(null);

  function kelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return celsius;
  }

  useEffect(() => {
    const getDatos = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appikey}`
      );
      const data = await res.json();

      setDatos(data);
    };

    getDatos();
  }, [city]);
  useEffect(() => {
    const getDatosh = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appikey}`
      );
      const datahora = await res.json();

      setDatoshora(datahora);
    };

    getDatosh();
  }, [city]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value == "") {
      setCity("london");
    } else {
      const nombreCiudad = e.target[0].value.toLowerCase();
      setCity(nombreCiudad);
    }
  };

  const handleclik = (e) => {
    const nombreCiudad = e.target.outerText.toLowerCase();
    console.log(nombreCiudad);

    setCity(nombreCiudad);
  };

  return (
    <>
      <div className="contenedor">
        <div className="contenedor1">
          {datos && (
            <Card
              datos={datos}
              handleclik={handleclik}
              handlesubmit={handlesubmit}
            >
              {" "}
            </Card>
          )}
        </div>

        <div className="contenedor2">
          <div className="days">
            {datoshora && (
              <Days datoshora={datoshora} fncelcius={kelvinToCelsius}>
                {" "}
              </Days>
            )}
          </div>
          <div className="Unidades">
            <h2>Today’s Hightlights </h2>
            {datoshora && (
              <Unidades datoshora={datoshora} fncelcius={kelvinToCelsius}>
                {" "}
              </Unidades>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
