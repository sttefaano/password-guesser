import { useState } from "react";
import Reset from "./Reset";
import Log from "./Log";
import Input from "./Input";
import Presentor from "./Presentor";

function SinglePlayer({ setGenState, setGenPassword, genPassword } = props) {
  const [logResults, setLogResults] = useState([]);
  const [contador, setContador] = useState(0);
  return (
    <>
      <Presentor />
      <Input
        genPassword={genPassword}
        setLogResults={setLogResults}
        setContador={setContador}
        contador={contador}
        q
      />
      <Log
        logResults={logResults}
        genPassword={genPassword}
        contador={contador}
      />
      <Reset
        setGenPassword={setGenPassword}
        setLogResults={setLogResults}
        setContador={setContador}
        setGenState={setGenState}
      />
    </>
  );
}

export default SinglePlayer;
