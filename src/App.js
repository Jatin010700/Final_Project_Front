import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./User_Account/login";
import Register from "./User_Account/register";
import { Home } from "./Components/home";
import { Error } from "./404Error";

import { Info1 } from "./Components/more_info1";
import { Soon } from "./Coming_Soon";
import { Contact } from "./Components/contact";

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
          
          <Route path="*" element={<Error />} />
          <Route path="/soon" element={<Soon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
