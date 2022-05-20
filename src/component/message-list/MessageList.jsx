import "./MessageList.css";

export const MessageList = ({ chanName }) => {
  console.log(chanName[0]);
  return (
    <div className="message-list">
      <h1>{chanName[0]}</h1>
      <div className="new-message">
        <input
          type="textarea"
          placeholder="Type new message"
          className="message-input"
        ></input>
        <button className="message-btn">Submit</button>
      </div>
    </div>
  );
};
