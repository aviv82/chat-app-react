import "./MessageList.css";
import { NewMessage } from "./NewMessage";

export const MessageList = ({ chanName, handleNewMessage }) => {
  // console.log(chanName[0]);
  return (
    <div className="message-list">
      <h1>{chanName[0]}</h1>
      <NewMessage />
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
