import "./Unidades.css";
import Fecha from "../Fecha/Fecha";
import Airpresure from "./Airpresure";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import Wind from "./Wind";

function Unidades({ datoshora}) {




  return (
    <>
      <div className="unidades">
        <div id="wind"><Wind datoshora={datoshora}></Wind></div>
        <div id="humidity"><Humidity datoshora={datoshora}></Humidity></div>
        <div id="visibility"><Visibility datoshora={datoshora}></Visibility></div>
        <div id="airpresure"><Airpresure datoshora={datoshora}></Airpresure></div>
        
      </div>
    </>
  );
}

export default Unidades;
