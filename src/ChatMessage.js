import React from "react";
import "./ChatMessage.css";

const SentMessage = (props) => {
  return (
    <div className="chat-message">
      <div>
        <div className="sent-text">
          {props.message.body}
          <img className="sent-text-tip" src="/assets/tip-sent.svg" />
        </div>
      </div>
    </div>
  );
};
const ReceivedMessage = (props) => {
  return (
    <div className="chat-message">
      <img className="avatar" src={props.message.user.avatar} />
      <div>
        {props.message.user.username}
        <div className="received-text">
          <img className="received-text-tip" src="/assets/tip-received.svg" />
          {props.message.body}
        </div>
      </div>
    </div>
  );
};

const ChatMessage = (props) => {
  if (props.messageType === "received") {
    return <ReceivedMessage message={props.message} />;
  } else {
    return <SentMessage message={props.message} />;
  }
};

export default ChatMessage;
