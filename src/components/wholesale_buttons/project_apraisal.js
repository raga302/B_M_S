import './project_apraisal.css';
import { Link } from 'react-router-dom';
import piggy from '../../images/piggy.jpeg'
import MEETING from '../../images/MNC_MEETING.jpg'
import OLD_AGE from '../../images/OLD-AGE.jpg'


function Project_Apraisal() {


    return (
        <>
             <div className="container-fluid mt-5 project_apraisal_Main_Box">
                <div className="container">
                    <div className="row">
                        <h2 className="text-dark col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 project_apraisal_Heading">About Investment Banking Services</h2>
                        <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={piggy} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>Raise capital for your business the stress-free way with HDFC Bank’s investment banking services. Whatever the industry or size of your organization, you can benefit from our dedicated teams and customised solutions for your business needs.
                                        <br/> 
                                        Get strategic advice on capital financing through debt and equity markets, as well as fund raising for projects. Additionally benefit from expert recommendations on sources for capital, such as mergers and acquisitions, and private equity investors among others.  <br/>  <br/> 
                                        Find out more about our key transactions in the past few years:</p>
                                      
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex '>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 '>
                                        <a className='pe-2 fw-bold fw-bold' href='https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Wholesale/Investment%20Banking/Investment%20Banking/YTD%20FY%202020-21.pdf' target="_blank">2020-21</a>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 '>
                                        <a className='pe-2 fw-bold' href='https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/9a576110-211d-4f58-bf8e-dcbae5f32ca4?' target="_blank">2019-20</a>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 '>
                                        <a className='pe-2 fw-bold' href='https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/7a93d2e5-9c76-4537-be18-44a7b20d6d52?' target="_blank">2018-19</a>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-43col-xs-3 '>
                                        <a className='pe-2 fw-bold' href='https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/281484e3-1b68-48fd-9e22-5cec932e345a?' target="_blank">2017-18</a>
                                        </div>


                                        </div>

                                        <div className='col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12 d-flex '>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 '>
                                        <a className='pe-2 fw-bold' href='https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/99f1a449-5dd9-4958-80f8-f7e993d432cd?' target="_blank">2016-17</a>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 '>
                                        <a className='pe-2 fw-bold' href='https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Wholesale/Investment%20Banking/Investment%20Banking/Financial_Year_2015_16.pdf' target="_blank">2015-16</a>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 '>
                                        <a className='pe-2 fw-bold' href='https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Wholesale/Investment%20Banking/Investment%20Banking/Financial_Year_2014_15.pdf' target="_blank">2014-15</a>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-3 col-3 col-xs-3 '>
                                        <a className='pe-2 fw-bold' href='https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Wholesale/Investment%20Banking/Investment%20Banking/Financial_Year_2013_14.pdf' target="_blank">2013-14</a>
                                        </div>

                                        </div>

                                     
                                        
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-1 col-1 col-xs-1">

                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 col-xs-12 needHelpDiv">
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
                        <h2 className="text-dark col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 project_apraisal_Heading">Debt Capital Markets</h2>
                        <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={MEETING} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>BOptimise your capital raising efforts in the debt markets with our comprehensive solutions, especially designed by our experts with in-depth knowledge from various industry sectors. <br/>  <br/>
                                    Benefit from our extensive experience in providing capital solutions, lead managing, underwriting, placement of listed / unlisted non-convertible debentures and structured bonds, and our position as one of the top book runners in arranging debt
                                    
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
                        <h2 className="text-dark col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 project_apraisal_Heading">Project And Structured Finance</h2>
                        <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={OLD_AGE} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>Enjoy hassle-free funding for your capital expenditure with our range of solutions for your business, including project-level advisory, assessment and financing. Receive the best funding solutions for your project, whether through term loans, bonds, project loans, loans for capital expenditure, refinancing, and acquisition or structured financing in Indian rupees and foreign currencies. <br/>  <br/>
                                    Reap the substantial benefits of our highly customised structured solutions most suited to your business, such as mezzanine debts and credit enhanced debts, among others.<br/>  <br/>
                                    Tap into our expertise across sectors to receive the best project and structured finance advice, such as power (generation, transmission and distribution) and renewable energy (wind, solar and hydro), transportation (roads, seaports, airports and railways), industrials, chemicals and fertilizers, cement, real estate, metals and mining, telecommunication, auto and ancillary, oil and gas, logistics, education, financial services, retail, hospitality, and pharmaceuticals and healthcare, among others.
                                    <br/> <br/>
                                    Read about our  <br/>
                                    <a href='https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=/Wholesale/Investment%20Banking/Investment%20Banking/Project%20Finance.pdf'>key transactions in project and structured finance.</a>
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
                        <h2 className="text-dark col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 project_apraisal_Heading">Corporate Finance Advisory</h2>
                        <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={MEETING} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>Get top-notch advice on raising capital, with bespoke solutions such as from institutional private equity/ mezzanine investors, mergers and acquisitions and advisory services (capital restructuring). <br/>  <br/>
                                    Benefit from the advice of our domain experts from across sectors such as financial services, consumer, food and agriculture, healthcare, industrials, infrastructure and several more.
                                    <br/>  <br/>
                                    Enjoy synergistic relationships with our team to get the best possible recommendations for your business, right from conceptualization stage till realization of your business objectives.
                                    <br/>  <a href='https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/3179816f-166c-4c2e-87e0-91e6e1321d75?'>Know more about our corporate finance advisory transactions.</a>
                                    <br/>  <br/>
                                    Reach out to us to get more information about our investment banking services, by calling the Investment Banking Division on +91 22 6652 1438 / +91 22 3395 8150.
                                    
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

export default Project_Apraisal;