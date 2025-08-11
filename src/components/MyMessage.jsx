import React from 'react';
import '../css/MyMessage.css';
import { getAuth } from "firebase/auth";

function MyMessage({text, timestamp}) {
  const auth = getAuth();
  return (
    <div className="MyMessage">
        <div className="mymessage-chat-bubble">
            <div className="my-name">
                {auth.currentUser.displayName}
            </div>
        <div className="chat-container">
                <div className="chat">{text}</div>
        </div>
          <span className= "timestamp-mymessage">{timestamp || "Now"}</span>
        </div>
    </div>
  );
}

export default MyMessage;