import "./NewMessage.css";

export const NewMessage = ({
  messagesToRender,
  location,
  isUser,
  senders,
  active,
}) => {
  // console.log("new mess", messagesToRender, location, senders, active);

  if (isUser === false) {
    const toRender = messagesToRender.filter(
      (mess) => mess.attributes.sentTo === location
    );
    // console.log(toRender);
    return (
      <div className="message-list">
        <ul>
          {toRender.map((rend, i) => {
            const user = senders.filter(
              (user) => user.id === rend.attributes.sentBy
            );
            // console.log(user);
            if (rend.attributes.sentBy === active) {
              return (
                <li key={i}>
                  <h3 key={i + 1}>{user[0].attributes.userName}</h3>
                  <p key={i + 2}>
                    {rend.attributes.createdAt.slice(8, 10)}
                    {rend.attributes.createdAt.slice(4, 8)}
                    {rend.attributes.createdAt.slice(0, 4)} at{" "}
                    {rend.attributes.createdAt.slice(11, 16)}
                  </p>
                  <button key={i + 3}>Edit</button>
                  <button key={i + 4}>Delete</button>
                  <p key={i + 5}> {rend.attributes.body}</p>
                </li>
              );
            }
            return (
              <li key={i}>
                <h3 key={i + 1}>{user[0].attributes.userName}</h3>
                <p key={i + 2}>
                  {rend.attributes.createdAt.slice(8, 10)}
                  {rend.attributes.createdAt.slice(4, 8)}
                  {rend.attributes.createdAt.slice(0, 4)} at{" "}
                  {rend.attributes.createdAt.slice(11, 16)}
                </p>
                <p key={i + 3}> {rend.attributes.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (isUser === true) {
    const toRender = messagesToRender.filter(
      (mess) =>
        (mess.attributes.sentTo === location &&
          mess.attributes.sentBy === active) ||
        (mess.attributes.sentTo === active &&
          mess.attributes.sentBy === location)
    );
    // console.log(toRender, messagesToRender[0].attributes.sentBy, active);
    return (
      <div className="message-list">
        <ul>
          {toRender.map((rend, i) => {
            const user = senders.filter(
              (user) => user.id === rend.attributes.sentBy
            );
            // console.log(user);
            if (rend.attributes.sentBy === active) {
              return (
                <li key={i}>
                  <h3 key={i + 1}>{user[0].attributes.userName}</h3>
                  <p key={i + 2}>
                    {rend.attributes.createdAt.slice(8, 10)}
                    {rend.attributes.createdAt.slice(4, 8)}
                    {rend.attributes.createdAt.slice(0, 4)} at{" "}
                    {rend.attributes.createdAt.slice(11, 16)}
                  </p>
                  <button key={i + 3}>Edit</button>
                  <button key={i + 4}>Delete</button>
                  <p key={i + 5}> {rend.attributes.body}</p>
                </li>
              );
            }
            return (
              <li key={i}>
                <h3 key={i + 1}>{user[0].attributes.userName}</h3>
                <p key={i + 2}>
                  {rend.attributes.createdAt.slice(8, 10)}
                  {rend.attributes.createdAt.slice(4, 8)}
                  {rend.attributes.createdAt.slice(0, 4)} at{" "}
                  {rend.attributes.createdAt.slice(11, 16)}
                </p>
                <p key={i + 3}> {rend.attributes.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
