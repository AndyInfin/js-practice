/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

function iqTest(numbers){
	// Определяем чётность элементов входящего массива
	var isEven = numbers.map(function(x) { return ( x & 1 ) ? false : true; });
	// Подсчитываем количество чётных элементов
	var evens = 0;
	for (var i = 0; i < isEven.length; i++) { if (isEven[i]) { evens++; } }
	// Вводим функцию поиска индекса для нужного значения
	function find(array, value) {
		for (var i = 0; i < array.length; i++) { if (array[i] === value) return i + 1; }
	}
	// Если чётных больше одного - ищем нечётный, и наоборот
	var answer;
	(evens > 1) ? answer = find(isEven, false) : answer = find(isEven, true);
	return answer;
}

console.log(iqTest([2, 4, 7, 8, 10])); // 3
console.log(iqTest([1, 2, 2])); // 1
console.log(iqTest([1, 1, 3, 5, 7, 12])); // 6