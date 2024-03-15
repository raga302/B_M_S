import $ from "jquery";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Use_Context/context";




function Login() {
    
   
    const [flag, setFlag] = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const submitHandler = (e) => {
        
        e.preventDefault();
        if(email === "" || password === ""){
            alert("Please Fill Both Input !")
        }
        else{
            $.ajax({
                url: "https://uniquebmsweb.infinityfreeapp.com/PHP/login_db.php",
                type: "POST",
                data: {
                    email:email, password:password
                },
                success:function(data){
                    
                    if (data == 1) {
                        setFlag(true)
                        setEmail("")
                        setPassword("")
                        alert("Login Successfully ! ")
                        
                        
                    }else{
                        alert("Incorrect Email OR Password !")
                       
                        
                    }
                }
            })
        }
    }

    return(
        <>
        <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className=" col-xxl-5 col-lg-6 col-md-6 col-sm-10 col-10 col-xs-10 m-auto bg-dark mt-5 p-2">
                    <div className="  flex-column p-2 border border-light ">
                        <div className="border-bottom mt-2">
                            <h1 className="heading text-light text-center mb-3 border-0">Login Form</h1>
                        </div>

                        
                        <div className="">
                            <label htmlFor="" className="fw-bold text-light mb-2 mt-3 ">Email</label>
                            <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)} required className="form-control email" />
                        </div>

                        <div className="">
                            <label htmlFor="" className="fw-bold text-light mb-2 mt-3 ">Password</label>
                            <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} className="form-control password" />
                        </div>

                        <div className="">
                            <button type="submit" className="btn btn-primary mt-3 submit" onClick={(event) => submitHandler(event)}>Login</button>
                            <p className="mt-3 text-light">You Don't Have Account ? <Link to="/signup" className="fw-bold">Sign
                                    UP</Link></p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
        </>
    )
};

export default Login;