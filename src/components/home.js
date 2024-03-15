import { Link } from 'react-router-dom';
import './home.css';
import { event } from 'jquery';
import React, { useContext } from "react";
import Context from "../Use_Context/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import hdfc1 from '../images/hdfcl-Banner1.jpg'
import hdfc2 from '../images/hdfcl-Banner2.jpg'



function Home() {


    const [flag] = useContext(Context)

    const ClickHandler = (e) => {
        e.preventDefault()
        if (!flag) {
            alert("Please Login OR SignUP !")
            window.location.href = '/login'
            return;
        }

    }


    return (
        <>

            <div className="container-fluid mt-2 text-center" data-aos="fade-right">
                <div className="container    d-flex justify-content-center align-items-center border mainHomeDiv">
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 p-0 pb-0 headingDiv  border ">
                            <h1 className="text-light pb-0  px-4 py-1">Welcome To HDFC Bank</h1>


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
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active imgDiv">
                                        <img src={hdfc2} class="d-block w-100 " alt="..." />
                                    </div>
                                    <div class="carousel-item imgDiv">
                                        <img src={hdfc2} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item imgDiv">
                                        <img src={hdfc2} class="d-block w-100" alt="..." />
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


            <div className="container-fluid mt-4" data-aos="fade-right">
                <div className="container d-flex justify-content-center align-items-center border">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex justify-content-end align-items-center border ">
                            <h1 className="text-dark option w-100  pt-2 ">CRUD Oprations with User Account</h1>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 button_container_fluid" data-aos="zoom-in-center" >
                <div className="container border text-center ">
                    <div className="row w-100 d-flex justify-content-between align-items-center ">
                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success ' onClick={(e) => ClickHandler(e)}><Link to='/create' className='text-light fw-bold  text-decoration-none btn_link' >Create Account</Link></button>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success '><Link to='/deposit' className='text-light fw-bold  text-decoration-none btn_link'>Deposit Amount</Link></button>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success '><Link to='/withdraw' className='text-light fw-bold  text-decoration-none btn_link'>Withdraw Amount</Link></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid mt-3 " data-aos="zoom-in-center">
                <div className="container border text-center ">
                    <div className="row w-100 d-flex justify-content-between align-items-center">
                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success ' ><Link to='/netbankingactivation' className='text-light fw-bold  text-decoration-none btn_link' >Net Banking <FontAwesomeIcon icon={faCircleCheck} /></Link></button>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success '><Link to='/netbankingdeactivation' className='text-light fw-bold  text-decoration-none btn_link'>Net Banking <FontAwesomeIcon icon={faCircleXmark} /></Link></button>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success '><Link to='/atmactivation' className='text-light fw-bold  text-decoration-none btn_link'>ATM Activate <FontAwesomeIcon icon={faCircleCheck} /></Link></button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid mt-3" data-aos="zoom-in-center">
                <div className="container border text-center ">
                    <div className="row w-100 d-flex  justify-content-between align-items-center ">
                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success ' ><Link to='/atmdeactivation' className='text-light fw-bold  text-decoration-none btn_link' >ATM DeActivate</Link></button>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success '><Link to='/update-profile' className='text-light fw-bold  text-decoration-none btn_link'> Update Profile </Link></button>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-4 col-4 col-xs-4'>
                            <button className='btn btn-success '><Link to='/checkdetails' className='text-light fw-bold  text-decoration-none btn_link'>CHECK DETAILS  </Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5" data-aos="fade-left">
                <div className="container border text-center ">
                    <div className="row   d-flex justify-content-around align-items-center">
                        <div className='col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 last_image_div'>
                        <img src='https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b98aa23b-8b7d-49a1-bc06-d9a5a8559870/Common/Campaign/Images/2022/Dec-2022/06/Loans/Personal/NPA-Dec/667-210.jpg'  />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;