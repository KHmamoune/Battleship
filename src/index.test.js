const ship = require('./ship.js')

let newShip = new ship.Ship(3)

test('ship initialisation', () => {
  expect(newShip.length).toBe(3)
  expect(newShip.hits).toBe(0)
  expect(newShip.sunk).toBe(false)
})

test('ship hit', () => {
  newShip.hit()
  expect(newShip.hits).toBe(1)
})

test('ship sunk', () => {
  newShip.hit()
  newShip.hit()
  newShip.hit()
  newShip.isSunk()
  expect(newShip.sunk).toBe(true)
})
