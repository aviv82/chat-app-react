import { Fetch } from "./api/Fetch";
import "./App.css";

function App() {
  const HandleFetch = async () => {
    const toFetch = await Fetch("tests");
    console.log("test", toFetch.data);
  };

  return (
    <div className="App">
      <button onClick={HandleFetch}>test</button>
    </div>
  );
}

export default App;
