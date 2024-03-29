import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { MessageList } from "./component/message-list/MessageList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chanters, setChanters] = useState({});
  const [createWarn, setCreateWarn] = useState("");
  const [loginWarn, setLoginWarn] = useState("");
  const [userWarn, setUserWarn] = useState("");

  const [channels, setChannels] = useState({});
  const [channelWarn, setChannelWarn] = useState("");
  const [messages, setMessages] = useState({});

  const myChanterId = useRef(0);
  const myChannel = useRef(["", 0, false]);

  const fetchChanters = async () => {
    const result = await Fetch("chanters");
    setChanters(result);
  };

  const fetchChannels = async () => {
    const channelResult = await Fetch("channels");
    setChannels(channelResult);
  };

  const fetchMessages = async () => {
    const channelResult = await Fetch("messages");
    setMessages(channelResult);
  };

  useEffect(() => {
    fetchChanters();
    fetchChannels();
    fetchMessages();
  }, []);

  // console.log(chanters);
  const handleCreateUser = (event) => {
    setLoginWarn("");
    const createResult = createUser(event, chanters);
    if (createResult === 1) {
      event.target.parentElement.children[0].value = "";
      event.target.parentElement.children[1].value = "";
      event.target.parentElement.children[2].value = "";
      return setCreateWarn("please fill all required fields");
    } else if (createResult === 2) {
      event.target.parentElement.children[0].value = "";
      event.target.parentElement.children[1].value = "";
      event.target.parentElement.children[2].value = "";
      return setCreateWarn(
        "chanter password must be longer than 4 characters and shorter than 20 characters"
      );
    } else if (createResult === 3) {
      event.target.parentElement.children[0].value = "";
      event.target.parentElement.children[1].value = "";
      event.target.parentElement.children[2].value = "";
      return setCreateWarn("password and password confirmation do not match");
    } else if (createResult === 4) {
      event.target.parentElement.children[0].value = "";
      event.target.parentElement.children[1].value = "";
      event.target.parentElement.children[2].value = "";
      return setCreateWarn("Chanter name already exists");
    }
    Add("chanters", {
      data: { userName: createResult[0], password: createResult[1] },
    });
    setCreateWarn("Chanter created! Please login below");
    fetchChanters();
    event.target.parentElement.children[0].value = "";
    event.target.parentElement.children[1].value = "";
    event.target.parentElement.children[2].value = "";
  };

  const handleLogin = (event) => {
    setCreateWarn("");
    const loginResult = logInUser(event, chanters);
    if (loginResult === 1) {
      event.target.parentElement.children[0].value = "";
      event.target.parentElement.children[1].value = "";
      return setLoginWarn("please fill all required fields");
    } else if (loginResult === 2) {
      event.target.parentElement.children[0].value = "";
      event.target.parentElement.children[1].value = "";
      return setLoginWarn(
        "chanter name does not exist. if you do not already have a chant account please create one above"
      );
    } else if (loginResult === 3) {
      event.target.parentElement.children[0].value = "";
      event.target.parentElement.children[1].value = "";
      return setLoginWarn("password incorrect. please try again");
    }
    Update("chanters", loginResult, true);
    myChanterId.current = loginResult;
    setIsLoggedIn(true);
    fetchChanters();
    event.target.parentElement.children[0].value = "";
    event.target.parentElement.children[1].value = "";
  };

  const handleLogOut = () => {
    setChannelWarn("");
    setUserWarn("LogOut successful. See you soon!");
    Update("chanters", myChanterId.current, false);
    myChanterId.current = 0;
    setIsLoggedIn(false);
    fetchChanters();
  };

  useEffect(() => {
    fetchChanters();
  }, [isLoggedIn, createWarn]);

  useEffect(() => {
    fetchMessages();
  }, [isLoggedIn]);

  const handleCreateChannel = (event) => {
    setUserWarn("");
    const createResult = createChannel(event, channels, myChanterId.current);
    if (createResult === 1) {
      event.target.parentElement.children[0].value = "";
      return setChannelWarn(
        "Please log in to Chant before creating new channels"
      );
    } else if (createResult === 2) {
      event.target.parentElement.children[0].value = "";
      return setChannelWarn("Please provide new channel name");
    } else if (createResult === 3) {
      event.target.parentElement.children[0].value = "";
      return setChannelWarn(
        "Channel already exists. Join by clicking on channel name in list above"
      );
    }
    Add("channels", {
      data: { name: createResult, chanter: myChanterId.current },
    });
    setChannelWarn("Channel created! Join by clicking on channel name above");
    fetchChannels();
    event.target.parentElement.children[0].value = "";
  };

  useEffect(() => {
    fetchChannels();
  }, [channelWarn]);

  const handleLink = (event) => {
    setChannelWarn("");
    setUserWarn("");
    // console.log(event.target.parentElement.parentElement.className);
    const chanter = chanters.data.filter(
      (chan) => chan.attributes.userName === event.target.innerHTML
    );
    if (
      event.target.parentElement.parentElement.className === "channel-list" &&
      !isLoggedIn
    ) {
      setChannelWarn("Please log in to Chant before joining a channel");
    } else if (
      event.target.parentElement.parentElement.className === "user-list" &&
      !isLoggedIn
    ) {
      setUserWarn("Please log in to Chant before messaging other chanters");
    } else if (
      isLoggedIn &&
      event.target.parentElement.parentElement.className === "channel-list"
    ) {
      const channel = channels.data.filter(
        (chan) => chan.attributes.name === event.target.innerHTML
      );
      setUserWarn("");
      myChannel.current = [channel[0].attributes.name, channel[0].id, false];
      // console.log(myChannel.current[2]);
    } else if (
      event.target.parentElement.parentElement.className === "user-list" &&
      isLoggedIn &&
      chanter[0].id === myChanterId.current
    ) {
      setUserWarn("Chanters can't message themselves");
    } else if (
      event.target.parentElement.parentElement.className === "user-list" &&
      isLoggedIn
    ) {
      const channel = chanters.data.filter(
        (chan) => chan.attributes.userName === event.target.innerHTML
      );
      setUserWarn("");
      setChannelWarn("");
      myChannel.current = [channel[0].attributes.userName, channel[0].id, true];
      // console.log(myChannel.current[2]);
    }
    fetchChannels();
    fetchMessages();
  };

  const handleNewMessage = (event) => {
    if (
      event.target.parentElement.children[0].value !== "" &&
      myChannel.current[1] !== 0
    ) {
      const message = [
        myChannel.current[1],
        myChannel.current[2],
        event.target.parentElement.children[0].value,
        myChanterId.current,
      ];
      if (message[1] === false) {
        Add("messages", {
          data: {
            body: message[2],
            sentBy: message[3],
            sentTo: message[0],
            isUser: message[1],
            chanter: message[3],
            channel: message[0],
          },
        });
        // console.log("new message", message);
        fetchMessages();
        fetchChannels();
        event.target.parentElement.children[0].value = "";
        return;
      } else if (message[1] === true) {
        Add("messages", {
          data: {
            body: message[2],
            sentBy: message[3],
            sentTo: message[0],
            isUser: message[1],
            chanter: message[3],
          },
        });
        // console.log("new message", message);
        fetchMessages();
        fetchChannels();
        event.target.parentElement.children[0].value = "";
        return;
      }
    }
    fetchMessages();
    fetchChannels();
    console.log("nope");
    event.target.parentElement.children[0].value = "";
    return;
  };

  const HandleDelete = async () => {
    const toDelete = await Delete(7);
    console.log("test delete", toDelete.data);
  };

  return (
    <div className="App">
      <header className="head">
        <h1 className="title">Chant</h1>
      </header>
      <div className="mid">
        {channels.data ? (
          <ChannelList
            handleCreateChannel={handleCreateChannel}
            span={channelWarn}
            channelObject={channels}
            handleLink={handleLink}
          />
        ) : (
          <li>Loading...</li>
        )}
        {!isLoggedIn ? (
          <Intro
            firstSpanText={createWarn}
            secondSpanText={loginWarn}
            handleCreateUser={handleCreateUser}
            handleLogin={handleLogin}
          />
        ) : (
          <MessageList
            handleNewMessage={handleNewMessage}
            chanName={myChannel.current}
            messagesToRender={messages.data}
            senders={chanters.data}
            active={myChanterId.current}
          />
        )}

        {/* <Routes>
          <Route path="/" />
        </Routes> */}
        {chanters.data ? (
          <UserList
            handleLink={handleLink}
            userSpan={userWarn}
            chanterObject={chanters.data}
            handleLogOut={handleLogOut}
          />
        ) : (
          <li>Loading...</li>
        )}
      </div>
      <div className="test-api-section">
        <button onClick={HandleDelete}>test delete</button>
      </div>
    </div>
  );
}

export default App;
