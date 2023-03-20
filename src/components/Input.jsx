import { comparePassword } from "../helper/helper";

function Input({ genPassword, setPassword, setLogResults } = props) {
  function handleEnterPress(e) {
    let password = e.target.value;
    if (e.key === "Enter" && password.length == 4) {
      setPassword(password);
      console.log(
        `Enter key pessed\n${password} was entered.\n${genPassword} is the pass generated.`
      );
      console.log();
      addResultToLog(password, comparePassword(genPassword, password).join(""));
    }
  }

  function addResultToLog(pass, result) {
    setLogResults((current) => [...current, [pass, result]]);
  }

  return (
    <>
      <input
        type="number"
        onKeyPress={handleEnterPress}
        placeholder="Enter a 4 digit password, not more, not less"
      />
    </>
  );
}

export default Input;
