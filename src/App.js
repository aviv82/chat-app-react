import { Fetch } from "./api/Fetch";
import { Add } from "./api/Add";
import { Delete } from "./api/Delete";

import "./App.css";

function App() {
  const HandleGet = async () => {
    const toFetch = await Fetch("tests");
    console.log("test fetch", toFetch.data);
  };
  const HandlePost = async () => {
    const toAdd = await Add("fresh");
    console.log("test add", toAdd.data);
  };
  const HandleDelete = async () => {
    const toDelete = await Delete(5);
    console.log("test delete", toDelete.data);
  };

  return (
    <div className="App">
      <button onClick={HandleGet}>test get</button>
      <button onClick={HandlePost}>test add</button>
      <button onClick={HandleDelete}>test delete</button>
    </div>
  );
}

export default App;
