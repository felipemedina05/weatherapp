import ProgressBar from 'react-bootstrap/ProgressBar';

function BarraProgreso({humidity}) {
  
  return <ProgressBar now={humidity} label={`${humidity}%`} />;
}

export default BarraProgreso;