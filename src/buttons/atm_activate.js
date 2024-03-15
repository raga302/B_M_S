

import { useState } from "react";
import $ from 'jquery'


function AtmActivation() {

    const [accountNumber, setAccountNumber] = useState("")
    const [password, setPassword] = useState("")
    const [atmPin, setAtmPin] = useState("")
    const [confirm_Atm_Pin, setConfirm_Atm_Pin] = useState("")


    const SubmitHandler = (e) => {
        e.preventDefault()
        let atmPinLength = atmPin.toString()
        atmPinLength = atmPinLength.length
        if (accountNumber == "" || password == "" || atmPin == "" || confirm_Atm_Pin == "") {
            alert("Please Enter All Information !")
        }
        else {
            if (atmPinLength == 4) {
                if (atmPin === confirm_Atm_Pin) {
                    $.ajax({
                        url: "https://uniquebmsweb.infinityfreeapp.com/PHP/atm_activate.php",
                        type: "POST",
                        data: {
                            accountNumber: accountNumber, password: password, atmPin: atmPin
                        },
                        success: function (getData) {
                            if (getData == 1) {
                                alert("ATM PIN Created Successfully !")
                                setAccountNumber("")
                                setPassword("")
                                setAtmPin("")
                                setConfirm_Atm_Pin("")
                                window.location.href = '/';
                            }else {
                                alert("Incorrect Info Try Again !")
                            } 
                        }
                    })

                } else {
                    alert("Confirmation ATM_Pin is Incorrect !")
                }

            }
            else {
                alert("Please Enter Only 4 Digits M-PIN")
            }

        }



    }


    return (
        <>
            <div className="container-fluid d-flex  justify-content-center">
                <div className="container border main mt-3 d-flex flex-column justify-content-center ">
                    <div className="row d-flex  justify-content-center">
                        <div className=" bg-dark   d-flex justify-content-center">
                            <h1 className="heading pb-2 pt-2 mt-2 w-75  text-center text-light border-bottom border-top  rounded-2  border-start border-end  ">ATM_Activation</h1>
                        </div>
                        <div className="mainDiv col-lg-6 col-md-9 col-sm-9 col-9 col-xs-9   mt-2 p-2">
                            <div className=" p-3 pt-0 flex-column  border border-light ">

                                <div className="">
                                    <p className="  text-center para"></p>
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Account Number</label>
                                    <input type="number" value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} required className="form-control name" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Password</label>
                                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="form-control mobileNumber" />
                                </div>
                                
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Create ATM Pin</label>
                                    <input type="password" value={atmPin} placeholder="4-Digits" onChange={(event) => setAtmPin(event.target.value)} required className="form-control fatherName" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Confirm  ATM Pin</label>
                                    <input type="password" value={confirm_Atm_Pin} onChange={(event) => setConfirm_Atm_Pin(event.target.value)} required className="form-control fatherName" />
                                </div>


                            </div>
                        </div>


                    </div>
                    <div className="w-100 m-auto text-center">
                        <button type="submit" className="btn btn-primary w-25 mb-3 fw-bold fs-3 submit_Btn " onClick={(event) => SubmitHandler(event)}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AtmActivation;
