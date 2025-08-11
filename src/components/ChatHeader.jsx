import React from 'react';
import '../css/ChatHeader.css';
import LogOut from './LogOut';


function ChatHeader() {
  return (
    <div className="ChatHeader">

        <div className="chat-header-button-status-container">
            <div className="chat-header-button-status" id="circle1"></div>
            <div className="chat-header-button-status" id="circle2"></div>
            <div className="chat-header-button-status" id="circle3"></div>
        </div>

        <div className="logout-button">
          <LogOut />
        </div>

    </div>
  );
}

export default ChatHeader;