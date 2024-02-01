import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./User_Account/login";
import Register from "./User_Account/register";
import { ForgotPass } from "./User_Account/forgot_Pass";
import { ConfirmEmail } from "./User_Account/Confirm_Email";

import { Home } from "./Components/home";
import { Info1 } from "./Components/more_info1";
import { Contact } from "./Components/contact";

import { Error } from "./Components/extra/404Error";
import { Soon } from "./Components/extra/Coming_Soon";

import { SearchCar } from "./Components/Car_List/Search_Car";
import { CarOwner } from "./Components/CarOwner/owner";
import { AuthProvider } from "./Components/extra/authContext";
import PrivateRoute from "./Components/extra/privateRoute";
import { UnauthorizedPage } from "./Components/extra/unauthorize";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route
            path="/info1/:carName/:imageURL/:price/:rent/:loginUserName" element={<Info1 />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/carlist" element={<SearchCar />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Main />} />

          <Route path="/carcontent"
            element={<PrivateRoute element={CarOwner} />}/>
          <Route path="/forgotPass" 
            element={<PrivateRoute element={ForgotPass} />}/>

          <Route path="/ConfirmEmail" element={<ConfirmEmail/>}/>

          <Route path="*" element={<Error />} />
          <Route path="/soon" element={<Soon />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
