import { randomPasswordGenerator } from "../helper/helper";

function MainMenu({ setGenPassword, setGenState } = props) {
  function handleSingle() {
    setGenPassword(randomPasswordGenerator());
    setGenState(1);
  }

  function handleMulti() {
    setGenState(2);
  }
  return (
    <div className="MainMenu">
      <h2>Please, choose a game mode.</h2>
      <button className="single-player" onClick={handleSingle}>
        Single Player
      </button>
      {/* <button onClick={handleMulti}>Multi Player</button> */}
      <p>Generate a password and try to guess it</p>
      <ul>
        <li>First, click the generate button to generate a new password</li>
        <li>
          Then, in the input field, introduce a 4 digit combination and hit
          enter.
        </li>
        <li>
          In the log field you would given a result for your try.
          <ul>
            <li>
              The <b>first</b> number in the string means that you{" "}
              <b>get the number right in the right position</b>
            </li>
            <li>
              The <b>second</b> number in the string means that you get the
              number right but you <b>missed the position</b>
            </li>
            <li>
              The <b>last</b> number in the string means <b>wrong numbers</b>,
              they are not in the password
            </li>
          </ul>
        </li>
        <li>Give it a try!</li>
      </ul>
    </div>
  );
}

export default MainMenu;
