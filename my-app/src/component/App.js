import "../App.css";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import CreatePost from "./CreatePost";
import Home from "./Home";
import IntroPage from "./IntroPage";
import Profile from "./Profile";


function App() {
  return (
    <Router>
     
        
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<IntroPage />} />
              <Route path="/navbar" element={<Navbar/>}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/home" element={<Home/>}/>
              <Route path="/createpost" element={<CreatePost/>}/>
              <Route path="/profile" element={<Profile/>}/>
              

            </Routes>
          </AuthProvider>
        
    </Router>
  );
}

export default App;
