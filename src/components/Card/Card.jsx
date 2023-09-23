import { useEffect, useState } from "react";
import Fecha from "../Fecha/Fecha";


function Card({datos}) {
    


    const gradosk =datos.main.temp;
    const gradosC =(gradosk - 273);
    const gradosF = (gradosk - 273.15) * 9/5 + 32;
    
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    
    const url = `https://openweathermap.org/img/w/${datos.weather[0].icon}.png` 
    
    
  return (
  <>
    <div>
      <div>
        <button>Search for places</button>
        <button>gps</button>
      </div>
      <div>
        <img src={url} alt="imagen " />
      </div>
      <div>
        <p>{gradosC.toFixed()}°C</p>
        <p>{datos.weather[0].main}</p>
      </div>
      <div>
        <Fecha></Fecha>
        <p>{datos.name}</p>
      </div>
    </div>
  </> )
}

export default Card;
