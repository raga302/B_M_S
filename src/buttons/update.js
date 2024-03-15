import { Link } from "react-router-dom";
import './update.css';


function Update() {


    return (
        <>
            <div className="container-fluid mt-5 update_profile">
                <div className="container border text-center  d-flex justify-content-center">
                    <div className="row w-100 d-flex justify-content-between align-items-center ">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className=" bg-dark   d-flex justify-content-center">
                                <h1 className="heading pb-2 pt-2 mt-2 w-75  text-center text-light border-bottom border-top  rounded-2  border-start border-end  ">UPDATE__PROFILE</h1>
                            </div>
                        </div>
                        <div className=" main_Button_box col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-between border">
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 mt-5 mb-3'>
                                <button className='btn btn-success '><Link to='/update-profile/change-acc-type' className='text-light fw-bold fs-5 text-decoration-none change_Btn' >Account Type</Link></button>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 mt-5 mb-3'>
                                <button className='btn btn-success '><Link to='/update-profile/change-mo-no' className='text-light fw-bold fs-5 text-decoration-none change_Btn'>Mobile Number</Link></button>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 mt-5 mb-3'>
                                <button className='btn btn-success '><Link to='/update-profile/change-pass' className='text-light fw-bold fs-5 text-decoration-none change_Btn'>Old Password</Link></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
};


export default Update;