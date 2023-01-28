function generateList(array) {
	let result = '';
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			result += `
	${array[i][0]}`;
			result += `
	`;
			for (let j = 0; j < array[i].length; j++) {
				result += `
	${array[i][j]}
	`;
			}
			result += ``;
		} else {
			result += `
	${array[i]}
	`;
		}
	}
	result += '';
	return result;
}