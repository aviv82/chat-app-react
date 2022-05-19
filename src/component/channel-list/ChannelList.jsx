import "./ChannelList.css";

export const ChannelList = ({ handleCreateChannel, span }) => {
  return (
    <div className="channel-list">
      <h2>Channels</h2>
      <span>{span}</span>
      <div className="create-section">
        <input
          className="channel-input"
          type="input"
          placeholder="New Channel Name"
        ></input>
        <button onClick={handleCreateChannel} className="channel-btn">
          Create New Channel
        </button>
      </div>
    </div>
  );
};
