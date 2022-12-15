import { Ship } from "./ship"

class GameBoard {
  constructor() {
    this.board = [
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
  }

  isLegalMove(shipSize, point, horizontal) {

    // Checking Board Size Constraints
    if (horizontal) {
      if (point[0] + shipSize >= this.board.length) {
        return false;
      } 
    } else {
      if (point[1] + shipSize >= this.board.length) {
        return false;
      }
    }
    return true;
  }

  noOverLap(shipSize, point, horizontal) {
    // Checking Overlap
    let x = point[0]
    let y = point[1]
    for (let i = 0; i < shipSize; i++) {
      if (horizontal) {
        if (this.board[y][x + i][0]){
          return false;
        }
      } else {
        if (this.board[y + i][x][0]) {
          return false;
        }
      }
    }
    return true;
  }

  placeShip(shipSize, point, horizontal) {

    if (this.isLegalMove(shipSize, point, horizontal) && this.noOverLap(shipSize, point, horizontal)) {
      let ship = new Ship(shipSize);
      let x = point[0]
      let y = point[1]
  
      for (let i = 0; i < shipSize; i++) {
        if (horizontal) {
          this.board[y][x + i][0] = ship;
        } else {
          this.board[y + i][x][0] = ship
        }
      }
    }
  }

  receiveAttack(point) {
    let x = point[0];
    let y = point[1];
    let ship = this.board[y][x][0];

    this.board[y][x][1] = true;

    if (ship) {
      ship.hit();
    }
  }

  allShipsSunk() {
    for (let row of this.board) {
      for (let column of row) {
        if (column[0] !== null && !column[1]) {
          return false;
        }
      }
    }
    return true;
  }
}

export {GameBoard}