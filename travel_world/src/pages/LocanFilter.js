import React, { useRef } from "react";
// import '../../src/Homepage-carousel.css'
// fontawsome icons
import { FaMagnifyingGlass,FaRegStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiMapPinTimeLine,RiGroupLine } from "react-icons/ri";
// import { CiLocationOn } from "react-icons/ci";
 




function LocationFilter(){

    const locationRef=useRef('')
    const distanceRef=useRef('0')
    const maxGroupsizeRef=useRef('0')

    const searchhandler=()=>{
     
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupsize = maxGroupsizeRef.current.value


        if(location ==='' || distance ==='' || maxGroupsize ===''){
            return alert('All fields are required')
        }





    }






    return(
        <div>
             <div className="container mt-5">
                <div className="grid">
                    <div className="container">
                    <div className=" col-12 col-sm-12 col-md-10 col-lg-10 row shadow-lg d-flex justify-content-evenly p-2 locationBar">
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                                <p> <span><IoLocationOutline style={{color:'red', marginRight:'10px' }} /></span> Location</p>
                                <input  type="text" placeholder="Where are you going ?" ref={locationRef} />
                        </div>

                        <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                                <p><span> <RiMapPinTimeLine style={{color:'red', marginRight:'10px' }}  /></span> Distance</p>
                                <input  type="number" placeholder="Distance k/m"  ref={distanceRef}/>
                        </div>

                        <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                                <p><span><RiGroupLine  style={{color:'red', marginRight:'10px' }} /></span> Max People</p>
                                <input className="w-75"  type="number" placeholder="0" ref={maxGroupsizeRef} />
                        </div>
                        <div className="col-1 col-sm-3 col-md-2 col-lg-1" style={{marginTop:'10px'}} >
                        <span type="Submit" onClick={searchhandler} className="btn btn-warning" style={{height:'40px',width:'40px',marginTop:'2px' , padding:'5px', backgroundColor:'orange', borderBottomLeftRadius:'5px',borderTopRightRadius:'5px', borderTopLeftRadius:'10px', borderBottomRightRadius:'10px'}}>
                        <FaMagnifyingGlass  style={{marginLeft:'2px', color:'white', height:'70%', width:'70%'}} />
                        </span>

                          </div>
                    </div>
                    </div>
                </div>
            </div>








        </div>
    )
}

export default LocationFilter