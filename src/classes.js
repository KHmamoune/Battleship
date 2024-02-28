class Gameboard {
  constructor() {
    this.ships = []
    this.board = new Array(10)
    for (let i = 0; i < 10; i++) {
      this.board[i] = new Array(10).fill("empty")
    }
  }

  placeShip(length, c) {
    let ship = new Ship(length)

    for (let i = 0; i < ship.length; i++) {
      this.board[c[0]][c[1] + i] = this.ships.length
    }

    this.ships.push(ship)
  }

  recieveAttack(c) {
    let target = this.board[c[0]][c[1]]

    if(target == "empty") {
      this.board[c[0]][c[1]] = "miss"
      return
    }

    this.ships[target].hit()
    this.board[c[0]][c[1]] = "hit"

    if(this.shipsSunk()) {
      console.log("all ships are sunk")
    }
  }

  shipsSunk() {
    for(let i = 0; i < this.ships.length; i++) {
      if(!this.ships[i].sunk) {
        return false
      }
    }

    return true
  }

  isMoveLegal(c) {
    if(c[0] > 9 || c[1] > 9) {
      return false
    }

    if(this.board[c[0]][c[1]] == "hit" || this.board[c[0]][c[1]] == "miss") {
      return false
    }

    return true
  }

  createBoard(elem, type) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const element = document.createElement("div")
        element.classList.add("cell")

        if(type == "oponent") {
          if (this.board[i][j] == "hit") {
            element.classList.add("hit")
          } else if (this.board[i][j] == "miss") {
            element.classList.add("miss")
          } else {
            element.classList.add("oponent")
          }

          elem.appendChild(element)

        }else{
          if (this.board[i][j] == "empty") {
            element.classList.add("empty")
          } else if (this.board[i][j] == "hit") {
            element.classList.add("hit")
          } else if (this.board[i][j] == "miss") {
            element.classList.add("miss")
          } else {
            element.classList.add("ship")
          }

          elem.appendChild(element)
        }
      }
    }
  }

}


class Ship {
  constructor(length) {
    this.length = length
    this.hits = 0
    this.sunk = false
  }

  hit() {
    this.hits += 1
    this.isSunk()
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true
    }
  }
}


class Player {
  constructor(name) {
    this.name = name
  }

  attack(game, cords) {
    game.recieveAttack(cords)
  }
}


module.exports = { Ship: Ship, Gameboard: Gameboard, Player: Player }
