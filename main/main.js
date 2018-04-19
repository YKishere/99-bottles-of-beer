function main() {
    return partOne(99);
}

function partOne(x) {
    let str = '';
    do {
        let y = x - 1;
        str += x + ' bottles of beer on the wall, ' + x + ' bottles of beer.\n' +
            'Take one down and pass it around, ' + y + ' bottles of beer on the wall.\n';
        x--;
    } while (x > 2)
let rs = `${str}2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
    return rs;
}

module.exports = main;

