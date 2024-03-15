import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Use_Context/context";

function Profile() {
    
    const [flag, setFlag] = useContext(Context)

    const logoutHandler = () => {
        setFlag(false)
        alert("Logout Successully !")
        
    }
    return(
        <>
            <div className="container-fluid">
                <div className="container d-flex justify-content-end align-items-center border">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex justify-content-end align-items-center border ">
                            <button className="btn btn-primary m-2"><Link to="/signup" className="text-light">SignUP</Link></button>
                            <button className="btn btn-primary"><Link to="/login" className="text-light">Login</Link></button>
                            <button className="btn btn-danger ms-2" onClick={logoutHandler}><Link to="/" className="text-light" >Logout</Link></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;