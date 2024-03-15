import './export_credit.css';
import { Link } from 'react-router-dom';
import currency from '../../images/currency.avif'
import thumb from '../../images/thumb.avif'


function Export_credit() {


    return (
        <>
            <div className="container-fluid mt-5 export_credit_Main_Box">
                <div className="container">
                    <div className="row">
                        <h1 className="text-dark col-lg-12 col-md-12 col-sm-10 col-10 col-xs-10">About Export Credit</h1>
                        <div className="col-xxl-7 col-lg-7 col-md-7 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={currency} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>Fund your working capital needs and mitigate commercial risks of export with our export credit products. Further avoid credit, currency and interest-rate risks in the settlement period with post-shipment finance especially tailored for exporters.
                                        <br/> <br/>
                                        Enjoy customised pre- and post-shipment credit solutions in rupees or foreign currencies to decrease your working capital cycle and improve cash flow.</p>
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
                        <h1 className="text-dark col-lg-12 col-md-12 col-sm-10 col-10 col-xs-10">Benefits of Export Credit</h1>
                        <div className="col-xxl-7 col-lg-7 col-md-7 col-sm-12 col-12 col-xs-12 check mt-3">

                            <div className="row w-100 p-3 ">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5 col-xs-5  p-0 m-0">
                                    <img src={thumb} className='pe-3 h-auto w-100' />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 col-xs-7 p-0 m-0">
                                    <p>Benefit from packing credit to enable easy purchase or import of raw materials, processing and packaging of goods for export. Additionally, finance your export sales receivables till the date of realisation of export proceeds. <br/>  <br/>
                                    Get funds soon after you ship with a range of options for post-shipment credit, such as negotiation, payment or acceptance of export documents under letter of credit, purchase or discount of export documents under confirmed orders and export contracts, advances against export bills sent on collection basis, advances against exports on consignment basis, advances against undrawn balance on exports and advances against approved deemed exports.
                                    <br/> <br/>
                                    Get further information when you write to us at
                                    <br/>
                                     <span className='spanTag'>corporatebanking@hdfcbank.com</span>
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

export default Export_credit;