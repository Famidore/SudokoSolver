

function solve() {
    let possible = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    fund = findNumber()
    //print(fund)


    for (let i = 0; i < fund.length; i++) {
        firstIndex = fund[i][0]
        tiles[firstIndex].r = 255;
        //blanks[firstIndex].splice(blanks[firstIndex].indexOf((tiles[firstIndex].number)), 1)
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
        //print(found)
        return found
    }
    console.error('Could not find beginning!')
}

function chceck3by3(row, col, num) {


}

function checkRow(row, num) {
    for (let i = 0; i <= board.size + 1; i += tiles[0].size) {

    }

}

function checkCol(col, num) {

}

