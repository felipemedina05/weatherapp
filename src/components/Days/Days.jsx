import Fecha from "../Fecha/Fecha";
import "../Days/Days.css"

function Days({ datoshora, fncelcius }) {
  const currentDate = new Date();

  // Días de la semana y meses en texto
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  // Obtener partes de la fecha
  const day = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];
  const dayOfWeekName2 = daysOfWeek[currentDate.getDay()+1];
  const dayOfWeekName3= daysOfWeek[currentDate.getDay()+2];
  const dayOfWeekName4 = daysOfWeek[currentDate.getDay()+3];
  const dayOfWeekName5 = daysOfWeek[currentDate.getDay()+4];
  const tday = currentDate.getDate() + 1;
  const day3 = currentDate.getDate() + 2;
  const day4 = currentDate.getDate() + 3;
  const day5 = currentDate.getDate() + 4;

  // Formatear la fecha en formato de letras
  const today = `${dayOfWeekName2} ${day} ${monthName}`;
  const tday3 = `${dayOfWeekName3} ${day3} ${monthName}`;
  const tday4 = `${dayOfWeekName4} ${day4} ${monthName}`;
  const tday5 = `${dayOfWeekName5} ${day5} ${monthName}`;

  const url = `https://openweathermap.org/img/w/${datoshora.list[0].weather[0].icon}.png`;
  const url1 = `https://openweathermap.org/img/w/${datoshora.list[1].weather[0].icon}.png`;
  const url2 = `https://openweathermap.org/img/w/${datoshora.list[2].weather[0].icon}.png`;
  const url3 = `https://openweathermap.org/img/w/${datoshora.list[3].weather[0].icon}.png`;
  const url4 = `https://openweathermap.org/img/w/${datoshora.list[4].weather[0].icon}.png`;

  const tempMintd = datoshora.list[0].main.temp_min;
  const tempMaxtd = datoshora.list[0].main.temp_max;
  const tempMind3 = datoshora.list[1].main.temp_min;
  const tempMaxd3 = datoshora.list[1].main.temp_max;
  const tempMind4 = datoshora.list[2].main.temp_min;
  const tempMaxd4 = datoshora.list[2].main.temp_max;
  const tempMind5 = datoshora.list[3].main.temp_min;
  const tempMaxd5 = datoshora.list[3].main.temp_max;
  const tempMind6 = datoshora.list[4].main.temp_min;
  const tempMaxd6 = datoshora.list[4].main.temp_max;

  return (
    <>
      
      <div className="days">
        <div className="tomorrow">
          <p>Tomorrow</p>
          <img src={url} alt="clima" />
          <p>{fncelcius(tempMintd).toFixed()}°C</p>
          <p>{fncelcius(tempMaxtd).toFixed()}°C</p>
          <p></p>
        </div>
        <div className="tomorrow">
          <p>{tday3}</p>
          <img src={url1} alt="clima" />
          <p>{fncelcius(tempMind3).toFixed()}°C</p>
          <p>{fncelcius(tempMaxd3).toFixed()}°C</p>
          <p></p>
        </div>
        <div className="tomorrow">
          <p>{tday4}</p>
          <img src={url2} alt="clima" />
          <p>{fncelcius(tempMind4).toFixed()}°C</p>
          <p>{fncelcius(tempMaxd4).toFixed()}°C</p>
          <p></p>
        </div>
        <div className="tomorrow">
          <p>{tday5}</p>
          <img src={url3} alt="clima" />
          <p>{fncelcius(tempMind5).toFixed()}°C</p>
          <p>{fncelcius(tempMaxd5).toFixed()}°C</p>
          <p></p>
        </div>
        <div className="tomorrow">
          <p>{tday5}</p>
          <img src={url4} alt="clima" />
          <p>{fncelcius(tempMind6).toFixed()}°C</p>
          <p>{fncelcius(tempMaxd6).toFixed()}°C</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Days;
