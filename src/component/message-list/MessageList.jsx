import "./MessageList.css";
import { NewMessage } from "./NewMessage";

export const MessageList = ({
  chanName,
  handleNewMessage,
  messagesToRender,
  senders,
  active,
}) => {
  // console.log(chanName[0]);
  return (
    <div className="message-list">
      {chanName[0] === "" ? <h1>Messages</h1> : <h1>{chanName[0]}</h1>}

      <NewMessage
        isUser={chanName[2]}
        location={chanName[1]}
        messagesToRender={messagesToRender}
        senders={senders}
        active={active}
      />
      <div className="new-message">
        <input
          type="textarea"
          placeholder="Type new message"
          className="message-input"
        ></input>
        <button onClick={handleNewMessage} className="message-btn">
          Submit
        </button>
      </div>
    </div>
  );
};
