import { GameBoard } from "./gameboard";
import { Ship } from "./ship";

test('GameBoard - placeShip on emty board, horizontal', () => {
  let board = new GameBoard();
  let ship = new Ship(4);

  let expectedBoard = [
    [[ship, false], [ship, false], [ship, false], [ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],    
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]]    
  ]

  board.placeShip(4, [0,0], true)

  expect(board.board).toEqual(expectedBoard)
})

test('GameBoard - placeShip on emty board, Vertical', () => {
  let board = new GameBoard();
  let ship = new Ship(4);

  let expectedBoard = [
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],    
    [[null, false], [ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]]    
  ]

  board.placeShip(4, [1,1], false)

  expect(board.board).toEqual(expectedBoard)
})

test('GameBoard - placeShip on emty board, Overflow Horizontal', () => {
  let board = new GameBoard();
  let ship = new Ship(5);

  let expectedBoard = [
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],    
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]]    
  ]

  board.placeShip(5, [6,6], true)

  expect(board.board).toEqual(expectedBoard)
})

test('GameBoard - placeShip on emty board, Overflow Vertical', () => {
  let board = new GameBoard();
  let ship = new Ship(5);

  let expectedBoard = [
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],    
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]]    
  ]

  board.placeShip(5, [6,6], false)

  expect(board.board).toEqual(expectedBoard)
})

test('GameBoard - placeShip ontop of other ship', () => {
  let board = new GameBoard();
  let ship = new Ship(5);

  let expectedBoard = [
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],    
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]]    
  ]

  board.placeShip(5, [0,0], false)
  board.placeShip(4, [0,0], true)

  expect(board.board).toEqual(expectedBoard)
})

test('GameBoard - recieveAttack not on ship', () => {
  let board = new GameBoard();
  let ship = new Ship(5);

  let expectedBoard = [
    [[ship, false], [null, true], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],    
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]]    
  ]

  board.placeShip(5, [0,0], false)
  board.receiveAttack([1,0])

  expect(board.board).toEqual(expectedBoard)
})

test('GameBoard - recieveAttack on ship', () => {
  let board = new GameBoard();
  let ship = new Ship(5);
  ship.hit();

  let expectedBoard = [
    [[ship, true], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],    
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[ship, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]],
    [[null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false], [null, false]]    
  ]

  board.placeShip(5, [0,0], false)
  board.receiveAttack([0,0])

  expect(board.board).toEqual(expectedBoard)
})

test('GameBoard - allShipsSunk - false', () => {
  let board = new GameBoard();

  board.placeShip(5, [0,0], false)
  board.receiveAttack([0,0])

  expect(board.allShipsSunk()).toEqual(false)
})

test('GameBoard - allShipsSunk - true', () => {
  let board = new GameBoard();


  board.placeShip(5, [0,0], false)
  board.receiveAttack([0,0])
  board.receiveAttack([0,1])
  board.receiveAttack([0,2])
  board.receiveAttack([0,3])
  board.receiveAttack([0,4])

  expect(board.allShipsSunk()).toEqual(true)
})

