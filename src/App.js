import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { Fetch } from "./api/Fetch";
import { Add } from "./api/Add";
import { Delete } from "./api/Delete";
import { Update } from "./api/Update";
import { createUser } from "./logic/createUser";

import { Intro } from "./component/intro-section/Intro";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chanters, setChanters] = useState({});
  const [loginWarn, setLoginWarn] = useState("");

  const fetchChanters = async () => {
    const result = await Fetch("chanters");
    setChanters(result);
  };

  useEffect(() => {
    fetchChanters();
  }, []);

  // console.log(chanters);
  const handleCreateUser = (event) => {
    const loginResult = createUser(event, chanters);
    if (loginResult === 1) {
      return setLoginWarn("please fill all required fields");
    } else if (loginResult === 2) {
      return setLoginWarn(
        "chanter password must be longer than 4 characters and shorter than 20 characters"
      );
    } else if (loginResult === 3) {
      return setLoginWarn("password and password confirmation do not match");
    } else if (loginResult === 4) {
      return setLoginWarn("Chanter name already exists");
    }
    Add("chanters", loginResult[0], loginResult[1]);
    setIsLoggedIn(true);
    fetchChanters();
  };

  useEffect(() => {}, [loginWarn]);
  const HandleGet = async () => {
    const toFetch = await Fetch("tests");
    console.log("test fetch", toFetch.data);
  };
  const HandlePost = async () => {
    const toAdd = await Add("fresh");
    console.log("test add", toAdd.data);
  };
  const HandleUpdate = async () => {
    const toUpdate = await Update(3, "brush");
    console.log("test update", toUpdate.data);
  };
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
                spanText={loginWarn}
                handleCreateUser={handleCreateUser}
              />
            }
          />
        </Routes>
        <div className="test-api-section">
          <button onClick={HandleGet}>test get</button>
          <button onClick={HandlePost}>test add</button>
          <button onClick={HandleUpdate}>test update</button>
          <button onClick={HandleDelete}>test delete</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
