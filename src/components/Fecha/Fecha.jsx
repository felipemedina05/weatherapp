

function Fecha() {
    
    const currentDate = new Date();

    // Días de la semana y meses en texto
    const daysOfWeek = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat", ];
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    
    // Obtener partes de la fecha
    const day = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];
    const dayOfWeekName = daysOfWeek[currentDate.getDay()];

    // Formatear la fecha en formato de letras
    const formattedDate = `${dayOfWeekName} ${day} ${monthName}`;

      
    
    return (
    <>
    <p>Today . {formattedDate}</p>
    </> )
  }
  

  


export default Fecha;
