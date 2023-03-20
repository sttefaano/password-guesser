import Presentor from "./components/Presentor";
import Log from "./components/Log";
import Input from "./components/Input";
import Generator from "./components/Generator";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  const [genState, setGenState] = useState(0);
  const [genPassword, setGenPassword] = useState([0, 0, 0, 0]);
  const [password, setPassword] = useState("");
  const [logResults, setLogResults] = useState([]);

  function isGenerated() {
    if (genState == 0) {
      return (
        <Generator setGenPassword={setGenPassword} setGenState={setGenState} />
      );
    } else {
      return (
        <>
          <Presentor />
          <Input
            genPassword={genPassword}
            setPassword={setPassword}
            setLogResults={setLogResults}
          />
          <Log logResults={logResults} genPassword={genPassword} />
          <Reset setGenState={setGenState} setLogResults={setLogResults} />
        </>
      );
    }
  }
  return <div className="App">{isGenerated()}</div>;
}

export default App;
