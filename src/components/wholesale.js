import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import './wholesale.css'
import hdfc5 from '../images/hdfcl-Banner5.jpg'
import hdfc6 from '../images/hdfcl-Banner6.jpg'
import hdfc from '../images/hdfcl-Banner.jpg'
import corporate from '../images/corporate1.jpg'
import cash from '../images/cash.jpg'
import piggy from '../images/piggy.jpeg'
import piggy2 from '../images/piggy2.jpg'
import advisory from '../images/advisory.jpg'
import depositry from '../images/depositry.webp'
import sgl_mainetence from '../images/sgl.jpg'
import atmtieups from '../images/atmtieup.jpg'


function Wholesale() {







    return (
        <>

            <div className="container-fluid mt-2" data-aos="fade-right">
                <div className="container d-flex justify-content-center align-items-center border mainHomeDiv">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex justify-content-end align-items-center border ">
                            <h1 className="text-light w-100 ps-2 pe-2">Welcome To HDFC Bank</h1>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-4 p-0 mx-0">
                <div className="container  ">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  ">
                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active imgDiv">
                                        <img src={hdfc5} class="d-block w-100 " alt="..." />
                                    </div>
                                    <div class="carousel-item imgDiv">
                                        <img src={hdfc} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item imgDiv">
                                        <img src={hdfc6} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                    <span class="visually-hidden ">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <div className='container-fluid hading_Main_Box mt-5'>
                <div className='container card-Div text-center d-flex justify-content-between align-items-center'>
                    
                        
                       
                        <div className='col-xxl-5 col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5 btnDiv pb-2 rounded-bottom' >
                            <button className='btn btn-danger heading_Btn col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'><h3 className='text-light col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'>Corporate Service Provider</h3></button>
                        </div>
                        <div className='col-xxl-5 col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5 btnDiv pb-2 rounded-bottom'> 
                        <button className='btn btn-danger heading_Btn col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'><h3 className='text-light col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'>Financial Service Providers</h3></button>
                        </div>
                  
                </div>
            </div>




            <div className='container-fluid hading_Main_Box mt-5'>
                <div className='container card-Div'>
                    <div className='row'>
                        <div className='col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6 '>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={corporate} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Export Credit</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <Link to="/wholesale/export-credit" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Read More</Link>
                                    </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6'>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={cash} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Management</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <a href="#" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Read More</a>
                                    </div>
                            </div>
                        </div>
                        <div className='card_Margin col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6'>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={piggy} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Membership</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <Link to="/wholesale/sub-membership" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 ">Read More</Link>
                                    </div>
                            </div>
                        </div>
                        <div className='card_Margin col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6'>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={atmtieups} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">ATM Tie-Ups</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <Link to="/wholesale/sub-membership" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Read More</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid mt-5 '>
                <div className='container card-Div text-center d-flex justify-content-between align-items-center'>
                    
                        
                       
                        <div className='col-xxl-5 col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5 btnDiv pb-2 rounded-bottom' >
                            <button className='btn btn-danger  heading_Btn col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'><h3 className='text-light col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'>Investment Banking</h3></button>
                        </div>
                        <div className='col-xxl-5 col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5 btnDiv pb-2 rounded-bottom'> 
                        <button className='btn btn-danger heading_Btn col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'><h3 className='text-light col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12'>Create Trusts</h3></button>
                        </div>
                  
                </div>
            </div>




            <div className='container-fluid mt-5 hading_Main_Box mb-5'>
                <div className='container card-Div'>
                    <div className='row'>
                        <div className='col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6 '>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={piggy2} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Project Appraisal</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <Link to="/wholesale/projext-apraisal" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Read More</Link>
                                    </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6'>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={advisory} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Advisory Services</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <Link to="/wholesale/projext-apraisal" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Read More</Link>
                                    </div>
                            </div>
                        </div>
                        <div className='card_Margin col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6'>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={depositry} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Depository Services</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <Link to="/wholesale/depository-services" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 ">Read More</Link>
                                    </div>
                            </div>
                        </div>
                        <div className='card_Margin col-xxl-3 col-lg-3 col-md-3 col-sm-6 col-6 col-xs-6'>
                            <div class="card p-2 pb-0 border border-dark" >
                                <img src={sgl_mainetence} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">SGL Maintenance</h5>
                                        <p class="card-text">Some quick example text to build</p>
                                        <Link to="/wholesale/sgl-maintenance" class="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Read More</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
};

export default Wholesale;