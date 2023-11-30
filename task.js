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

//узнать колчисетво палиндромов от числа a до b (no test)
function countPalindromes(a, b){
    let sum = 0;
    a = Math.ceil(a);
    b = Math.floor(b);
    if ((b - a) < 0) {
        return 0;
    } for (let i = a ; i <= b ; i++) {
        if (i === Number(String(i).split('').reverse().join(''))) {
            sum++;
        }
    }
    console.log(sum);
  }
  countPalindromes(0, 3);

//перевернуть строку, и каждое слово отдельно, преобразовать верхний регистр в нижний и наоборот.
//https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript
function stringTransformer(str) {
    let revArr = str.split(' ').reverse();
    for (let i = 0 ; i < revArr.length ; i++) {
            revArr[i] = revArr[i].split('').reverse();
        for (let j = 0; j < revArr[i].length ; j++) {
            if (revArr[i][j] === revArr[i][j].toUpperCase()) {
                revArr[i][j] = revArr[i][j].toLowerCase();
               } else {
                revArr[i][j] = revArr[i][j].toUpperCase();
               }   
            } revArr[i] = revArr[i].join('');
        }console.log(revArr.join(' '));
    }


stringTransformer('Example string');

//переместить все нули в конец массива
//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
//решение.
function moveZeros(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i]);
            arr.splice(i, 1);
        } 
    }console.log(arr);
}
moveZeros([0, 3, 4, +0, 'f', 55, 0, 4, 7]);

//решение на гитхабе
// var moveZeros = function (arr) {
//   for(var i = arr.length; i--;) {
//     if(arr[i]===0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }
//   } return arr;
// }

//Определить является ли год високосным
//https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript
function isLeapYear(year) {
    if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
      return true;
    }
    return false;
  }

//Перемешать 2 массива
//https://www.codewars.com/kata/582642b1083e12521f0000da/train/javascript
function arrayMash (array1, array2) {
    let result = [];
    for (let i = 0 ; i < array1.length ; i++) {
        result.push(array1[i], array2[i]);
    } console.log(result);
}
arrayMash([1, 2, 3, 4], ['a', 'b', 'c', 'd']);

//вернуть отрицательное число
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
    if (num === 0) {
      return 0;
    } return -(Math.abs(num));
  }

//вернуть массив только с числами.
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
    let ret = [];
    for (let i = 0 ; i < l.length ; i++){
        if (typeof(l[i]) === 'number') {
                ret.push(l[i]);
            } 
    } console.log(ret);
  }

// рассортировать массив от большего к меньшому
  let g = [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
  ];
  function sortList (sortBy, list) {
        
    list.sort(function(a, b) {
        return b[sortBy] - a[sortBy];
    });
            
    return list;
  
  }
  console.log(sortList('a', g));

//рассчитать высоту экрана
//https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript
  function findScreenHeight(width, ratio) {
    let height = width / ratio.split(':')[0] * ratio.split(':')[1];
    return `${width}x${height}`;
}
console.log(findScreenHeight(1240, '4:3'));

//Слово с заглавной буквой поставить в начала строки
//https://www.codewars.com/kata/5785cd91a1b8d5c06e000007/train/javascript
function reOrdering(text){
  const mas = text.split(' ');
  for (let i = 0 ; i < mas.length ; i++) {
      for (let key of mas[i]) {
          if (key === key.toUpperCase()) {
              mas.unshift(mas[i]);
              mas.splice((i + 1), 1);

              return mas.join(' ');
          } 
      }
  }
}

const hr = 'hi my name Gred is';
console.log(reOrdering(hr));

//разбить строку на элементы в массив по 2 символа
//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){
  let arr = str.split('');
  let fin = [];
  for (let i = 0 ; i < arr.length ; i += 2) {
      fin.push(arr[i] + (arr[i + 1] || '_'));
 }
 console.log(fin);
}
solution('dffdg');
