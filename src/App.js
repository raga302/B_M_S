import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.js";
import Signup from "./form_compo/signup.js";
import Profile from "./components/profile.js";
import Login from "./form_compo/login.js";
import Home from "./components/home.js";
import Money_Transfer from "./components/money_transfer.js";
import Wholesale from "./components/wholesale.js";
import Export_credit from "./components/wholesale_buttons/export_credit.js";
import Sub_Membership from "./components/wholesale_buttons/sub_membership.js";
import Project_Apraisal from "./components/wholesale_buttons/project_apraisal.js";
import Depositary_Services from "./components/wholesale_buttons/depositary_services.js";
import Sgl_Maintenance from "./components/wholesale_buttons/sgl_maintenace.js";

import About_Us from "./components/about.js";
import Create from './buttons/create.js';
import Deposit from "./buttons/deposit.js";
import Create_Popup from "./popup/create_popup.js"
import Deposit_Popup from "./popup/deposit_popup.js";
import Withdraw from "./buttons/withdraw.js";
import NetBankingAble from "./buttons/net_Banking_able.js";
import NetBankingDisable from "./buttons/net_banking_disable.js";
import AtmActivation from "./buttons/atm_activate.js";
import AtmDisable from "./buttons/atm_deactivate.js";
import Update from "./buttons/update.js";
import ChangeAccountType from "./buttons/update_buttons/change_account_type.js";
import ChangeMobileNumber from "./buttons/update_buttons/change_mobile_no.js";
import ChangePassword from "./buttons/update_buttons/change_password.js";
import CheckDetails from "./buttons/check_details.js";
import Footer from "./components/footer.js";
import React, { useState } from "react";
import Context  from "./Use_Context/context.js";

/* --bs-breakpoint-xs: 0;
    --bs-breakpoint-sm: 576px;
    --bs-breakpoint-md: 768px;
    --bs-breakpoint-lg: 992px;
    --bs-breakpoint-xl: 1200px;
    --bs-breakpoint-xxl: 1400px;
*/





function App() {


  const [flag, setFlag] = useState(false)

  return (
    <>
      <Main>
        <Context.Provider value={[flag, setFlag]}>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/money-transfer" element={<Money_Transfer />} />
            <Route exact path="/wholesale" element={<Wholesale />} />
            <Route exact path="/wholesale/export-credit" element={<Export_credit />} />
            <Route exact path="/wholesale/sub-membership" element={<Sub_Membership />} />
            <Route exact path="/wholesale/projext-apraisal" element={<Project_Apraisal />} />
            <Route exact path="/wholesale/depository-services" element={<Depositary_Services />} />
            <Route exact path="/wholesale/sgl-maintenance" element={<Sgl_Maintenance />} />
            
            <Route exact path="/aboutus" element={<About_Us />} />
            <Route exact path="/profile" element={<><Profile /> <Home /></>} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/withdraw" element={<><Withdraw /></>} />
            <Route exact path="/netbankingactivation" element={<><NetBankingAble /></>} />
            <Route exact path="/netbankingdeactivation" element={<><NetBankingDisable /></>} />
            <Route exact path="/atmactivation" element={<><AtmActivation /></>} />
            <Route exact path="/atmdeactivation" element={<><AtmDisable /></>} />
            <Route exact path="/checkdetails" element={<><CheckDetails /></>} />
            <Route exact path="/update-profile" element={<><Update /></>} />
            <Route exact path="/update-profile/change-acc-type" element={<><ChangeAccountType /></>} />
            <Route exact path="/update-profile/change-mo-no" element={<><ChangeMobileNumber /></>} />
            <Route exact path="/update-profile/change-pass" element={<><ChangePassword /></>} />

            <Route exact path="/deposit" element={<><Deposit /></>} />
            <Route exact path="/create_popup" element={<> <Create_Popup /></>} />
            <Route exact path="/deposit_popup" element={<><Home/> <Deposit_Popup /></>} />
      
          </Routes>
          <Footer/>
        </Context.Provider>
      </Main>
    </>
  );

}

export default App;
