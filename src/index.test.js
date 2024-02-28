const classes = require('./classes.js')

let newShip
let g

function init() {
  newShip = new classes.Ship(3)
  g = new classes.Gameboard()
}

test('ship initialisation', () => {
  init()
  expect(newShip.length).toBe(3)
  expect(newShip.hits).toBe(0)
  expect(newShip.sunk).toBe(false)
})

test('ship hit', () => {
  init()
  newShip.hit()
  expect(newShip.hits).toBe(1)
})

test('ship sunk', () => {
  init()
  newShip.hit()
  newShip.hit()
  newShip.hit()
  newShip.isSunk()
  expect(newShip.sunk).toBe(true)
})

test('placing ship', () => {
  init()
  g.placeShip(3, [5, 6])
  g.placeShip(4, [3, 1])

  expect(g.board[5][6]).toBe(0)
  expect(g.board[5][7]).toBe(0)
  expect(g.board[5][8]).toBe(0)
})

test('board hit', () => {
  init()
  g.placeShip(3, [5, 6])
  g.recieveAttack([6, 8])
  g.recieveAttack([5, 6])

  expect(g.board[6][8]).toBe("miss")
  expect(g.board[5][6]).toBe("hit")
})

test('ships sunk', () => {
  init()
  g.placeShip(3, [5, 6])
  g.placeShip(4, [3, 1])
  g.recieveAttack([5, 6])
  g.recieveAttack([5, 7])
  g.recieveAttack([5, 8])
  g.recieveAttack([3, 1])
  g.recieveAttack([3, 2])
  g.recieveAttack([3, 3])
  g.recieveAttack([3, 4])
  console.table(g.board)

  expect(g.shipsSunk()).toBe(true)
})
