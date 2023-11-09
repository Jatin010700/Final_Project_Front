import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./User_Account/login";
import Register from "./User_Account/register";
import { ForgotPass } from "./User_Account/forgot_Pass";
import { ConfirmEmail } from "./User_Account/Confirm_Email";

import { Home } from "./Components/home";
import { Info1 } from "./Components/more_info1";
import { Contact } from "./Components/contact";

import { Error } from "./404Error";
import { Soon } from "./Coming_Soon";

import { SearchCar } from "./Components/Car_List/Search_Car";
import { SearchCar1 } from "./Components/Car_List/Search_Car1";
import { CarOwner } from "./Components/CarOwner/owner";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info1" element={<Info1 />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/carlist" element={<SearchCar />} />
          <Route path="/carcontent" element={<CarOwner/>} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Main />} />

          <Route path="/forgotPass" element={<ForgotPass />} />
          <Route path="/ConfirmEmail" element={<ConfirmEmail />} />

          <Route path="*" element={<Error />} />
          <Route path="/soon" element={<Soon />} />

          <Route path="/carList1" element={<SearchCar1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
