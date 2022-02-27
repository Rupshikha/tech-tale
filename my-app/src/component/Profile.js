
import React from 'react'
import Navbar from './Navbar';
import { auth } from "../firebase_config";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Profile() {
  return (
    
        <div>
        
            <Navbar/>

            
            <div className = "profile-section" style={{textAlign: "center", marginTop: "50px"}}>
            <div className = "profile-header">
                <div>
                    <h4>Your Profile</h4>
                </div>
                <div className='profile-pic' >
                    <h1><AccountCircleIcon style={{fontSize:"100px"}} /></h1>
                </div>
            </div>
           
            <div className = "Profile-content">
                <div className = "name">
                    <div className = "question">
                        <p>Name</p>
                    </div>
                    <div>
                        <h5>{auth.currentUser.displayName}</h5>
                    </div>
                </div>

               
                <div className = "user-email">
                    <div className = "question">
                        <p>Email ID</p>
                    </div>
                    <div>
                        <h5>{auth.currentUser.email}</h5>
                    </div>
                </div>
                <div>
                    <hr></hr>
                </div>
               

            </div>
        </div>
         
   </div>
   

  )
}
