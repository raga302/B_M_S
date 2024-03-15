import './depositary_services.css';
import { Link } from 'react-router-dom';
import calculator from '../../images/calculator.jpg'
import bank_locker from '../../images//bank_locker.jpg'
import old_age from '../../images/share_market.avif'


function Depositary_Services() {


    return (
        <>
             <div className="container-fluid mt-5 depositary_services_Main_Box">
                <div className="container">
                    <div className="row">
                        <h2 className="text-dark col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12 col-xs-12 custodial_Services_Heading ">About Custodial Services</h2>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={calculator} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>Safeguard your business’s financial assets with HDFC Bank’s Custodial Services. Whether in electronic or physical form, protect your assets with the latest technologies and high-security vaults.
                                        <br/> 
                                        HDFC Bank’s custodial services are SOX and ISO 9001:2008 complaint and are known for their high operating standards. We were the first bank to be appointed custodian for the National Stock Exchange. <br/>  <br/> 
                                        Leading mutual funds, insurance companies, venture capital firms, foreign portfolio investors (FPI), foreign corporate bodies and provident fund trusts rely on us for wide range of customised custodial services.</p>
                                   
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-1 col-1 col-xs-1">

                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 col-xs-6 needHelpDiv">
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
                        <h2 className="text-dark col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12 col-xs-12 custodial_Services_Heading">Portfolio Of Services</h2>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={bank_locker} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>HDFC Bank offers a wide range of custodial services that help you improve organizational reporting and the safety of your financial assets. Our services include: <br/> 

                                    <ul>
                                        <li>Regulatory approvals and reporting for off-shore entities</li>
                                        <li>Registration as a SEBI Designated Depository Participant for Foreign Portfolio Investors (FPI)</li>
                                        <li>Speedy opening of bank and Demat accounts</li>
                                        <li>Custodial Participant Codes with both the stock exchanges in India</li>
                                        <li>Seamless handling of large volumes of transactions with Straight-Through-Processing</li>
                                        <li>Subscription to Initial Public Offerings (IPOs) through ASBA. HDFC Bank is a SCSB (Self Certified Syndicate Bank), empowered by SEBI and can accept ASBA forms from its customers for all Book Built Public and Rights Issues</li>
                                        <li>Support for subscription in debt issues, mutual fund units, and exchange traded funds</li>
                                        <li>Corporate action tracking for both monetary and non–monetary benefits</li>
                                        <li>Tracking of inward remittances and quick conversions in client’s account</li>
                                        <li>Portfolio reporting</li>
                                        <li>Customised reporting that goes beyond standard templatised reports</li>
                                        <li>Safe custody: Highly secure storage vaults for physical securities</li>
                                        <li>Dedicated Relationship Manager as single point of contact for all custodial requirements</li>
                                        <li>Regulatory reporting on behalf of off-shore clients</li>
                                        <li>Designated Banker Services : Designated Banker Services are offered to FVCI and FPI clients</li>
                                    </ul>
                                    
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
                        <h2 className="text-dark col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12 col-xs-12  custodial_Services_Heading">Securities For Margin</h2>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={old_age} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>.HDFC Bank is the custodian to National Securities Clearing Corporation of India (NSCCL), Multi-Commodity Exchange (MCX), MCX-SX Stock Exchange (MCX-SX), National Commodity & Derivatives Exchange of India (NCDEX), ACE Derivatives & Commodities Exchange (ACE), OTC Exchange of India (OTCEI) and Indian Commodity Exchange (ICEX). Clearing members of these exchanges can open Demat accounts with the bank and hold securities against their base capital and additional base capital margin requirements.<br/>  <br/>
                                    
                                   
                                    <a href='https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Wholesale/Financial-Institutions-Trusts/Mutual-Funds/Custodial-Services/Custodial-Service/Tariff_Regular_%20BSDA.pdf'>View the Demat Account Tariff Structure
</a>
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

export default Depositary_Services;