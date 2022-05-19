import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { Fetch } from "./api/Fetch";
import { Add } from "./api/Add";
import { Delete } from "./api/Delete";
import { Update } from "./api/Update";
import { createUser } from "./logic/createUser";
import { logInUser } from "./logic/logInUser";

import { Intro } from "./component/intro-section/Intro";
import { UserList } from "./component/user-list/UserList";
import { ChannelList } from "./component/channel-list/ChannelList";
import { createChannel } from "./logic/createChannel";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chanters, setChanters] = useState({});
  const [createWarn, setCreateWarn] = useState("");
  const [loginWarn, setLoginWarn] = useState("");

  const [channels, setChannels] = useState({});
  const [channelWarn, setChannelWarn] = useState("");

  const myChanterId = useRef(0);

  const fetchChanters = async () => {
    const result = await Fetch("chanters");
    setChanters(result);
  };

  const fetchChannels = async () => {
    const channelResult = await Fetch("channels");
    setChannels(channelResult);
  };

  useEffect(() => {
    fetchChanters();
    fetchChannels();
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
    Add("chanters", {
      data: { userName: createResult[0], password: createResult[1] },
    });
    setCreateWarn("Chanter created! Please login below");
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
    myChanterId.current = loginResult;
    setIsLoggedIn(true);
    fetchChanters();
  };

  const handleLogOut = () => {
    setLoginWarn("LogOut successful. See you soon!");
    Update("chanters", myChanterId.current, false);
    setIsLoggedIn(false);
    fetchChanters();
  };

  useEffect(() => {
    fetchChanters();
  }, [isLoggedIn, createWarn]);

  const handleCreateChannel = (event) => {
    const createResult = createChannel(event, channels, myChanterId.current);
    if (createResult === 1) {
      return setChannelWarn(
        "Please log in to Chant before creating or joining channels"
      );
    } else if (createResult === 2) {
      return setChannelWarn("Please provide new channel name");
    } else if (createResult === 3) {
      return setChannelWarn(
        "Channel already exists. Join by clicking on channel name in list above"
      );
    }
    Add("channels", { data: { name: createResult } });
    setChannelWarn("Channel created! Join by clicking on channel name above");
    fetchChannels();
  };

  const HandleDelete = async () => {
    const toDelete = await Delete(7);
    console.log("test delete", toDelete.data);
  };

  return (
    <Router>
      <header className="head">
        <h1 className="title">Chant</h1>
      </header>
      <div className="App">
        <ChannelList
          handleCreateChannel={handleCreateChannel}
          span={channelWarn}
        />
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
          <UserList chanterObject={chanters.data} handleLogOut={handleLogOut} />
        ) : (
          <li>Loading...</li>
        )}
      </div>
      <div className="test-api-section">
        <button onClick={HandleDelete}>test delete</button>
      </div>
    </Router>
  );
}

export default App;
