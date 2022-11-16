class Tile{
    constructor(ID, x, y, size, number, r){
        this.ID = ID;
        this.x = x;
        this.y = y;
        this.size = size;
        this.number = number;
        this.r = r;
    }

    display(){
        noFill();
        stroke(0);
        strokeWeight(3);
        rectMode(CORNER);
        rect(this.x, this.y, this.size, this.size);
        textAlign(CENTER, CENTER)
        textSize(this.size)
        fill(this.r, 0, 0);
        text(this.number, this.x + this.size/2, this.y + this.size/2)
    }
}