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

  //вернуть приветсвие.
  function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }
  greet();

  //вернуть true если первые и последняие буквы совпадают.
  function feast2(beast, dish) {
    let gf = beast.toLowerCase().split('');
    let gf2 = dish.toLowerCase().split('');
        if (gf[gf.length -1] === gf2[gf2.length -1] && gf[0] === gf2[0]) {
                return true;
            }
            return false;
    }
feast2('hggfgff555', 'hgfhg5');

//рассчитать силы по видам и вернуть за кем будет подеба.
function goodVsEvil(good, evil){
    var goodArr = good.split(' '),
     evilArr = evil.split(' '),
     goodPoints = goodArr[0]*1 + goodArr[1]*2 + goodArr[2]*3 + goodArr[3]*3 + goodArr[4]*4 + goodArr[5]*10,
     evilPoints = evilArr[0]*1 + evilArr[1]*2 + evilArr[2]*2 + evilArr[3]*2 + evilArr[4]*3 + evilArr[5]*5 + evilArr[6]*10;
   if (goodPoints === evilPoints) return 'Battle Result: No victor on this battle field';
    return goodPoints < evilPoints ?  "Battle Result: Evil eradicates all trace of Good" :"Battle Result: Good triumphs over Evil";
}