import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { auth } from "../firebase_config";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




export default function Navbar() {
const {logout} = useAuth(); 
const navigate = useNavigate();

const handleLogout = async() => {
  try{
    await logout();
    navigate("/login");
  }catch(error){
      console.log(error.message);
  }
};

  return (
    
    <nav> 
      <Link to="/profile">
      <div className="icon"> <AccountCircleIcon style={{fontSize:"40px"}}/> </div>
      </Link>
      <div className="userName mx-2">{auth.currentUser.displayName}</div>
      <div className="ms-auto" > <h2>TechTale</h2></div>
        
      <div  className="ms-auto">
      <Link
        to="/home"
        className="mx-4"
        style={{ textDecoration: "none", color: "black"  }}
      >
        Home
      </Link>
      <Link to="/Createpost" className="mx-5" style={{ textDecoration: "none", color: "black" }}>
        
        CreatePost
      </Link>

      <Button
        style={{  color: "black", backgroundColor: "white" }} onClick={handleLogout}
      >
        Logout
      </Button>
      </div>
    </nav>
    
  );
}
