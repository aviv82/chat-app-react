import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { Fetch } from "./api/Fetch";
import { Add } from "./api/Add";
import { Delete } from "./api/Delete";
import { Update } from "./api/Update";
import { createUser } from "./logic/createUser";
import { logInUser } from "./logic/logInUser";

import { Intro } from "./component/intro-section/Intro";
import { UserList } from "./component/user-list/UserList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chanters, setChanters] = useState({});
  const [createWarn, setCreateWarn] = useState("");
  const [loginWarn, setLoginWarn] = useState("");
  // const [channels, setChannels] = useState({});

  const fetchChanters = async () => {
    const result = await Fetch("chanters");
    setChanters(result);
  };

  useEffect(() => {
    fetchChanters();
  }, []);

  // console.log(chanters);
  const handleCreateUser = (event) => {
    const createResult = createUser(event, chanters);
    if (createResult === 1) {
      return setCreateWarn("please fill all required fields");
    } else if (createResult === 2) {
      return setCreateWarn(
        "chanter password must be longer than 4 characters and shorter than 20 characters"
      );
    } else if (createResult === 3) {
      return setCreateWarn("password and password confirmation do not match");
    } else if (createResult === 4) {
      return setCreateWarn("Chanter name already exists");
    }
    Add("chanters", createResult[0], createResult[1]);
    setIsLoggedIn(true);
    fetchChanters();
  };

  const handleLogin = (event) => {
    const loginResult = logInUser(event, chanters);
    if (loginResult === 1) {
      return setLoginWarn("please fill all required fields");
    } else if (loginResult === 2) {
      return setLoginWarn(
        "chanter name does not exist. if you do not already have a chant account please create one above"
      );
    } else if (loginResult === 3) {
      return setLoginWarn("password incorrect. please try again");
    }
    Update("chanters", loginResult, true);
    setIsLoggedIn(true);
    fetchChanters();
  };

  useEffect(() => {
    fetchChanters();
  }, [isLoggedIn]);

  const HandleDelete = async () => {
    const toDelete = await Delete(7);
    console.log("test delete", toDelete.data);
  };

  return (
    <Router>
      <div className="App">
        <header className="head">
          <h1 className="title">Chant</h1>
        </header>
        {/* {!isLoggedIn ? <Intro /> : <></>} */}
        <Routes>
          <Route
            path="/"
            element={
              <Intro
                toShow={isLoggedIn}
                firstSpanText={createWarn}
                secondSpanText={loginWarn}
                handleCreateUser={handleCreateUser}
                handleLogin={handleLogin}
              />
            }
          />
        </Routes>
        {chanters.data ? (
          <UserList chanterObject={chanters.data} />
        ) : (
          <li>Loading...</li>
        )}
        <div className="test-api-section">
          <button onClick={HandleDelete}>test delete</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
