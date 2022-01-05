import React from "react";
import MassegeForm from "./MassegeForm";
import MyMassege from "./MyMassege";
import TheirMassege from "./TheirMassege";
export const ChatFeed = (props) => {
  // console.log(props);
  const { chats, activeChat, userName, masseges } = props;
  const chat = chats && chats[activeChat];
  // console.log(chat, userName, masseges);
  const renderMasseges = () => {
    const keys = Object.keys(masseges);
    // console.log(keys);
    return keys.map((key, index) => {
      const massage = masseges[key];
      const lastMassageKey = index === 0 ? null : keys[index - 1];
      const isMysMassage = userName === massage.sender.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMysMassage ? 
            <MyMassege message={massage} /> 
            : <TheirMassege massege={massage} lastMassage={masseges[lastMassageKey]} />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMysMassage ? "18px" : "0px",
              marginLeft: isMysMassage ? "0px" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };
  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-tilte">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.userName}`)}
        </div>
      </div>
      {renderMasseges()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MassegeForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
