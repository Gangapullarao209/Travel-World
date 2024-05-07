import React from "react";
import '../../src/Homepage-carousel.css'
import LocationFilter from "./LocanFilter";
import Navbar from "./Header";
import FeatureTours from "./FeaturedTours";
import SubscribeNow from "./SubscribeNow";
import Footer from "./Footer";
import TourList from "./TourList"
 
import { Container,Row, Button, Col, section } from "reactstrap";
 
// fontawsome icons
import { FaMagnifyingGlass,FaRegStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiMapPinTimeLine,RiGroupLine } from "react-icons/ri";
// import { CiLocationOn } from "react-icons/ci";

 






 function Home(){

    return(
        <div>
            <Navbar />
            <div className="container" style={{marginTop:"100px"}}>
                <div className="container" >
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5">
                               <div className="d-flex">
                                    <button style={{borderRadius:"30px"}} className="btn btn-warning dance-font"><span className="dance-font h5">Know before you go</span></button>
                                    <div style={{height:"35px",width:"35px"}}><img className="img-fluid" src={require('../images/world.png')} alt="" /></div>                                                      
                               </div>
                            <h2 className="mt-4">Travelling opens <br/> the doors to <br /> creating <span className="text-warning">memories</span></h2>
                            <p className="mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur dolore nam modi labore facere id ut veniam itaque quasi, sunt unde? Mollitia id soluta animi repudiandae omnis quibusdam illo blanditiis possimus ex sint cupiditate corrupti labore non, qui est porro excepturi quasi labor.</p>
                        </div>

                        <div className=" col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-evenly" style={{width:'55%'}}>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 hero-image">
                                 <img className="img-fluid mt-4 rounded border border-warning" src={require('../images/hero-img01.jpg') } alt="" />
                            </div>

                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 hero-image ">
                                <video className="mt-5 border border-warning ratio object-fit-cover  "  autoPlay controls  width="130px" height="300px" src={require('../images/hero-video.mp4')}></video>
                            </div>
                            
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 hero-image">
                                 <img style={{marginTop:"110px", marginLeft:"20px"}} className="img img-fluid rounded border border-warning" src={require('../images/hero-img02.jpg') } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Location Filter */}
            <div style={{ border:"none", height:"100px", width:"100%"}}>
         
            </div>
            
            {/* <LocationFilter /> */}
            
           



            {/* what we serve */}

            <div className="container mt-5" >
                <div className="grid">
                    <div className="row d-flex justify-content-center gap-4">
                        <div className="col-6 col-sm-6 col-md-2 col-lg-2">
                            <p className="text-danger mt-5 dance-font h4" >What we serve</p>
                            <h3>We offer our best services</h3>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 mt-5 weather shadow-lg">
                            <div style={{height:"65px",width:"65px",borderRadius:"50%"}} className="bg-warning p-3 mb-2">
                                <img className="img-fluid bg-warning" src={require('../images/weather.png') } alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Calculate weather</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 mt-5 guide shadow-lg ">
                            <div style={{height:"65px",width:"65px",borderRadius:"50%"}} className="bg-warning p-3 mb-2">
                                <img className="img-fluid bg-warning" src={require('../images/guide.png') } alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Best tour guide</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3 col-lg-3 p-3 mt-5 customization shadow-lg">
                            <div style={{height:"65px",width:"65px",borderRadius:"50%"}} className="bg-warning p-3 mb-2">
                                <img className="img-fluid" src={require('../images/customization.png') } alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Customization</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Tours */}
            {/* <FeatureTours /> */}
            <div style={{border:" none", height:"500px", width:"100%"}}>

            </div>

            <TourList />


            { /* featured tour section start */}
            
            




           
          {/* experience */}

          <div className="container experience" style={{marginTop:"700px"}}>
            <div className="grid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                    <br /><br /><br />
                        <button style={{borderRadius:"30px"}} className="btn btn-warning mb-5"> <span className="dance-font h5">Experience</span></button>
                        <h1 className="mb-5">With our all experience <br /> we will serve you</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, cupiditate.</p>
                        <div className="d-flex justify-content-evenly mt-5">
                            <div>
                                <button className="btn btn-warning p-3 mb-2 text-light" ><b>12k+</b></button>
                                <p>Successfull <br /> Trips</p>
                            </div>
                            <div>
                                <button className="btn btn-warning p-3 mb-2 text-light" ><b>2k+</b></button>
                                <p>Regular <br /> clients</p>
                            </div>
                            <div>
                                <button className="btn btn-warning p-3 mb-2 text-light" ><b>15</b></button>
                                <p>Years <br /> Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                    <br /><br /><br />
                        <img className="img-fluid" src={require('../images/experience.png')} alt="" />

                    </div>
                </div>
            </div>
          </div>

          {/* gallery */}

          <div className="container mt-5">
            <button style={{borderRadius:"30px"}} className="btn btn-warning mt-5 mb-4"><span className="dance-font fw-bold h5">Gallery</span></button>
            <h2 className="mb-5">Visit our customers tour gallery</h2>
          </div>

          <div className="container gallery">
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded" src={require('../images/gallery-01.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded" src={require('../images/gallery-02.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded" src={require('../images/gallery-03.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div> 
                        <img className="img-fluid rounded" src={require('../images/gallery-04.jpg')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded mt-4" src={require('../images/gallery-05.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img style={{marginTop:"-35px"}} className="img-fluid rounded" src={require('../images/gallery-06.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div>
                        <img className="img-fluid rounded mt-4" src={require('../images/gallery-07.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div> 
                        <img style={{marginTop:"-45px"}} className="img-fluid rounded" src={require('../images/gallery-08.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
          </div>

          
        {/* <!-------------------- Clients Love ----------------------> */}


{/* <!-------------------- Clients Love ----------------------> */}

 <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel" style={{justifyContent:'center' , width:'90%',marginLeft:'90px', height:'400px' ,  background:'none'}} >
 <ol class="carousel-indicators">
    <button type="button"  id="cb1"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{border:'1px solid black', borderRadius:'10px', width:'8px', height:'8px'}} ></button>
    <button type="button" id="cb2" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{border:'1px solid black', borderRadius:'10px', width:'8px', height:'8px'}}></button>
    <button type="button" id="bd3" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{border:'1px solid black', borderRadius:'10px', width:'8px', height:'8px'}}></button>
  </ol> 
  
  <div class="carousel-inner" >
  <div id="CL">
    <h4>ClentsLove</h4>
</div><br />
<h5>What our clients say about us</h5>
    <div class="carousel-item active" style={{ marginLeft:'30px', scrollBehavior:'smooth'}}>
    <div className='uResponse'>
        <div id='user1'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-1.jpg')} alt='user1'/>
           <div><h5>John Deo</h5><p>Customer</p></div>
         </div>
      </div>

      <div id='user2'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-2.jpg')} alt='user2'/>
           <div><h5>Cathrin Jo</h5><p>Customer</p></div>
         </div>
      </div>

      <div id='user3'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-3.jpg')} alt='user3'/>
           <div><h5>Peter Alice</h5><p>Customer</p></div>
         </div>
      </div>
      </div>
    </div>
    <div class="carousel-item" style={{ marginLeft:'30px',  transitionDuration:'0.1s', scrollBehavior:'smooth'}}>
    <div className='uResponse'>
        <div id='user1'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-2.jpg')} alt='user1'/>
         <div><h5>Cathrin Jo</h5><p>Customer</p></div>
         </div>
      </div>

      <div id='user2'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-3.jpg')} alt='user2'/>
         <div><h5>Peter Alice</h5><p>Customer</p></div>
         </div>
      </div>

      <div id='user3'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-1.jpg')} alt='user3'/>
         <div><h5>John Deo</h5><p>Customer</p></div>
         </div>
      </div>
      </div>
    </div>
    <div class="carousel-item" style={{ marginLeft:'30px', transitionDuration:'0.1s', scrollBehavior:'smooth'}}>
    <div className='uResponse'>
        <div id='user1'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-3.jpg')} alt='user1'/>
         <div><h5>Peter Alice</h5><p>Customer</p></div>
         </div>
      </div>

      <div id='user2'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-1.jpg')} alt='user2'/>
         <div><h5>John Deo</h5><p>Customer</p></div>
         </div>
      </div>

      <div id='user3'><p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum, ea repudiandae 
            recusandae nulla accusamus neque mollitia nesciunt! Officiis similique earum qui distinctio quasi vero eligendi necessitatibus tempora nam voluptatum?</p>
         <div id='uinfo'><img src={require('../images/ava-2.jpg')} alt='user3'/>
         <div><h5>Cathrin Jo</h5><p>Customer</p></div>
         </div>
      </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon-visibility-hidden" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon-visibility-hidden" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



          {/* subscribe now */}
          <SubscribeNow />
 

          
            <Footer />
        </div>
    )
}

export default Home;