// вернуть полученный массив, если корень из числа возвращает целое числло, то вернуть это число, если нет, то возвести в коернь и вернуть.
function squareOrSquareRoot(array) {
    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(array[i]) % 1 === 0) {
            array[i] = Math.sqrt(array[i]);
        } else {
            array[i] = array[i] * array[i];
        }
    }
    console.log(array);
    return array;  
  }
  var input = [ 4, 3, 9, 7, 2, 1 ]
  squareOrSquareRoot(input);