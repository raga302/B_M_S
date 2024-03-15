
import './create.css'
import { useState } from "react";
import $ from 'jquery'



function Create() {

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
   
    const [confirm, setConfirm] = useState("")
    const [password, setPassword] = useState("")
    const [aadharNumber, setAadharNumber] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [accountType, setAccountType] = useState("")
    //const [aadharNumber, setAadharNumber] = useState("")
    //const [accountNumber, setAccountNumber] = useState(0)
    let accountNumber = 0;
    let accountBalance = 0;
    let userID = "";
    let mPin = ""
    let atmPin = ""
 
    const SubmitHandler = (e) => {
       
        let max = 9999;
            let min = 1000;
            let random_number = Math.floor((Math.random() * (max - min + 1)) + min);
    
        if (name == "" || mobileNumber == "" || password == "" || aadharNumber == "" || address == "" || email == "" || accountType == "", confirm == "") {
            alert("Please Fill All Information !")
        }
        else {
            
            accountNumber = random_number;
            let dup_mobile_Num = mobileNumber.toString()
            dup_mobile_Num = dup_mobile_Num.length
            let dup_Aadhar_Num = aadharNumber.toString()
            dup_Aadhar_Num = dup_Aadhar_Num.length
            if (dup_mobile_Num === 10) {
                if (dup_Aadhar_Num == 16) {

                    if (accountType == "current" || accountType == "Current" || accountType == "CURRENT") {
                        accountBalance = 500;
                        if (password == confirm) {
                            $.ajax({
                                url: "https://uniquebmsweb.infinityfreeapp.com/PHP/create_db.php",
                                type: "POST",
                                data: {
                                    name:name, mobileNumber:mobileNumber, password:password, aadharNumber:aadharNumber, address:address, email:email, accountType:accountType, accountNumber:accountNumber, accountBalance:accountBalance, userID:userID, mPin:mPin, atmPin:atmPin, confirm:confirm
                                },
                                success:function(getData){
                                    if (getData == 1) {
                                        alert("Congratulations ! Account Created Successfully")
                                        setName("")
                                        setMobileNumber("")
                                        setPassword("")
                                        setAadharNumber("")
                                        setEmail("")
                                        setAccountType("")
                                        setAddress("")
                                        setConfirm("")
                                        window.location.href = '/create_popup'
                                    }
                                    else if (getData == 0) {
                                        alert("This Mobile Number is Already Used ! Try Another")
                                    }
                                }
                            })
                        }else{
                            alert("Confirmation Password is Incorrect !");
                        }
                       
                    
                    }
                    else if (accountType == "saving" || accountType == "Saving" || accountType == "SAVING") {
                        accountBalance = 1000;
                        if (password == confirm) {
                            $.ajax({
                                url: "https://uniquebmsweb.infinityfreeapp.com/PHP/create_db.php",
                                type: "POST",
                                data: {
                                    name:name, mobileNumber:mobileNumber, password:password, aadharNumber:aadharNumber, address:address, email:email, accountType:accountType, accountNumber:accountNumber, accountBalance:accountBalance, userID:userID, mPin:mPin, atmPin:atmPin, confirm:confirm
                                },
                                success:function(getData){
                                    if (getData == 1) {
                                        alert("Congratulations ! Account Created Successfully")
                                        setName("")
                                        setMobileNumber("")
                                        setPassword("")
                                        setAadharNumber("")
                                        setEmail("")
                                        setAccountType("")
                                        setAddress("")
                                        setConfirm("")
                                        window.location.href = '/create_popup'
                                    }
                                    else if (getData == 0) {
                                        alert("This Mobile Number is Already Used ! Try Another")
                                    }
                                }
                            })
                        }else{
                            alert("Confirmation Password is Incorrect !");
                        }
                        
                    }else{
                        alert("Please Enter Valid Account Type !")
                    }
                }
                else {
                    alert("Please Enter 16 Digit Aadhar Number")
                }
            } else {
                alert("Please Enter 10 Digit Mobile Number")
            }
        }

    }

    return (
        <>
            <div className="container-fluid d-flex   justify-content-center">
                <div className="container border main mt-5 create_Btn_Main_Div d-flex flex-column justify-content-center ">
                    <div className="row d-flex  justify-content-center">
                    <div className=" bg-dark   d-flex justify-content-center">
                                    <h1 className="heading pb-2 pt-2 mt-2 w-75  text-center text-light border-bottom border-top  rounded-2  border-start border-end  ">Create Bank Account</h1>
                                </div>
                        <div className="mainDiv col-lg-6 col-md-6 col-sm-12 col-12 col-xs-12   mt-2 p-2">
                            <div className=" p-3 pt-0 flex-column  border border-light ">
                                
                                <div className="">
                                    <p className="  text-center para"></p>
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Name</label>
                                    <input type="text" value={name}  onChange={(event) => setName(event.target.value)} required className="form-control name" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Mobile Number</label>
                                    <input type="number" value={mobileNumber} placeholder='10 digits' onChange={(event) => setMobileNumber(event.target.value)} required className="form-control mobileNumber" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Create Password</label>
                                    <input type="password" value={password} placeholder='........' onChange={(event) => setPassword(event.target.value)} required className="form-control password" />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Confirm Password</label>
                                    <input type="password" value={confirm} placeholder='........'   onChange={(event) => setConfirm(event.target.value)} required className="form-control adharNumber" />
                                </div>
                                
                            </div>
                        </div>



                        <div className="mainDiv col-lg-6 col-md-6 col-sm-12 col-12 col-xs-12   mt-2 p-2">
                            <div className=" p-3 pt-0 flex-column  border border-light ">
                                
                                <div className="">
                                    <p className="  text-center para"></p>
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Address</label>
                                    <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} required className="form-control name" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">E-mail</label>
                                    <input type="email" value={email} placeholder="xyz897@gmail.com" onChange={(event) => setEmail(event.target.value)} required className="form-control mobileNumber" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Account Type ( Current / Saving )</label>
                                    <input type="text" value={accountType} onChange={(event) => setAccountType(event.target.value)} required className="form-control password" />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Adhar Number</label>
                                    <input type="number" value={aadharNumber} placeholder='16 digits'  onChange={(event) => setAadharNumber(event.target.value)} required className="form-control adharNumber" />
                                </div>

                            </div>
                        </div>

                        
                    </div>
                    <div className="w-100 m-auto text-center">
                    <button  type="submit" className="btn btn-primary w-25 mb-3 fw-bold fs-3 submit_Btn " onClick={(event) => SubmitHandler(event)}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Create;
