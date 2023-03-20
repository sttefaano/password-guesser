import { randomPasswordGenerator } from "../helper/helper";

function Generator({ setGenPassword, setGenState } = props) {
  function handleClick() {
    setGenPassword(randomPasswordGenerator());
    setGenState(1);
  }
  return (
    <div className="Generator">
      <h2>Please, click the button to generate a password.</h2>
      <button onClick={handleClick}>Generate</button>
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

export default Generator;
