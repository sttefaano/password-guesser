function randomPasswordGenerator() {
  let password = [0, 0, 0, 0];
  for (let i = 0; i < password.length; i++) {
    password[i] = Math.floor(Math.random() * 10);
  }
  return password;
}

function comparePassword(genPass, pass) {
  let response = [0, 0, 0];
  if (genPass.join("") == pass) {
    console.log("Congratz, you win");
    return [4, 0, 0];
  } else {
    for (let i = 0; i < pass.length; i++) {
      if (pass[i] == genPass[i]) {
        response[0]++;
      } else if (genPass.includes(parseInt(pass[i]))) {
        response[1]++;
      } else {
        response[2]++;
      }
    }
    return response;
  }
}
export { randomPasswordGenerator, comparePassword };
