import React from "react";
 
import Navbar from "./Header";
import Footer from "./Footer";
import LocationFilter from "./LocanFilter";
import FeatureTours from "./FeaturedTours";
import SubscribeNow from "./SubscribeNow";
 





function Tours(){

    return(
        <div>
             <Navbar />
            <div className="card" style={{width:"100%" , marginTop:'80px', position:'relative'}}>                       
            <img src={require('../../src/images/tour.jpg')} alt="Your Image" class="img-fluid"  style={{height:'380px', zoom:'50px'}}/>
            <p  style={{ fontSize:'40px', fontStyle:'Arial Bold',   color:'oldlace',position:'absolute',marginLeft:'43%', marginTop:'155px'}}>ALL Tours</p>        
            </div><br/>
           {/* ;ocation Filter */}
            <div>
                <LocationFilter />
            </div>
            {/* Featured Tours */}
            <FeatureTours />
            {/* Featured tours ends here */}
            <SubscribeNow />

            <div >
                <Footer />
            </div>
             
        </div>
    )
}

export default Tours;