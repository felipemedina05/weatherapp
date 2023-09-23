import { useEffect, useState } from "react";


function Card({datos , datoshora}) {
    


    const gradosk =datos.main.temp;
    const gradosC =(gradosk - 273);
    const gradosF = (gradosk - 273.15) * 9/5 + 32;
    
    console.log(datoshora)
    
    
    
  return (
  <>
    <div>
      <div>
        <button>Search for places</button>
        <button>gps</button>
      </div>
      <div>
        <img src="#" alt="imagen " />
      </div>
      <div>
        <p>{gradosC.toFixed()}°C</p>
        <p>{datos.weather[0].main}</p>
      </div>
      <div>
        <p>{datoshora.list[0].dt_txt}</p>
        <p>{datos.name}</p>
      </div>
    </div>
  </> )
}

export default Card;
