function Log({ logResults, genPassword, contador } = props) {
  return (
    <div className="Log">
      <h3>Log</h3>
      <ul>
        {logResults
          .slice(0)
          .reverse()
          .map((element, index) => {
            if (element[0] == genPassword.join("")) {
              return (
                <li key="win">
                  Congratz, you win. The password was: <span>{element[0]}</span>
                  <p>You tried: {contador} passwords</p>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  {element[0]} was given, the result:{" "}
                  <span className="pass0">{element[1][0]}</span>|
                  <span className="pass1">{element[1][1]}</span>|
                  <span className="pass2">{element[1][2]}</span>
                  <span></span>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}

export default Log;
