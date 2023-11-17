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
