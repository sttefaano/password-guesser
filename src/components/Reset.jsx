import { randomPasswordGenerator } from "../helper/helper";

function Reset({
  setGenPassword,
  setLogResults,
  setContador,
  setGenState,
} = props) {
  function handleClickReset() {
    setLogResults([]);
    setGenPassword(randomPasswordGenerator());
    setContador(0);
  }
  function handleClickMainMenu() {
    setGenState(0);
  }
  return (
    <div className="buttons">
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={handleClickMainMenu}>Main Menu</button>
    </div>
  );
}

export default Reset;
