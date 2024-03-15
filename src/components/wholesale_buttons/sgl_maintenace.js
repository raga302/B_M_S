import './sgl_maintenace.css';
import { Link } from 'react-router-dom';
import rbi from '../../images/rbi.webp'


function Sgl_Maintenance() {


    return (
        <>
             <div className="container-fluid mt-5 sgl_Maintenence_Main_Box">
                <div className="container">
                    <div className="row">
                        <h2 className="text-dark col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12">SGL Maintenance</h2>
                        <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={rbi} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>Enjoy hassle-free and efficient maintenance of your SGL account
                                        <br/> 
                                        Purchase state and central government securities
                                        <br/>
                                        <br/> 
                                        Get direct credits of redemption to your SGL account
                                        <br/>
                                        <br/> 
                                        Make non-competitive bids for central government dated securities held by the RBI
                                        </p>
                                   
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-1 col-1 col-xs-1">

                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 col-xs-12 needHelpDiv">
                            <h1 className="text-dark">Need Help ?</h1>
                            <h4 className="text-dark">Contact Us</h4>
                            <p>Call us on 1800 202 6161 / 1860 267 6161 (accessible across India)
      Customer travelling overseas can reach us on 022-61606160</p>
                            <h5><Link to='/wholesale'>Back</Link></h5>
                        </div>
                    </div>
                </div>
            </div>

            

        </>
    )
}

export default Sgl_Maintenance;