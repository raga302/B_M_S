import { Link } from 'react-router-dom';
import './deposit_popup.css';


function Deposit_Popup() {


    return (
        <>
        
            <div className="container-fluid d-flex  justify-content-center">
                <div className="container w-75 border bg-dark mt-5 text-center">
                    <div className="row  d-flex  justify-content-center">
                        <h1 className=" pb-3 mt-2">Thank You</h1>
                        <h4 className="text-light pb-3">Your Amount is Successfully Deposit !</h4>
                        <button className=" fs-2 mb-3 text-center fw-bold btn btn-primary ok_button " ><Link className='text-light text-decoration-none ' to='https://uniquebmsweb.infinityfreeapp.com/'>OK</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Deposit_Popup;
