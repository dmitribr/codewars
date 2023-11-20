//Узнать является ли строка палиндромом, при этом удалить прбелы и символы, оставить буквы и цифры

function palindrome(str) {
    let str1 = str.replace(/[^a-zа-яё0-9/s]/gi, '').toLowerCase();
    if (str1 === str1.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }


}

palindrome('fdDDgf    fd $%^7 f g');

function telephoneCheck(str) {
    str = str.replace(/[^0-9]/g, '').split('');
    if (str.length === 10) {

    }
    return true;
  }
  
  telephoneCheck("555-555-5555");
str = str.replace(/[^0-9]/g, '');


//вернуть сумму массива
function sumAll(arr) {
    for (let key of arr) {
        
    }
    return 1;
  }
  
  sumAll([1, 4]);