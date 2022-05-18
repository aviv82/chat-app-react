import "./ChannelList.css";

export const ChannelList = ({ handleCreateChannel }) => {
  return (
    <div className="channel-list">
      <h2>Channels</h2>
      <input
        className="channel-input"
        type="input"
        placeholder="New Channel Name"
      ></input>
      <button onClick={handleCreateChannel} className="channel-btn">
        Create New Channel
      </button>
    </div>
  );
};
