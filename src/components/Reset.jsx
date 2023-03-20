function Reset({ setGenState, setLogResults } = props) {
  function handleClick() {
    setGenState(0);
    setLogResults([]);
  }
  return <button onClick={handleClick}>Reset</button>;
}

export default Reset;
