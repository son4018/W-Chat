import React from 'react'
import '../css/GoogleSignInButton.css'
import {useNavigate} from 'react-router-dom'
import {signInWithPopup} from "firebase/auth"
import {auth, provider} from '../firebase'

function GoogleSignInButton() {
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            const user = auth.currentUser;
            console.log(user.displayName);
            navigate('/chat')
        } catch (error) {
            console.error("Error", error);
        }
    }

  return (
    <div>
      <div className="signin-button">
        <button onClick={loginWithGoogle} className="btn-signin">Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default GoogleSignInButton
