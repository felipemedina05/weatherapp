import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import Days from "./components/Days/Days";

function App() {
  const appikey = "7753563720f9768f952766c255e6ce65";
  const [city,setCity] = useState("quito")
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
  }, []);
  useEffect(() => {
    const getDatosh = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appikey}`
      );
      const datahora = await res.json();
      
      setDatoshora(datahora);
    };

    getDatosh();
  }, []);

 


  return <>
  <div className="principal">
  
  <div className="card">{datos && (<Card datos={datos}> </Card>)}</div>
  <div className="Unidades">{datoshora && (<Days datoshora={datoshora} fncelcius={kelvinToCelsius}> </Days>)}</div>

  </div>
  
  
  </>;
}

export default App;
