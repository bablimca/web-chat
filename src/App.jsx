import React from "react";
import { useEffect } from "react";
import Hello from "./Hello.jsx";
import { Widget, addResponseMessage } from "react-chat-widget";
import "./app.scss";

const Test = () => {
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response);
  };
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        
      />
    </div>
  );
};

export default Test;
