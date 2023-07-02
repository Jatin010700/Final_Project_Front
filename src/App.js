import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./User_Account/login";
import Register from "./User_Account/register";
import { ForgotPass } from "./User_Account/forgot_Pass";

import { Home } from "./Components/home";
import { Info1 } from "./Components/more_info1";
import { Contact } from "./Components/contact";

import { Error } from "./404Error";
import { Soon } from "./Coming_Soon";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info1" element={<Info1 />} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Main />} />
          <Route path="/forgotPASS" element={<ForgotPass/>} />
          
          <Route path="*" element={<Error />} />
          <Route path="/soon" element={<Soon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
