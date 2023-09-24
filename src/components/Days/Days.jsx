import Fecha from "../Fecha/Fecha";



function Days({datoshora,fncelcius}) {
 
  const currentDate = new Date();

  // Días de la semana y meses en texto
  const daysOfWeek = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", ];
  const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

  
  // Obtener partes de la fecha
  const day = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];
  const dayOfWeekName = daysOfWeek[currentDate.getDay()];
  const tday= currentDate.getDate()+1
  const day3= currentDate.getDate()+2
  const day4= currentDate.getDate()+3
  const day5= currentDate.getDate()+4

  // Formatear la fecha en formato de letras
  const today = `${dayOfWeekName} ${day} ${monthName}`;
  const tday3 = `${dayOfWeekName} ${day3} ${monthName}`;
  const tday4 = `${dayOfWeekName} ${day4} ${monthName}`;
  const tday5 = `${dayOfWeekName} ${day5} ${monthName}`;

    
    

  const url = `https://openweathermap.org/img/w/${datoshora.list[0].weather[0].icon}.png`; 
  const url1 = `https://openweathermap.org/img/w/${datoshora.list[1].weather[0].icon}.png`; 
  const url2 = `https://openweathermap.org/img/w/${datoshora.list[2].weather[0].icon}.png`; 
  const url3 = `https://openweathermap.org/img/w/${datoshora.list[3].weather[0].icon}.png`; 
 console.log(datoshora.list[0].weather[0].icon)

const tempMintd =  datoshora.list[0].main.temp_min
const tempMaxtd =  datoshora.list[0].main.temp_max
const tempMind3 =  datoshora.list[1].main.temp_min
const tempMaxd3 =  datoshora.list[1].main.temp_max
const tempMind4 =  datoshora.list[2].main.temp_min
const tempMaxd4 =  datoshora.list[2].main.temp_max
const tempMind5 =  datoshora.list[3].main.temp_min
const tempMaxd5 =  datoshora.list[3].main.temp_max
 
    
  return (
  <>
    <div className="tomorrow">
        <p>Tomorrow</p>
        <img src={url} alt="clima" />
        <p>{(fncelcius(tempMintd)).toFixed()}°C</p>
        <p>{(fncelcius(tempMaxtd)).toFixed()}°C</p>
        <p></p>
     </div>
     <div className="tomorrow">
        <p>{day3}</p>
        <img src={url1} alt="clima" />
        <p>{(fncelcius(tempMind3)).toFixed()}°C</p>
        <p>{(fncelcius(tempMaxd3)).toFixed()}°C</p>
        <p></p>
     </div>
     <div className="tomorrow">
        <p>{day4}</p>
        <img src={url2} alt="clima" />
        <p>{(fncelcius(tempMind4)).toFixed()}°C</p>
        <p>{(fncelcius(tempMaxd4)).toFixed()}°C</p>
        <p></p>
     </div>
     <div className="tomorrow">
        <p>{day5}</p>
        <img src={url3} alt="clima" />
        <p>{(fncelcius(tempMind5)).toFixed()}°C</p>
        <p>{(fncelcius(tempMaxd5)).toFixed()}°C</p>
        <p></p>
     </div>
    
  </> )
}

export default Days;
