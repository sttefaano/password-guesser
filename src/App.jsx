import MainMenu from "./components/MainMenu";
import Messages from "./components/Messages";
import SinglePlayer from "./components/SinglePlayer";
import { useState } from "react";

function App() {
  const [genState, setGenState] = useState(0);
  const [genPassword, setGenPassword] = useState([0, 0, 0, 0]);

  function isGenerated() {
    if (genState == 0) {
      return (
        <MainMenu setGenPassword={setGenPassword} setGenState={setGenState} />
      );
    } else if (genState == 1) {
      return (
        <SinglePlayer
          setGenState={setGenState}
          setGenPassword={setGenPassword}
          genPassword={genPassword}
        />
      );
    } else if (genState == 2) {
      return <Messages />;
    }
  }
  return <div className="App">{isGenerated()}</div>;
}

export default App;
