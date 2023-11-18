 
import React, { useState } from 'react';
import TourCards from './TourCards';
import tours from '../data/tours'; // Update with your actual file path
import SearchBar from './searchbar';
import "./Tourcards.css"

const TourList = () => {
  const [filteredTours, setFilteredTours] = useState(tours);

  const handleSearch = (filters) => {
    // Implement your search logic here based on the provided filters
    const filteredResults = tours.filter((tour) => {
      return (
        tour.city.toLowerCase().includes(filters.city.toLowerCase()) &&
        (filters.distance === '' || tour.distance <= parseInt(filters.distance, 10)) &&
        (filters.maxGroupSize === '' || tour.maxGroupSize <= parseInt(filters.maxGroupSize, 10))
      );
    });

    setFilteredTours(filteredResults);
  };

  return (
    <div className="container1"  style={{width:"100%",marginLeft:"6%",  height:"650px"}} >
       
      <SearchBar onSearch={handleSearch} />
     <div style={{marginTop:"430px", marginLeft:"50px"}}> <span style={{background:"orange", paddingTop:"8px",paddingBottom:"8px", borderRadius:"22px", paddingLeft:"15px",paddingRight:"15px"}} className="dance-font h3">Explore</span>
            <h2 className="mt-3 mb-5 ">Our Featured tours</h2>
      </div>
      <div className="column1" style={{display:"flex", width:"100%" , gap:"20px" ,  marginLeft:"5%"}}  >
        {filteredTours.slice(0, 4).map((tour) => (
          <div key={tour.id}  >
            <TourCards tour={tour} />
          </div>
        ))}
      </div>
      <div className="column2" style={{display:"flex" , width:"100%", gap:"20px", marginTop:"5%",marginLeft:"5%"}} >
        {filteredTours.slice(4).map((tour) => (
          <div key={tour.id} >
            <TourCards tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourList;
