import "./ChannelList.css";
// import { Link } from "react-router-dom";

export const ChannelList = ({
  handleCreateChannel,
  span,
  channelObject,
  handleLink,
}) => {
  // console.log(channelObject.data);

  return (
    <div className="channel-list">
      <h2>Channels</h2>
      <ul>
        {channelObject.data.map((channel, n) => (
          <li onClick={handleLink} key={n}>
            {channel.attributes.name}
          </li>
        ))}
      </ul>
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
