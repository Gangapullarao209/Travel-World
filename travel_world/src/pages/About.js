import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import '../../src/About.css'


function About(){

    return(
        <div>
            <Navbar />
            <div className="hdr">
                <h1>Header</h1>
            </div>
            <div class="container-lg-md-sm" >
            
            <div className="LFimg">
           <div style={{}}> <img src={require('../images/Profilepic-01.jpeg.jpg')} class="img-fluid"  alt="ima" style={{height:'60%', width:'58%' , borderRadius:"100px" , marginLeft:'60px', marginTop:'-20px'}}/>
           <h5 style={{marginLeft:"33px" ,paddingTop:'15px', color:"orange"}}>Gumma Ganga Pullarao</h5>
           <h6 style={{marginLeft:"80px"}}>Designation: </h6>
           <p style={{marginLeft:"70px"}}>Frontend Developer</p>
           </div>
            </div>
            <div className="LForm" style={{backgroundColor:"olive"}}> 
            <form className="form">
               <h5 id="Flogin">Profile</h5>
               <br/>
           <div class="row mb-3">
          <div class="col-sm-10">
          <a class="nav-link" href="https://www.linkedin.com/in/ganga-pullarao-18b939214/">
          <button type="button" id="Lbtn" class="btn btn-primary">LinkedIn</button> 
               </a>
         </div>
          </div>
          <div class="row mb-3">
          <div class="col-sm-10">
          <a class="nav-link" href="https://github.com/Gangapullarao209?tab=repositories">
          <button type="button" id="Lbtn" class="btn btn-primary">GitHub</button> 
               </a>    
                </div>
          </div>

  
          <a class="nav-link" href="https://www.naukri.com/mnjuser/profile?id=&altresid">
          <button type="button" id="Lbtn1" class="btn btn-primary">Naukari</button> 
               </a>           
                </form>
  
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;