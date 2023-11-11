import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";

class BookNow extends React.Component{






    render(){
        return(
            <div>
                <Navbar />
                <div class="container">
                  <div class="row">
                 
                  <div  style={{marginTop:"100px"}}>
        <div className='d-flex justify-content-center gap-4 row'>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div style={{border:"1px solid grey"}} className="mb-4"> 
         <img className="img-fluid" src={require('../images/tour-img06.jpg') }  alt="" />
         <div className="p-3">
             <h2>title</h2>
             <div>
                 <p>reviews </p>
             </div>
             <div className="d-flex justify-content-evenly gap-5">
                 <p>city</p>
                 <p>price</p>
                 <p>distance</p>
                 <p>maxGroupSize</p>
             </div>
             <h5>Description</h5>
             <p>toursData</p>
         </div>
    </div>
     
     <div className="p-2 shadow-sm" style={{border:"1px solid grey"}}>
         <h5>Reviews</h5><br /><br />
         <div style={{border:"1px solid grey",borderRadius:"20px"}} className="d-flex justify-content-between p-1 tourseparate">
             <textarea cols="70" rows="1" style={{marginLeft:"5px",border:"none",outline:"none"}} type="text" placeholder="Share your thoughts" />
             <button style={{borderRadius:"20px"}} className="btn btn-warning text-light"><b>Submit</b></button>
         </div>
     </div>
 </div>


    <div style={{border:"1px solid grey",height:"fit-content"}} className="col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
           <span className="display-6"><b>99</b></span><span>/Per person </span>
            <hr />
            <h5>Information</h5>

                <form className="border 1px solid grey p-4 tourseparate">
                    <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
                    </div>
                    <hr />
                    <div class="form-group">
                    <input type="tele" class="form-control" id="exampleInputPassword1" placeholder="Phone Number"/>
                    </div>
                    <hr />
                    <div className="d-flex">
                    <input type="date" class="form-control w-50"  />
                    <input type="number" class="form-control w-50" placeholder="Number of Guests"  />
                    </div>
                </form>


      <div className="d-flex justify-content-between mt-3 tourseparate">
        <p>99 x <input  type="number" style={{ width: "50px" }}  /> Person</p> 
        <input type="text"  readOnly style={{ width: "50px" }}/>
      </div>

      <div className="d-flex justify-content-between p-1">
        <p>Service charges</p>
        <p>10</p>
      </div>

      <div className="d-flex justify-content-between">
        <p><b>Total</b></p>
        <p><b>totalCost</b></p>
      </div>

      <div className="text-center mt-3">
        <button style={{borderRadius:"20px"}} type="submit" class="btn btn-warning w-75 text-light"><b>Book Now</b></button>
      </div>

    </div>

        </div>

         
    </div>
                  
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default BookNow