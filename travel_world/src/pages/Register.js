import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import '../../src/LoginPage.css'

 
function Register(){

    return(
        <div>
            <Navbar />
            <img id='luser'  src={require('../images/user.png')} /> 

            <div class="container-lg-md-sm">
            
             <div className="LFimg">
             <img src={require('../images/register.png')} class="img-fluid" />
             </div>
             <div className="LForm"> 
             <form className="form">
                <h5 id="Flogin" style={{marginLeft:"55px"}}>Register</h5>
                <br/>
                <div class="row mb-3">
           <div class="col-sm-10">
           <input id="lemail" type="email" class="form-control"  placeholder="User Name"  />
           </div>
           </div>    
            <div class="row mb-3">
           <div class="col-sm-10">
           <input id="lemail" type="text" class="form-control"  placeholder="Email"  />
           </div>
           </div>
           <div class="row mb-3">
           <div class="col-sm-10">
           <input type="password" class="form-control" placeholder="Password" id="inputPassword3" />
           </div>
           </div>
 
   
          <button type="submit" id="Lbtn" class="btn btn-primary">Create Account</button>
          <p style={{color:"azure", marginLeft:"30px", marginTop:"20px" , fontStyle:"cursive"}}>Already have an account? <br />
           <Link to="/Login" style={{textDecoration:'none' , color:'black' , fontWeight:"600" , marginInlineStart:"25%"}} >Login</Link></p>
          </form>
   
             </div>
             </div>
             
             <Footer />
        </div>
    )
}

export default Register;