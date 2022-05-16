import "./Intro.css";

export const Intro = ({ toShow, HandleCreateUser }) => {
  if (toShow === false)
    return (
      <div className="intro">
        <h1>Welcome to Chant!</h1>
        <p>
          We are a chat app designed to help you communicate with others!
          <br></br>
          To begin all you need to do is provide a chanter username and password
          below.
        </p>
        <div className="create-user">
          <input
            className="user-input"
            type="input"
            placeholder="Chanter Name"
          ></input>
          <input
            className="user-input"
            type="input"
            placeholder="Chanter password"
          ></input>
          <input
            className="user-input"
            type="input"
            placeholder="Confirm password"
          ></input>
          <button onClick={HandleCreateUser} className="user-btn">
            Create Chanter
          </button>
        </div>
      </div>
    );
};
