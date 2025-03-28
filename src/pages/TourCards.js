
import React from 'react';
import './Tourcards.css';
import { CiLocationOn } from "react-icons/ci";
// import { FaMagnifyingGlass,FaRegStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

import { Link } from "react-router-dom"; 

 
const TourCards = ({ tour }) => {
  // const { title, city, distance, address, price, maxGroupSize, desc, reviews, avgRating, photo   } = tour;
  const { title, city,avgRating, photo   } = tour;
 return (
  
     <div className="cardcontainer"  style={{width:"100%"   , maxHeight:"800px" , borderRadius:"10px"   }} >
      <div className="card" style={{ width:"220px" , height:"340px"}}>
        <img src={photo} alt={title} className="card-img-top" style={{objectFit:"cover", height:"150px"}}  />
        <div className="cardbody" >
        <p style={{marginTop:"10px"}}><span><CiLocationOn style={{color:'orange' ,marginLeft:"10px" }} /></span>{city}</p>
        <p style={{marginTop:"-40px"}}><span><FaRegStar style={{color:'orange' , marginLeft:'145px'  }} /> </span>{avgRating}</p>
          
         <a href='/BookNow'style={{ textDecoration: 'none', color: 'inherit',  }}>
          <p className='titlehover' style={{paddingLeft:"12px", fontSize:"20px", fontWeight:"600", textDecoration:"none"}}>{title}</p>
          </a>
           
           <p  style={{paddingLeft:"14px", fontWeight:"500"}}><span style={{color:"orange"}}>$990</span>/Per
           <br /> Person
           </p>
 
           <Link to="/BookNow"  >
          <button className="btn btn-warning text-light" style={{height:'40px', marginLeft:"49%" , marginTop:"-100px" }}>Book Now</button>
             </Link>

            
         
          
          
        </div>
      </div>
    </div>
    
  );
  
};

export default TourCards;
