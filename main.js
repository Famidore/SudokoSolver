let board;
const rows = 9;
let tiles = []
let blanks = []


function setup() {
  createCanvas(800, 900);
  board = new Board(400, 400, 800);

  let tileSize = board.size / rows;


  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      tiles.push(new Tile(j + i * rows, i * (tileSize), j * (tileSize), tileSize, '', 0))
    }
  }
  for (let i = 0; i < tiles.length; i++) {
    blanks[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  setupSudoku();


  //print(blanks)
}

function draw() {
  background(51);
  board.display();
  for (let i = 0; i < tiles.length; i++) {
    6
    tiles[i].display();
  }
}

function setupSudoku() {
  for (let i = 1; i < 10; i++) {
    tiles[floor(random(tiles.length))].number = i
  }


  button = createButton('SOLVE!')
  button.position(width / 2 - 50, height - 75)
  button.size(100, 50)
  button.mousePressed(solve)
}




