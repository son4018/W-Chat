import React, { useRef, useEffect } from 'react';
import '../css/Chat.css';
import ChatHeader from '../components/ChatHeader';
import MessageInput from '../components/MessageInput';
import ChatMessages from '../components/ChatMessages';
import { auth, db } from '../firebase'; 
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function Chat() {
  const messagesContainerRef = useRef(null);

  const handleSend = async (message) => {
    if (!auth.currentUser) return; // safety check

    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
        timestamp: serverTimestamp(),
        createdAt: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      });

      // Scroll to bottom after sending message
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="Chat">
      <div className="chat-main-container">
        <div className="chat-header-container">
          <ChatHeader />
        </div>
        <div className="chat-body-container" ref={messagesContainerRef} style={{ overflowY: 'auto', maxHeight: '500px' }}>
          <ChatMessages scrollRef={messagesContainerRef} />
        </div>
        <div className="chat-input-container">
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
