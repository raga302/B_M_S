import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from '../images/hdfc.png'
import './nav.css';
import { useRef } from "react";

function Nav() {

  /*
const enterHandler = () => {
  let uldiv =  document.querySelector('.uldiv')
  uldiv.style.display="flex"
  uldiv.style.z
  uldiv.style.position="absolute"
  uldiv.style.height="30%"
  uldiv.style.border="1px solid black"

   alert("Done")
  ulRef.current.style.display = "flex";
  ulRef.current.style.position = "absolute";
  ulRef.current.style.width = "300px";
  ulRef.current.style.height = "100%";
 
}*/

    return (
      <div className=" container-fluid mt-2 text-center">
        <div className="container  text-center">
          <div className="row">
            <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-10 col-10 col-xs10 border border-danger mainNavbarDiv d-flex justify-content-between align-items-center flex-row ">

                <div className="  me-2  col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 imgMainDiv text-center border border-success">
                <Link to="/" className="w-75"><img className="logo col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12"  src={logo}/></Link>
                </div>
                <div className=" col-lg-9 col-md-9 col-sm-9 col-9 col-xs-9 ulMainIDiv  text-center border border-success">
                <ul className="ps-2  uldiv" >
                    <li className="list "><Link to="/" className="link fw-bold text-dark " >Home</Link></li>
                    <li className="list "><Link to="/money-transfer" className="link fw-bold text-dark ">Transfer</Link></li>
                    <li className="list "><Link to="/wholesale" className="link fw-bold text-dark ">Wholesale</Link></li>
                    <li className="list me-3  "><Link to="/aboutus" className="link fw-bold text-dark ">About</Link></li>
                  
                </ul>
               
                </div>
            </div>
  
            <div className=" col-xxl-4 col-lg-4 col-md-4 col-sm-2 col-2 col-xs-2 iconDiv   border border-danger d-flex justify-content-end align-items-center">
                
                <div className="col-lg-12 col-md-12  col-sm-12 col-12 col-xs-12 border text-end  iconMiniDiv">
                 <Link to="/profile" className="fs-3  text-dark " ><FontAwesomeIcon icon={faUser}  /> </Link>
                </div>
                
            
            </div>
            
          </div>
        </div>
      </div>

      
    );
  }
  
  export default Nav;
  