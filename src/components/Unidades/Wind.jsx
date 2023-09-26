function Wind({ datoshora }) {
     
    return (
      <>
        <div>
          <h3>Wind</h3>
          <h1>{datoshora.list[0].wind.speed} mph</h1>
          
          {/*<Barrap datoshora={datoshora}></Barrap> */}
        </div>
      </>
    );
  }
  
  export default Wind;
  