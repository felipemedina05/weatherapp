

function Nav({handlesubmit,handleclik}) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const apiKey = 'AIzaSyCJ0SewcQZzp6Q8QfD08hK41k65wE2e014'
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const gpscity= ""
        // Hacer algo con las coordenadas de latitud y longitud
        console.log (`Latitud: ${latitude}, Longitud: ${longitude}`);
      
        const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        fetch(geocodingApiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'OK' && data.results.length > 0) {
            // Obtener el nombre de la ciudad desde los resultados de la geocodificación
            const addressComponents = data.results[0].address_components;
            const cityComponent = addressComponents.find(component => {
              return component.types.includes('locality'); // Buscar el tipo "locality" que generalmente corresponde a la ciudad
            });
      
          


})}
    
    
   
    return (
    <>
    
    </> )
  }
  

  


export default Nav;
