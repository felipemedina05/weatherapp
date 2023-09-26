

function Airpresure({ datoshora }) {




    return (
      <>
        <div>
          <h3>Air Presure</h3>
          <h1>{datoshora.list[0].main.pressure} mb</h1>
        </div>
       
      </>
    );
  }
  
  export default Airpresure;