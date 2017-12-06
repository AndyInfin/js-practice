/*
Пример реализации стандартного метода map
*/

const array_in = [1, 2, 3, 4, 5];
var array_out = [];

function f(e) {
	// Выполняем какое-нибудь действие со входящим параметром и возвращаем результат
	return e*2;
}

function func_map(input, output) {
	// Обрабатываем последовательно в цикле каждый элемент массива
	for (var i = 0; i < input.length; i++) {
		// Результат действий функции-обработчика записываем последовательно в выходной массив
		output.push(f(input[i]));
	}
  return output;
}

console.log(func_map(array_in, array_out)); // [2, 4, 6, 8, 10]