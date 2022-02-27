import React, {useState} from 'react'
import { auth, db } from "../firebase_config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import { Container , Button} from "react-bootstrap";


export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText]= useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost=async () =>{
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
     });
    navigate("/home");
  };
  
      
  
return (

 <div className="createPostPage">
           <Navbar/>

    <Container
        className=" d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh"}}
      >      
       <div className="cpContainer">
           <h1> Create A Post</h1>
           <div className='inputGp' style={{marginTop:20}}>
             <label>Title</label>
             <input placeholder="Add a title..." onChange={(e)=>{ setTitle(e.target.value)}}/>
           </div>

           <div className="inputGp">
             <label>Post</label>
             <textarea placeholder="Add a post..." onChange={(e)=>{setPostText(e.target.value)}}/>
          </div>
          <div style={{marginTop:20}}>
            <Button onClick={createPost} >Submit Post</Button>
            </div>
          
       </div>
       </Container>
    </div>
  );
}
