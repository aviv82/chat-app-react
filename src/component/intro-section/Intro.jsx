import "./Intro.css";

export const Intro = ({ toShow, spanText, handleCreateUser, LoginHandler }) => {
  if (toShow === false) {
    return (
      <div className="intro">
        <h1>Welcome to Chant!</h1>
        <p>
          We are a chat app designed to help you communicate with others!
          <br></br>
          To begin all you need to do is create a chanter username and password
          below.
        </p>
        <span>{spanText}</span>
        <div className="create-user">
          <input
            className="user-input"
            type="input"
            placeholder="Create Chanter Name"
          ></input>
          <input
            className="user-input"
            type="input"
            placeholder="Create password"
          ></input>
          <input
            className="user-input"
            type="input"
            placeholder="Confirm password"
          ></input>
          <button onClick={handleCreateUser} className="user-btn">
            Create Chanter
          </button>
        </div>
        <div className="login-user">
          <p>
            Already have a Chant account? <br></br>
            Log in below
          </p>
          <input
            className="user-input"
            type="input"
            placeholder="Chanter Name"
          ></input>
          <input
            className="user-input"
            type="input"
            placeholder="Chanter Password"
          ></input>
          <button onClick={LoginHandler} className="user-btn">
            Log in to Chant
          </button>
        </div>
      </div>
    );
  }
};
