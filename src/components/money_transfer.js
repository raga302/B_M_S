import { useState } from "react"
import './money_transfer.css'
import $ from 'jquery'

function Money_Transfer() {

    const [firstAccountNumber, setFirstAccountNumber] = useState("")
    const [password, setPassword] = useState("")
    const [amount, setAmount] = useState("")
    const [secondAccountNumber, setSecondAccountNumber] = useState("")

    
    function SubmitHandler(e) {

        e.preventDefault()
        if (firstAccountNumber == "" || password == "" || amount == "" || secondAccountNumber == "") {
            alert("Please Fill All Information !")
        }else{
            $.ajax({
                url: "https://uniquebmsweb.infinityfreeapp.com/PHP/money_transfer.php",
                type: "POST",
                data: {
                    firstAccountNumber:firstAccountNumber, password:password, amount:amount, secondAccountNumber:secondAccountNumber
                },
                success: function(getdata){
                    if(getdata == 1){
                        alert("Your Amount Successfully Sent !")
                        window.location.href = '/'
                    }else if (getdata == 0) {
                        alert("Incorrect Account Number OR Paswword !")
                    }else{
                        alert("Insufficient Balance !")
                    }
                }
            })
        }
       
        
    }


    return (
        <>

            <div className="container-fluid mt-2">
                <div className="container d-flex justify-content-center align-items-center border mainHomeDiv">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex justify-content-end align-items-center border ">
                            <h1 className="text-light pb-0  px-4 py-1">Welcome To HDFC Bank</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid d-flex  justify-content-center">
                <div className="container col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12  main_heading   mt-2 d-flex flex-column justify-content-center ">
                    <div className="row d-flex  justify-content-center ">
                    <div className="   d-flex justify-content-center  MONEY_HEADING ">
                                    <h1 className=" pb-3 pt-2 mt-2 w-100  text-center text-dark ">MONEY__TRANSFER</h1>
                                </div>
                        <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12  mt-2 p-2">
                            <div className="w-100 p-3 pt-0 flex-column  border border-light ">
                                
                                <div className="">
                                    <p className="  text-center para"></p>
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ps-2">FROM</label>
                                    <input type="text" value={firstAccountNumber}    onChange={(event) => setFirstAccountNumber(event.target.value)} required className="form-control name bg-" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ps-2">Password</label>
                                    <input type="password" value={password}  onChange={(event) => setPassword(event.target.value)} required className="form-control mobileNumber" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ps-2">Amount</label>
                                    <input type="number" value={amount}  onChange={(event) => setAmount(event.target.value)} required className="form-control mobileNumber" />
                                </div>
                                <div className="">
                         
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ps-2">TO</label>
                                    <input type="text" value={secondAccountNumber} onChange={(event) => setSecondAccountNumber(event.target.value)} required className="form-control fatherName" />
                                </div>

                                
                            </div>
                        </div>

                    </div>
                    <div className="w-100 m-auto text-center">
                    <button  type="submit" className="btn btn-primary transfer_Btn w-25 mb-3 fw-bold fs-3  " onClick={(event) => SubmitHandler(event)}>TRANSFER</button>
                    </div>
                </div>
            </div>


        </>
    )
};

export default Money_Transfer;