function getComputerChoice(){
    const pick = ["rock","paper","scissors"];
    return pick[Math.floor(Math.random() * (3 - 1 + 1) + 1)];
}

console.log(getComputerChoice());