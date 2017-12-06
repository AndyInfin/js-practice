/*
Пример реализации стандартного метода reduce
*/

const array_in = [1, 2, 3, 4, 5];
var output = null;

function f(e,g) {
	// Выполняем некое действие со входящими параметрами и возвращаем результат
	return e*g;
}

function func_reduce(input, output) {
	// Последовательно обрабатываем все элементы массива
	for (var i = 0; i < (input.length-1); i++) {
		if (output == null) {
			// В первой итерации обрабатываются первые два элемента входящего массива
			output = f(input[i], input[i+1]);
		} else {
			// Для всех последующих итераций за основу берётся результат предыдущих
			output = f(output, input[i+1]);
		}
	}
  return output;
}

console.log(func_reduce(array_in, output)); // 120