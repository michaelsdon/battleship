import { Ship } from "./ship";

test('ship - full health', () => {
  let ship = new Ship(3);
  expect(ship.health).toEqual(3);
})

test('ship - length', () => {
  let ship = new Ship(3);
  expect(ship.size).toEqual(3);
})

test('ship - hit, reduces health by one', () => {
  let shipSize = 3
  let ship = new Ship(shipSize);

  ship.hit()
  expect(ship.health).toEqual(shipSize - 1);
})

test('ship - isSunk -> false', () => {
  let shipSize = 3
  let ship = new Ship(shipSize);

  expect(ship.isSunk()).toEqual(false);
})

test('ship - isSunk -> true', () => {
  let shipSize = 3
  let ship = new Ship(shipSize);

  for (let i = 0; i < shipSize; i++) {
    ship.hit();
  }

  expect(ship.isSunk()).toEqual(true);
})