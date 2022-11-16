let board;
const rows = 9;
let tiles = []

function setup() {
  createCanvas(800, 900);
  board = new Board(400, 400, 800);

  let tileSize = board.size / rows;


  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      tiles.push(new Tile(j + i * rows, i * (tileSize), j * (tileSize), tileSize, '', 0))
    }
  }

  setupSudoku();
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




