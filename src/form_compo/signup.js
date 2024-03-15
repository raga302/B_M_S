import { useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useContext } from "react";
import Context from "../Use_Context/context";




function Signup() {
    const [flag, setFlag] = useContext(Context)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
   
    
    const submitHandler = (e) => {
        e.preventDefault();
       if(name === "" || email === "" || password === "" || confirm === ""){
            alert("Please Fill All Input !")
       }else{
        if (password === confirm) {
            $.ajax({
                url:"https://uniquebmsweb.infinityfreeapp.com/PHP/signup_db.php",
                type:"post",
                data:{
                    name:name, email:email, password:password, confirm:confirm
                },
                success:function(data){
                    if(data == 1){
                        setFlag(true)
                        alert("Sign UP  Successfully !")
                       // window.location.href = '/'
                        setName('')
                        setConfirm('')
                        setPassword('')
                        setEmail('')
                    }
                    else{
                        alert("This Email is Already Exist")
                        
                    }
                }

        })
        }
        else{
            alert("Confirmation Password is Incorrect !")
        }
       }
    }

    return(
        <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className=" col-xxl-5 col-lg-6 col-md-6 col-sm-10 col-10 col-xs-10 m-auto bg-dark mt-4 p-2">
                    <div className=" p-3 pt-0 flex-column  border border-light ">
                        <div className="border-bottom mt-2">
                            <h1 className="heading text-light text-center mb-3 border-0">Registration Form</h1>
                        </div>
                        <div className="">
                            <p className="  text-center para"></p>
                        </div>
                        <div className="">
                            <label htmlFor="" className="fw-bold text-light mb-2 mt-3 ">Name</label>
                            <input type="text" value={name} onChange={(event)=> setName(event.target.value)} required className="form-control name" />
                        </div>
                        <div className="">
                            <label htmlFor="" className="fw-bold text-light mb-2 mt-3 ">Email</label>
                            <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)} required  className="form-control email" />
                        </div>
                        <div className="">
                            <label htmlFor="" className="fw-bold text-light mb-2 mt-3 ">Password</label>
                            <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} required className="form-control password" />
                        </div>
                  
                        <div className="">
                            <label htmlFor="" className="fw-bold text-light mb-2 mt-3 ">Confirm Password</label>
                            <input type="password" value={confirm} onChange={(event)=> setConfirm(event.target.value)} required className="form-control  confirm" />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary mt-3 submit" onClick={(event) => submitHandler(event)}>Sign UP</button>
                            <p className="mt-3 text-light">You Have an Account ? <Link to="/login"
                                    className="fw-bold">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};


export default Signup;