/*
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  var answer;
  var result = {};
  // Подсчитываем, сколько раз повторяется каждый элемент
  A.forEach(function(a) { result[a] = result[a] + 1 || 1; });
  // В получившемся объекте находим поле с нечетным значением
  for (var key in result) { if (result[key] & 1) { answer = key; } }
  return answer;
}

console.log(findOdd([1, 3, 4, 1, 1, 5, 3, 4, 5])); // 1
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
console.log(findOdd([10])); // 10