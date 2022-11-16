class Board {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    display() {
        rectMode(CENTER);
        fill(150)
        rect(this.x, this.y, this.size, this.size);
    }
}