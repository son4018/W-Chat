import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import '../css/MessageInput.css';
import {useState} from 'react';


function MessageInput({onSend}) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if(message.trim() === '') return;
    onSend(message);
    setMessage(""); 
  };

  const handleKeyPress =(e) => {
    if(e.key === 'Enter'){
      handleSend();
    }
  };


  return (
    <div className="MessageInput">

        <div className="message-container">
            <input type="text" className="message-input" placeholder="Type your message here..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}/>
        </div>
        <div className="send-button">
            <button onClick={handleSend}  className="send-button-text"><FontAwesomeIcon icon= {faPaperPlane} size='2x' /></button>
        </div>


    </div>
  );
}

export default MessageInput;