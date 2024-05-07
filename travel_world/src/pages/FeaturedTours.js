import React from "react";
import '../../src/Homepage-carousel.css'

import { FaMagnifyingGlass,FaRegStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiMapPinTimeLine,RiGroupLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom"; 




function FeatureTours(){
    return(
        <div>


<div className="container mt-5">
           
          </div>

          <div className="container">
            <div className="grid">
                <div className="row">
                    
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3 mb-4">
                        <div className="card shadow-lg">
                            <div style={{height:"200px"}}>
                                <img  style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img03.jpg') } alt="" />
                                {/* <span style={{position:"relative" ,top:"-30px",left:"188px"}} className="btn btn-sm btn-warning">Featured</span> */}
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> Bangkok</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>4.5</p>

                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                                <h5>Snowy Mountains, Thailand</h5>
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>
                                 </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="card shadow-lg">
                            <div style={{height:"200px"}}>
                                <img style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img06.jpg') } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> Tokyo</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>4.5</p> 
                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                               < h5>Cherry Blossoms <br /> Spring</h5>
                                </Link>
                                
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="card shadow-lg">
                            <div style={{height:"200px"}}>
                                <img style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img02.jpg') } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> Bali</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>Not rated</p>
                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                                <h5 >Bali,Indonasia</h5>
                                 </Link>
                                
                                <br />
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>                        
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="card shadow-lg">
                            <div style={{height:"200px"}}>
                                <img style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img07.jpg') } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> Paris</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>Not rated</p>
                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                                <h5>Holmen Lofoten, <br /> France</h5>
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>
                                    </div>
                            </div>
                        </div>
                    </div>

                    
                </div>



                <div className="row mt-4">
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="card shadow-lg">
                            <div style={{height:"200px"}}>
                                <img style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img04.jpg') } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> Phuket</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>4.7</p>
                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                                <h5>Beautiful Sunrise,Thailand</h5>
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>                         
                                     </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="card shadow-lg">
                            <div style={{height:"200px"}}>
                                <img style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img05.jpg') } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> Landon</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>4.4</p>
                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                                <h5>WestMinister,<br />Bridge</h5>
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>                               
                                     </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="card shadow-lg">
                            <div style={{height:"200px"}}>
                                <img style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img05.jpg') } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> Bali</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>Not rated</p>
                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                                <h5>Nusa Pendia Bali,<br />Indonasia</h5>
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>                            
                                     </div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3" >
                        <div className="card shadow-lg" >
                            <div style={{height:"200px"}}>
                                <img style={{height:"200px"}} className="img-fluid rounded" src={require('../images/tour-img01.jpg') } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span><CiLocationOn style={{color:'orange' }} /></span> London</p>
                                    <p><span><FaRegStar style={{color:'orange' }} /> </span>Not rated</p>
                                </div>
                                <Link to="/BookNow"  style={{textDecoration: 'none', color: 'inherit',}}>
                                <h5>Heelo world</h5><br />
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p><span><b className="text-warning">$ 990 </b></span>/per<br /> person</p>
                                    <Link to="/BookNow">
                                    <button className="btn btn-warning text-light" style={{height:'40px'}}>Book Now</button>
                                    </Link>                               
                                     </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
          </div>















        </div>
    )
}


export default FeatureTours