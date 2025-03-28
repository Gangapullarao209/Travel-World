import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone ,BsGithub} from "react-icons/bs";
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";

function Footer(){
    return(
        <div>

             
          <footer className="mt-5">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
                            <div style={{width:"150px"}}>
                                <img className="img-fluid" src={require('../images/logo2.png')} alt="" />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="col-9 d-flex justify-content-evenly"  >
                                 <MdOutlineManageAccounts  style={{width:'16%' , height:'16%'}} />
                                < BsGithub  style={{width:'11.5%' , height:'11.5%'}}  />
                                < BiLogoLinkedin  style={{width:'12%' , height:'12%'}}  />
                                
                                < BiLogoInstagram  style={{width:'14%' , height:'12%'}}  />
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
                            <h6>Discover</h6>
                            <p>Home</p>
                            <p>About</p>
                            <p>Tours</p>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
                            <h6>Quick Links</h6>
                            <p>Gallery</p>
                            <p>Login</p>
                            <p>Register</p>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
                            <h6>Contact</h6>
                            <p> <span>< IoLocationOutline style={{marginRight:'10px', color:'orange'}}/></span>Address : <p style={{ position:'absolute',marginLeft:'100px', marginTop:'-30px', fontSize:'14px'}}>Kurnool,<br />Andhra Pradesh</p></p>
                            <p> <span><AiOutlineMail style={{marginRight:'10px', color:'orange'}} /></span> Email : <p style={{ position:'absolute',marginLeft:'90px', marginTop:'-20px', fontSize:'14px'}}>gangapularao22@gmail.com</p></p>
                            <p> <span><BsTelephone style={{marginRight:'10px', color:'orange'}} /></span> Phone : 9908841081</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-muted mt-5 mb-4">Copyright 2023, Design and developed by Ganga Pullarao. All rights reserved</p>
          </footer>



        </div>
    )
}

export default Footer