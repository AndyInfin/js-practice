/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0;
  // Выделяем в отдельный массив все символы, которые совпадают с заданными
  var vw = str.match(/[a\e\i\o\u]/g);
  // Возвращаем длину полученного массива
  if (vw) { vowelsCount = vw.length }
  return vowelsCount;
}

console.log(getCount("trvgrmnvc")); // 0
console.log(getCount("abracadabra")); // 5
console.log(getCount("chupacabra")); // 4
console.log(getCount("wibidibidododududa")); // 9