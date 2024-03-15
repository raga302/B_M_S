

import { useState } from "react";
import $ from 'jquery'


function AtmDisable() {

    
    const [accNum, setAccNum] = useState("")
    const [atmPin, setAtmPin] = useState("")
   
     
    const SubmitHandler = (e) => {
        e.preventDefault()
        
        if (accNum == "" || atmPin == "") {
            alert("Please Fill Both Information UserId, atmPin")
        }else{
            $.ajax({
                url:"https://uniquebmsweb.infinityfreeapp.com/PHP/atm_deactivate_db.php",
                type:"POST",
                data: {
                    accNum:accNum, atmPin:atmPin
                },
                success:function(getData){
                    if (getData == 1) {
                        alert("ATM Successfully Disabled !")
                    }else{
                        alert("Invalid Account Number OR atmPin !")
                    }
                }
            })
        }
       

        



    }


    return (
        <>
            <div className="container-fluid d-flex  justify-content-center">
                <div className="container border main mt-3 d-flex flex-column justify-content-center ">
                    <div className="row d-flex  justify-content-center">
                        <div className=" bg-dark   d-flex justify-content-center">
                            <h1 className="heading pb-2 pt-2 mt-2 w-75  text-center text-light border-bottom border-top  rounded-2  border-start border-end  ">ATM_DeActivate</h1>
                        </div>
                        <div className="mainDiv col-lg-6 col-md-9 col-sm-9 col-9 col-xs-9   mt-2 p-2">
                            <div className=" p-3 pt-0 flex-column  border border-light ">

                                <div className="">
                                    <p className="  text-center para"></p>
                                </div>
                              
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">Account Number</label>
                                    <input type="number" value={accNum} placeholder="xyz123" onChange={(event) => setAccNum(event.target.value)} required className="form-control fatherName" />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="fw-bold text-dark mb-2 mt-3 ">ATM Pin</label>
                                    <input type="password" value={atmPin} placeholder="4-Digits" onChange={(event) => setAtmPin(event.target.value)} required className="form-control fatherName" />
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

export default AtmDisable;
