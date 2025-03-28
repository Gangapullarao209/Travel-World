// SearchBar.js
import React, { useState } from 'react';
import "./searchbar.css"


import { IoLocationOutline } from "react-icons/io5";
import { RiMapPinTimeLine,RiGroupLine } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";



 
const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({ city: '', distance: '', maxGroupSize: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="mb-3 " style={{borderRight:"3px solid #CFD8DC" , height:"70%", marginTop:"10px",width:"29.5%" }}>
      <p> <span><IoLocationOutline style={{color:'red', marginRight:'10px' }} /></span> Location</p>       
       <input type="text" placeholder="Where are you going ?" className="form-control" id="city" name="city" value={filters.city} onChange={handleChange} style={{width:"190px" , border:"none" , marginTop:"-13px", marginLeft:"10px" , fontSize:"15px", fontStyle:"arial"}} />
      </div>
      <div className="mb-3" style={{borderRight:"3px solid #CFD8DC" , height:"70%", marginTop:"10px", }}>
      <p><span> <RiMapPinTimeLine style={{color:'red', marginRight:'10px' }}  /></span> Distance</p>
        <input type="number" placeholder="Distance k/m"  className="form-control" id="distance" name="distance" value={filters.distance} onChange={handleChange} style={{border:"none", marginTop:"-13px", marginLeft:"10px" ,width:"80%" ,fontSize:"15px", fontStyle:"arial"}}/>
      </div>
      <div className="mb-3">
      <p><span><RiGroupLine  style={{color:'red', marginRight:'10px' }} /></span> Max People</p>
        <input type="number" placeholder="0" className="form-control" id="maxGroupSize" name="maxGroupSize" value={filters.maxGroupSize} onChange={handleChange} style={{border:"none", marginTop:"-13px", marginLeft:"10px" , fontSize:"15px", fontStyle:"arial", width:"50%" , textDecoration:"none"}}/>
      </div>
     <button type="submit" className="btn " style={{height:'40px',width:'40px', marginLeft:"-18px" ,marginTop:'19px' , padding:'5px', backgroundColor:'orange', borderBottomLeftRadius:'5px',borderTopRightRadius:'5px', borderTopLeftRadius:'10px', borderBottomRightRadius:'10px', border:"none"}}>
      <FaMagnifyingGlass  style={{marginLeft:'0px', color:'white', height:'80%', width:'80%'}} /> </button> 
        
    </form>
  );
};

export default SearchBar;
