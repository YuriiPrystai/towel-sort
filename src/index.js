
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = new Array();
    if (!matrix) {
        return arr;
    }
    let i = 0;
    for (let item of matrix) {
        if (i%2 === 0) {
            arr = arr.concat(item);
        } else {
            arr = arr.concat(item.reverse());
        }
        i++;
    }
    return arr;
}
