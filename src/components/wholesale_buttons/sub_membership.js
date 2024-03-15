import './sub_membership.css';
import { Link } from 'react-router-dom';
import currency from '../../images/currency.avif'
import thumb from '../../images/thumb.avif'


function Sub_Membership() {


    return (
        <>
            <div className="container-fluid mt-5 sub_Membership_Main_Box">
                <div className="container">
                    <div className="row">
                        <h1 className="text-dark col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">About Sub-Membership</h1>
                        <div className="col-xxl-7 col-lg-7 col-md-7 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 p-0 m-0">
                                    <p>HDFC is a sub-member bank for many services such as the RBI Clearing House, RTGS, ATM and Aadhaar-based banking. It can act as a sponsor and extend these services to cooperative, private and foreign banks who do not wish to invest in a direct membership.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-12 col-12 col-xs-12">

                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 col-xs-12 needHelpDiv">
                            <h1 className="text-dark">Need Help ?</h1>
                            <h4 className="text-dark">Contact Us</h4>
                            <p>Call us on 1800 202 6161 / 1860 267 6161 (accessible across India)
      Customer travelling overseas can reach us on 022-61606160</p>
                            <h5><Link to='/wholesale'>Back</Link></h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-dark col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Clearing Sub-Membership</h1>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 p-0 m-0">
                                    <p>HDFC Bank is a direct member of the RBI clearing house. We act as the sponsor bank of co-operative, private and foreign banks, which are not direct members of the RBI clearing house. We professionally deal with the entire clearing and settlement processes for sub-member banks.
                                    <br/> <br/>
                                    For more details, write to us at 
                                    <br/>
                                    cbsproduct-sales@hdfcbank.com
                                    </p>
                                </div>
                            </div>

                        </div>
                      
                    </div>
                    
                </div>
            </div>

            <div className="container-fluid mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-dark col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">RTGS Sub-Membership</h1>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 p-0 m-0">
                                    <p>RTGS (Real Time Gross Settlement) is an electronic system for transfer of funds between banks. HDFC Bank is one of the pioneer banks for RTGS in India. With its advanced technology and network, the bank is well positioned to be your sponsor bank for RTGS sub-membership if you do not wish to become a Direct RTGS member with RBI. Becoming a sub-member saves you the capital expenditure and recurring expenses.
                                    </p>
                                </div>
                            </div>

                        </div>
                      
                    </div>
                    
                </div>
            </div>

            <div className="container-fluid mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-dark col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">ATM Tie-Ups</h1>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 p-0 m-0">
                                    <p>HDFC Bank has 18,089 ATMs across the country. We can extend the usage of our ATMs for our correspondent banking tie-ups.
                                    </p>
                                </div>
                            </div>

                        </div>
                      
                    </div>
                    
                </div>
            </div>

            <div className="container-fluid mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-dark col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">Aadhaar Sub-Membership</h1>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 p-0 m-0">
                                    <p>Sub-member banks become part of NPCI's payment system through the Aadhaar number. Beneficiaries will receive government scheme disbursements and subsidies like NREGA payments, Social Security Pension, Handicapped and Old Age Pension, etc. of Central and State Government bodies.
                                    </p>
                                </div>
                            </div>

                        </div>
                      
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Sub_Membership;