import React from 'react';
import '../css/SentMessage.css';

function SentMessage({name, text, timestamp}) {
  return (
    <div className="SentMessage">
        <div className="sentmessage-chat-bubble">
            <div className="sender-name">
                {name}
            </div>
        <div className="chat-container">
              <div className="chat">{text}</div>
        </div>  
        <span className="timestamp-sentmessage">{timestamp || "now"}</span>
        </div>
    </div>
  );
}

export default SentMessage;