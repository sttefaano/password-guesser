let password = [0, 0, 0, 0]

function randomPasswordGenerator(){
  for(let i = 0; i < password.length; i++){
    password[i] = Math.floor(Math.random() * 10)
  }
   return password
}

function comparePassword(genPass, pass){
  let response = [0,0,0]
  if (genPass.join("") == pass){
    console.log("Congratz, you win")
    return [4, 0, 0]
  }
  for (let i=0; i < pass.length; i++){
    let state = 0
    console.log("number: " + pass[i])
    for(let j=0; j < genPass.length; j++){
      if(pass[i] == genPass[j] && i == j && state < 2){
        response[0] += 1
        state = 1
        console.log("hit")
      }
      else if(pass[i] == genPass[j] && state < 2){
        response[1] += 1
        state = 2
        console.log("almost")
      }
      console.log(state)
    }
    if (state == 0){
      response [2] += 1
      console.log("fail")
    }
  }
  return response;
}
export {randomPasswordGenerator, comparePassword}