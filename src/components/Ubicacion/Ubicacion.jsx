

function Nav({handlesubmit,handleclik}) {
   const ubicacion = () =>{
   
   
        navigator.geolocation.getCurrentPosition(function(position) {
          // La ubicación se obtuvo con éxito
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
      
          // Hacer algo con las coordenadas de latitud y longitud
          setCyti (`Latitud: ${latitude}, Longitud: ${longitude}`);
        
        });
      
    }
   
    return (
    <>
    
    </> )
  }
  

  


export default Nav;
