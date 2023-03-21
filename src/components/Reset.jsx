import { randomPasswordGenerator } from "../helper/helper";

function Reset({ setGenPassword, setLogResults } = props) {
  function handleClick() {
    setLogResults([]);
    setGenPassword(randomPasswordGenerator());
  }
  return <button onClick={handleClick}>Reset</button>;
}

export default Reset;
