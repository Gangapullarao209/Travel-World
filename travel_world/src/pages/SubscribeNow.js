import React from "react";
import '../../src/Homepage-carousel.css'



function SubscribeNow(){
    return(
        <div>
            
          <div style={{backgroundColor:"lightblue"}} className="p-5 mt-5">
            <div className="container">
                <div className="row d-flex  align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h1>Subscribe now for usefull travelling information </h1>
                       <div className="bg-light d-flex justify-content-between p-2 mt-4" style={{borderRadius:'10px'}}>
                            <span className="text" >
                                Enter Your Email
                            </span>
                            <button className="btn btn-warning text-light">Subscribe</button>
                       </div>
                       <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae aliquid quasi eaque?</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img className="img-fluid" src={require('../images/male-tourist.png')} alt="" />
                    </div>
                </div>

            </div>
            </div>



        </div>
    )
}

export default SubscribeNow