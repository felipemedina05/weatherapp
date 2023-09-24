import { useEffect, useState } from "react";
import Fecha from "../Fecha/Fecha";
import "./Card.css";
import Modal from "../Modal/Modal";

function Card({ datos }) {
  const gradosk = datos.main.temp;
  const gradosC = gradosk - 273;
  const gradosF = ((gradosk - 273.15) * 9) / 5 + 32;


  const url = `https://openweathermap.org/img/w/${datos.weather[0].icon}.png`;

  return (
    <>
      <div className="contenedor">
        <div className=" botones">
          <button id="buscar">Search for places </button>
          <button id="gps">gps</button>
        </div>
        <div className="imagen">
          <img src={url} alt="imagen " />
        </div>
        <div className="gradosC">
          <p id="temperatura">{gradosC.toFixed()}</p>
          <p>°C</p>
        </div>

        <p className="clima">{datos.weather[0].main}</p>
        <div className="fecha">
          <Fecha></Fecha> 
          
        </div>

        <div className="ciudad">
        <p>{datos.name}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
