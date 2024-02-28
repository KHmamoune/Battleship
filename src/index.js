const classes = require("./classes.js")

const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const x = document.querySelector(".x")
const y = document.querySelector(".y")
const btn = document.querySelector(".btn")

let turn = 0
let cords = [10, 10]
let player = new classes.Player("pl")
let computer = new classes.Player("com")

let g1 = new classes.Gameboard()
let g2 = new classes.Gameboard()

g1.placeShip(3, [6, 5])
g1.placeShip(2, [2, 2])
g1.placeShip(4, [8, 4])
g2.placeShip(3, [6, 5])
g2.placeShip(2, [2, 2])
g2.placeShip(4, [8, 4])

g1.createBoard(b1, "player")
g2.createBoard(b2, "oponent")

btn.addEventListener("click", () => {
  cords[0] = x.value
  cords[1] = y.value

  if (g2.isMoveLegal(cords)) {
    player.attack(g2, cords)
    turn = 1
  }
  checkWin()

  if(turn == 1){
    cords = [10, 10]
    while (!g1.isMoveLegal(cords)) {
      cords[0] = Math.floor(Math.random() * 10)
      cords[1] = Math.floor(Math.random() * 10)
    }

    computer.attack(g1, cords)
    turn = 0

  }
  checkWin()
})

function checkWin() {
  document.querySelectorAll(".cell").forEach(item => item.remove())
  g1.createBoard(b1, "player")
  g2.createBoard(b2, "oponent")

  if(g1.shipsSunk()) {
    console.log(computer.name + " is the winner")
    turn = 2
    btn.disabled = true
  }

  if(g2.shipsSunk()) {
    console.log(player.name + " is the winner")
    turn = 2
    btn.disabled = true
  }
}
