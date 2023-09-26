
import "./Nav.css"
function Nav({handlesubmit,handleclik}) {
    
   
    return (
    <>
    <nav className="nav">
        <form onSubmit={handlesubmit}>
            
            <input type="text" placeholder="Search Location" />
            <button className="submit" type="submit">Search</button>
        </form>

        <button className="button" onClick={handleclik}>London</button>
        <button className="button"onClick={handleclik}>Barcelona</button>
        <button className="button"onClick={handleclik}>Long Beach</button>
    </nav>
    </> )
  }
  

  


export default Nav;
