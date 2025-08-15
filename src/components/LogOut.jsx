import React from 'react';
import '../css/LogOut.css';
import {signOut } from "firebase/auth";
import {auth, db} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function LogOut() {

  const navigate = useNavigate();

const handleLogout = async () => {  // Make it async
  try {
    // 1. First, announce they're leaving
    await addDoc(collection(db, 'messages'), {
      text: `${auth.currentUser.displayName} has left the chat`,
      type: "user_left",
      timestamp: serverTimestamp(),
      createdAt: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    });

    // 2. Then actually log them out
    await signOut(auth);
    navigate('/');
    console.log("User signed out successfully");
    
  } catch (error) {
    console.error("Error during logout: ", error);
  }
};

  return (
    <div className="LogOut">
        <button onClick={handleLogout}  className="logout-button-text">Log out</button>
    </div>
  );
}

export default LogOut;