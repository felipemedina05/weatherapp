/* import Barrap from "./BarraP"; */
/* import ProgressBar from "react-bootstrap/ProgressBar"; */

import BarraProgreso from "./barraprogreso";

function Humidity({ datoshora }) {
 const humidity = datoshora.list[0].main.humidity

  return (
    <>
      <div>
        <h3>Humidity</h3>
        <h1>{humidity} %</h1>
        <BarraProgreso  humidity={humidity}></BarraProgreso>
        
      </div>
    </>
  );
}

export default Humidity;
