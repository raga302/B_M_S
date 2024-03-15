

import { useState } from "react";
import $ from 'jquery'


function ChangePassword() {

    const [accountNumber, setAccountNumber] = useState("")
    const [password, setPassword] = useState("")
    const [new_Password, setNew_Password] = useState("")


    const SubmitHandler = (e) => {
        e.preventDefault()
        if (accountNumber == "" || password == "" || new_Password == "") {
            alert("Please Enter All Informtion !")
        } else {

            $.ajax({
                url: "https://uniquebmsweb.infinityfreeapp.com/PHP/change_password.php",
                type: "POST",
                data: {
                    accountNumber: accountNumber, password: password, new_Password: new_Password
                },
                success: function (getData) {
                    if (getData == 1) {
                        alert("Your Password Successfully Updated !")
                        window.location.href = '/'
                    } else if (getData == 0) {
                        alert("Invalid Information Try Again !")
                    } else {
                        alert('You Have Already this Password ' + getData + ' !')
                    }
                }
            })



        }

    }


    return (
        <>
            <div className="container-fluid d-flex  justify-content-center">
                <div className="container border main mt-5 d-flex flex-column justify-content-center ">
                    <div className="row d-flex  justify-content-center">
                        <div className=" bg-dark   d-flex justify-content-center">
                            <h1 className="heading pb-2 pt-2 mt-2 w-75  text-center text-light border-bottom border-top  rounded-2  border-start border-end  ">Change_Password</h1>
                        </div>
                        <div className="mainDiv col-lg-6 col-md-9 col-sm-9 col-9 col-xs-9   mt-2 p-2">
                            <div className=" p-3 pt-0 flex-column  border border-light ">

                                <div className="">
                                    <p className="  text-center para"></p>
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Account Number</label>
                                    <input type="text" value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} required className="form-control name" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Password</label>
                                    <input type="number" value={password} onChange={(event) => setPassword(event.target.value)} required className="form-control mobileNumber" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">New Password</label>
                                    <input type="text" value={new_Password} onChange={(event) => setNew_Password(event.target.value)} required className="form-control fatherName" />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="w-100 m-auto text-center">
                        <button type="submit" className="btn btn-primary w-25 mb-3 fw-bold fs-3 submit_Btn " onClick={(event) => SubmitHandler(event)}>UPDATE</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChangePassword;
