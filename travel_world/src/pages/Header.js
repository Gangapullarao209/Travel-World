import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div  >
             
   <nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-light"  >
  <div className="container-fluid">
  <img src={require("../images/logo2.png")} alt="" width="140" height="60" className="d-inline-block align-text-top" style={{marginLeft:'8%'}}/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{marginLeft:'45%', gap:'2%'}}>
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Tours">Tours</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Register">
            <button style={{border:'none', 
                            borderRadius:'10px ',
                            }}>Register</button>
        </Link>
        </li>
         
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar;   