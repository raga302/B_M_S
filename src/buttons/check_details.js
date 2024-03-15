
import { useState } from "react";
import $ from 'jquery'
import './check_details.css';


function CheckDetails() {

    const [accountNumber, setAccountNumber] = useState("")
    const [password, setPassword] = useState("")

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [aadharNumber, setAadharNumber] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [accountType, setAccountType] = useState("")
    const [account_Num, setAccount_Num] = useState("")
    const [accountBalance, setaccountBalance] = useState("")
    const [userId, setUserId] = useState("Use Net Banking & Be a Part of Digtal World !")
    const [mpin, setMPin] = useState("")
    const [atmPin, setAtmPin] = useState("")


    const SubmitHandler = (e) => {
        e.preventDefault()
        if (accountNumber == "" || password == "") {
            alert("Please Enter Account Number & Password !")
        } else {
            $.ajax({
                url: "https://uniquebmsweb.infinityfreeapp.com/PHP/check_details.php",
                type: "POST",
                data: {
                    accountNumber: accountNumber, password: password
                },
                success: function (getData) {
                    if (getData == 0) {
                        alert("Incorrect Account Number OR Password !")
                    }
                    else {
                        getData = getData.split(",")
                        setName(getData[0])
                        setMobileNumber(getData[1])
                        setAadharNumber(getData[2])
                        setAddress(getData[3])
                        setEmail(getData[4])
                        setAccountType(getData[5])
                        setAccount_Num(getData[6])
                        setaccountBalance(getData[7])
                        setUserId(getData[8])
                        setMPin(getData[9])
                        setAtmPin(getData[10])
                    }


                }
            })

        }

    }


    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="container main border border-danger d-flex justify-content-center ">
                    <div className="row w-100 d-flex justify-content-center">
                        <div className="col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  d-flex  justify-content-center flex-column">
                        <div className=" bg-dark col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  d-flex justify-content-center">
                            <h1 className=" user_info_heading pb-2 pt-2 mt-2 w-75 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  text-center text-light border-bottom border-top  rounded-2  border-start border-end  ">User_Information</h1>
                        </div>
                        <div className=" col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex justify-content-center   mt-2 p-2">
                            <div className=" col-xxl-7 col-lg-7 col-md-6 col-sm-6 col-6 col-xs-6 p-3 pt-0 d-flex justify-content-center flex-column content_Div  border border-light ">
                                <div className="">
                                    <p className="  text-center para"></p>
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Account Number</label>
                                    <input type="text" value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} required className="form-control name" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Password</label>
                                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="form-control mobileNumber" />
                                </div>

                            </div>
                        </div>




                        <div className="w-100 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12  m-auto text-center">
                        <button type="submit" className="btn btn-primary  col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-6 col-xs-6  fw-bold fs-3  check_Details_submit_Btn" onClick={(event) => SubmitHandler(event)}>Show Details</button>
                    </div>

                    </div>
                    

                    
                            <div className="row col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex justify-content-center  ">
                                <div className=" ps-5 pt-5 col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex justify-content-center ">

                                    <table className='table mb-2 bg-warning '>
                                        <tr className='border'>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Name</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Mobile Number</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Aadhar Number</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Address</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Email</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Account Type</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Account Number</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Account Balance</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>User Id</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2'>Mpin</th>
                                            <th className='ps-0 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center pt-2 pb-2 pe-2'>ATM Pin</th>
                                        </tr>
                                        <tr>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{name}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{mobileNumber}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{aadharNumber}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{address}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{email}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{accountType}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{account_Num}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{accountBalance}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{userId}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12 border text-center'>{mpin}</td>
                                            <td className='p-3 col-xxl-1 col-lg-1 co-md-12 col-sm-12 col-12 col-xs-12  border text-center'>{atmPin}</td>
                                        </tr>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
               
        </>
    )
};

export default CheckDetails;
