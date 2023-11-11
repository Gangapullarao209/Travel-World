import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import '../../src/LoginPage.css'

 
function Login(){

    return(
        <div>
            <Navbar />
            <img id='luser'  src={require('../images/user.png')}/> 

            <div class="container-lg-md-sm">
            
             <div className="LFimg">
             <img src={require('../images/register.png')} class="img-fluid" />
             </div>
             <div className="LForm"> 
             <form className="form">
                <h5 id="Flogin">Login</h5>
                <br/>
            <div class="row mb-3">
           <div class="col-sm-10">
           <input id="lemail" type="email" class="form-control"  placeholder="Email" id="inputEmail3" />
           </div>
           </div>
           <div class="row mb-3">
           <div class="col-sm-10">
           <input type="password" class="form-control" placeholder="Password" id="inputPassword3" />
           </div>
           </div>
 
   
          <button type="submit" id="Lbtn" class="btn btn-primary">Login</button>
          <p style={{color:"azure", marginLeft:"30px", marginTop:"20px" , fontStyle:"cursive"}}>Don't have an account? <br />
           <Link to="/Register" style={{textDecoration:'none' , color:'black' , fontWeight:"600" , marginInlineStart:"25%"}} >Register</Link></p>
          </form>
   
             </div>
             </div>
             
             <Footer />
        </div>
    )
}

export default Login;