import "./ChannelList.css";

export const ChannelList = ({ handleCreateChannel, span, channelObject }) => {
  // console.log(channelObject.data);
  return (
    <div className="channel-list">
      <h2>Channels</h2>
      <span>{span}</span>
      <ul>
        {channelObject.data.map((channel, n) => (
          <li key={n}>{channel.attributes.name}</li>
        ))}
      </ul>
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
