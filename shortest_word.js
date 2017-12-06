/*
x Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
	// Создаём массив с длинами всех слов во входящей строке
	var count = s.split(" ").map(function(input) { return input.length; });
	// Ищем минимальное значение в массиве
	var min = count[0];
	for (var i = 0; i < count.length; i++) {
		if (count[i] < min) { min = count[i]; }
	}
	return min;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
console.log(findShort("all your base are belong to us")); // 2
console.log(findShort("wake up and smell")); // 2
console.log(findShort("going through")); // 5