import { Fetch } from "./api/Fetch";
import { Add } from "./api/Add";
import "./App.css";

function App() {
  const HandleGet = async () => {
    const toFetch = await Fetch("tests");
    console.log("test", toFetch.data);
  };
  const HandlePost = async () => {
    const toAdd = await Add("woop");
    console.log("test", toAdd.data);
  };

  return (
    <div className="App">
      <button onClick={HandleGet}>test get</button>
      <button onClick={HandlePost}>test add</button>
    </div>
  );
}

export default App;
