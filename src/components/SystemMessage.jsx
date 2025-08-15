import React from 'react';
import '../css/SystemMessage.css';

function SystemMessage({text}) {
  return (
    <div className="SystemMessage">
        <span className="system-message-text" >{text}</span>
    </div>
  );
}

export default SystemMessage;