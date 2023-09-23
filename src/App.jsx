import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const appikey = "7753563720f9768f952766c255e6ce65";
  const [city,setCity] = useState("lima")
  const [datos, setDatos] = useState(null);
  const [datoshora, setDatoshora] = useState(null);

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
    const getDatos = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appikey}`
      );
      const datahora = await res.json();
      
      setDatoshora(datahora);
    };

    getDatos();
  }, []);

 


  return <>
  {datos && <Card datos={datos}  datoshora={datoshora} ></Card>}

  </>;
}

export default App;
