import "./App.css";
// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Fetch } from "./api/Fetch";
import { Add } from "./api/Add";
import { Delete } from "./api/Delete";
import { Update } from "./api/Update";

import { Intro } from "./intro-section/Intro";

function App() {
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
        <Routes>
          <Route path="/" element={<Intro />} />
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
