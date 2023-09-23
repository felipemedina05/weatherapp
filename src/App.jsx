import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const getDatos = async () => {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=london&appid=7753563720f9768f952766c255e6ce65"
      );
      const data = await res.json();
      console.log(data)
      setDatos(data);
    };

    getDatos();
  }, []);

  return <></>;
}

export default App;
