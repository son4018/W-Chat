import React, { useState, useEffect } from "react";
import "../css/ChatMessages.css";
import SentMessage from "../components/SentMessage";
import MyMessage from "./MyMessage";
import { db, auth } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function ChatMessages({ scrollRef }) {
  const [messages, setMessages] = useState([]);
  const currentUserUid = auth.currentUser?.uid;

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, scrollRef]);

  return (
    <>
      {messages.map((msg) =>
        msg.uid === currentUserUid ? (
          <MyMessage key={msg.id} text={msg.text} timestamp={msg.createdAt} />
        ) : (
          <SentMessage key={msg.id} name={msg.displayName} text={msg.text} timestamp={msg.createdAt} />
        )
      )}
    </>
  );
}

export default ChatMessages;
