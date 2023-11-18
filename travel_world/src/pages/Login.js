 

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import '../../src/LoginPage.css'

function Login(username) {
    const navigate = useNavigate()
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        
        localStorage.setItem("email","gangapullarao22@gmail.com")
        localStorage.setItem("password","9908841081")
        localStorage.setItem("username","GangaPullarao")

        let emailData = localStorage.getItem("email")
        let passwordData = localStorage.getItem("password")
        console.log(emailData,passwordData)

        if(emailData === email && passwordData === password ){
            alert("Login successfull")
            localStorage.setItem("loggedInUser", localStorage.getItem("username",username));
            navigate(require('./Home'))
        }
        else if(email === "" && password === ""){
            alert("Login Failed , plese enter valid details")
        }
        else if(emailData !== email){
            alert("please enter valid email address")
        }
        else if(passwordData !== password){
            alert("please enter valid password")
        }
        
        else{
            alert("Login Failed,You do not have access plese register")
        }

    }


    

    return (
        <div>
            {/* Render Navbar component directly here */}
            <Navbar   />
            <img id='luser' src={require('../images/user.png')}  alt=" "/> 

            <div className="container-lg-md-sm">
                <div className="LFimg">
                    <img src={require('../images/register.png')} className="img-fluid" alt=" " />
                </div>
                <div className="LForm"> 
                    <form className="form"  >
                        <h5 id="Flogin">Login</h5>
                        <br/>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input id="EM" type="email" className="form-control" placeholder="Email"  name="email" value={email} onChange={emailHandler}  />
                            </div>
                        </div>
                        <br />
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input type="password" className="form-control" placeholder="Password" id="PWD"  name="password" value={password} onChange={passwordHandler}/>
                            </div>
                        </div>
                        <br/>

                        <button type="submit" id="Lbtn" className="btn btn-primary" onClick={submitHandler}>Login</button>
                        <p style={{color:"azure", marginLeft:"30px", marginTop:"20px" , fontStyle:"cursive"}}>
                            Don't have an account? <br />
                            <Link to="/Register" style={{textDecoration:'none' , color:'black' , fontWeight:"600" , marginInlineStart:"25%"}} >Register</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
