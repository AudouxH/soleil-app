
function temp_around(inputnumber, roundnumber) {
    let int = Math.floor(inputnumber).toString()

    if (typeof inputnumber !== 'number' || typeof roundnumber !== 'number')
        return 'Not a Number';
    if (int[0] === '-' || int[0] === '+')
        int = int.slice(int[1], int.length);
    return inputnumber.toPrecision(int.length + roundnumber);
}

export default temp_around;
