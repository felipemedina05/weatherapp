
import ProgressBar from 'react-bootstrap/ProgressBar';

function Humidity({ datoshora }) {
 const humidity = datoshora.list[0].main.humidity


 function BarraProgreso({humidity}) {
   
   return <ProgressBar now={humidity} label={`${humidity}%`} />;
 }
 


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
