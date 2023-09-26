
import "./Nav.css"
function Nav({handlesubmit,handleclik}) {
    
   
    return (
    <>
    <nav className="nav">
        <form onSubmit={handlesubmit}>
            
            <input type="text" placeholder="Search Location" />
            <button type="submit">Search</button>
        </form>

        <button onClick={handleclik}>London</button>
        <button onClick={handleclik}>Barcelona</button>
        <button onClick={handleclik}>Long Beach</button>
    </nav>
    </> )
  }
  

  


export default Nav;
