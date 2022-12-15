class Ship {
  constructor(size) {
    this.size = size;
    this.health = size;
    this.sunk = false;
  }

  hit() {
    this.health -= 1;
    if (!this.health) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }

}

export {Ship}