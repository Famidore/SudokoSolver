

function solve() {
    fund = findNumber()

    for (let i = 0; i < fund.length; i++) {
        firstIndex = fund[i][0]
        tiles[firstIndex].r = 255;
        blanks[firstIndex] = []

        checkRow(fund[i][1], tiles[firstIndex].number)
        checkCol(fund[i][2], tiles[firstIndex].number)
    }
    print(blanks)
}

function findNumber() {
    let found = []
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].number != '') {
            found.push([tiles[i].ID, floor(tiles[i].x / (board.size / rows)), floor(tiles[i].y / (board.size / rows))])
        }
    }
    if (found != []) {
        return found
    }
    console.error('Could not find beginning!')
}

function chceck3by3(row, col, num) {
    for (let i = row; i < 3; i++) {
        for (let j = col; j < 3; j++) {
            if (blanks[i + j * board.size]) {
                blanks[i + j * board.size].splice(blanks[i + j * board.size].indexOf(num, 1))
            }
        }
    }

}

function checkRow(row, num) {
    for (let i = 0; i <= board.size + 1; i += 1) {
        if (blanks[row + i]) {
            blanks[row + i].splice(blanks[row + i].indexOf(num, 1))
        }
    }

}

function checkCol(col, num) {
    for (let i = 0; i <= board.size + 1; i += 1) {
        if (blanks[col * i]) {
            blanks[col * i].splice(blanks[col * i].indexOf(num, 1))
        }
    }
}

