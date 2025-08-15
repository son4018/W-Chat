import React, { useRef, useEffect } from 'react';
import '../css/Chat.css';
import ChatHeader from '../components/ChatHeader';
import MessageInput from '../components/MessageInput';
import ChatMessages from '../components/ChatMessages';


import { auth, db } from '../firebase'; 
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Chat() {
  const messagesContainerRef = useRef(null);
  const hasAnnouncedRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged ((user) => {
      if (!user) {
        navigate('/')
      }
    });
    return () => unsubscribe ();
  }, [navigate]);

  useEffect(() => {
  
  const announceUserJoined = async () => {
    if (!auth.currentUser || hasAnnouncedRef.current) {
      return;
    }
    hasAnnouncedRef.current = true;
    try {
      await addDoc(collection(db, 'messages'), {
        text: `${auth.currentUser.displayName} has joined the chat!`,
        type: "user_joined",
        timestamp: serverTimestamp(),
        createdAt: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      });
    } catch (err) {
      console.error("Error announcing user joined:", err);
      hasAnnouncedRef.current = false;
    }
  };

  announceUserJoined();
}, []);


  const handleSend = async (message) => {
    if (!auth.currentUser) return; // safety check

    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
        timestamp: serverTimestamp(),
        type: "message",
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
