/*
Стандартная задачка для собеседований.
Берётся ряд чисел от 1 до 100 (или любого другого числа). Нужно вывести его со следующими условиями:
1) Вместо каждого числа, кратного 3, нужно вывести Fizz.
2) Вместо кратного 5 - Buzz.
3) Вместо кратного и 3 и 5 - FizzBuzz.
4) Остальные числа оставить в исходном виде.
*/

function FizzBuzz(max) {
	var output = '';
	for (var i = 1; i <= max; i++) {
		var line = '';
		if (!(i % 3)) {
			line += 'Fizz';
		}
		if (!(i % 5)) {
			line += 'Buzz';
		}
		if (line == '') {
			line += i;
		}
		output += line + '\n';
	}
	return output;
}

console.log(FizzBuzz(100));