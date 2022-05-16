import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      <h1>Welcome to Chant!</h1>
      <p>
        We are a chat app designed to help you communicate with others!<br></br>
        To begin all you need to do is provide a chanter username and password
        below.
      </p>
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
      <button className="user-btn">Create Chanter</button>
    </div>
  );
};
