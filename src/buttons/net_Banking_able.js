

import { useState } from "react";
import $ from 'jquery'


function NetBankingAble() {

    const [accountNumber, setAccountNumber] = useState("")
    const [password, setPassword] = useState("")
    const [userid, setUserId] = useState("")
    const [mpin, setMpin] = useState("")
    const [confirm_Mpin, setConfirm_Mpin] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault()
        let mpinLength = mpin.toString()
        mpinLength = mpinLength.length
        if (accountNumber == "" || password == "" || userid == "" || mpin == "" || confirm_Mpin == "") {
            alert("Please Enter All Information !")
        }
        else {
            if (mpinLength == 4) {
                if (mpin === confirm_Mpin) {
                    $.ajax({
                        url: "https://uniquebmsweb.infinityfreeapp.com/PHP/net_banking_able.php",
                        type: "POST",
                        data: {
                            accountNumber: accountNumber, password: password, userid: userid, mpin: mpin, confirm_Mpin: confirm_Mpin
                        },
                        success: function (getData) {
                            if (getData == 1) {
                                alert("Net banking Activate !")
                                setAccountNumber("")
                                setPassword("")
                                setUserId("")
                                setMpin("")
                                setConfirm_Mpin("")
                            } else if (getData == 0) {
                                alert("Incorrect Info Try Again !")
                            } else {
                                alert("This User_ID not Available")
                            }
                        }
                    })

                } else {
                    alert("Confirmation M-Pin is Incorrect !")
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
                            <h1 className="heading pb-2 pt-2 mt-2 w-75  text-center text-light border-bottom border-top  rounded-2  border-start border-end  ">Net__Banking Activation</h1>
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
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Create User ID</label>
                                    <input type="text" value={userid} placeholder="xyz123" onChange={(event) => setUserId(event.target.value)} required className="form-control fatherName" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Create M-Pin</label>
                                    <input type="password" value={mpin} placeholder="4-Digits" onChange={(event) => setMpin(event.target.value)} required className="form-control fatherName" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Confirm M-Pin</label>
                                    <input type="password" value={confirm_Mpin} onChange={(event) => setConfirm_Mpin(event.target.value)} required className="form-control fatherName" />
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

export default NetBankingAble;
