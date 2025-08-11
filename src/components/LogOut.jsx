import React from 'react';
import '../css/LogOut.css';
import {signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

function LogOut() {

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
      console.log("User signed out successfully");
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div className="LogOut">
        <button onClick={handleLogout}  className="logout-button-text">Log out</button>
    </div>
  );
}

export default LogOut;