function Reset({ setGenState } = props) {
  function handleClick() {
    setGenState(0);
  }
  return <button onClick={handleClick}>Reset</button>;
}

export default Reset;
