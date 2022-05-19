import "./UserList.css";

export const UserList = ({ chanterObject, handleLogOut }) => {
  const onFilter = [];
  const onList = [];

  const offFilter = [];
  const offList = [];

  onFilter.push(chanterObject.filter((item) => item.attributes.isLoggedIn));
  onList.push(onFilter[0].map((name, i) => name.attributes.userName));
  // console.log(onFilter, onList);

  offFilter.push(chanterObject.filter((item) => !item.attributes.isLoggedIn));
  offList.push(offFilter[0].map((name, i) => name.attributes.userName));
  // console.log(offFilter, offList);

  return (
    <div className="user-list">
      <h2>Chanters</h2>
      <p>Online</p>
      <ul key={1}>
        {onList[0].map((item, x) => (
          <li key={x}>{item}</li>
        ))}
      </ul>
      <p>Offline</p>
      <ul key={2}>
        {offList[0].map((item, x) => (
          <li key={x}>{item}</li>
        ))}
      </ul>
      <button onClick={handleLogOut} className="logout-btn">
        LogOut Chanter
      </button>
    </div>
  );
};
