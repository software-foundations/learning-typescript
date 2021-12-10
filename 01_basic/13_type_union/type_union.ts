function addOrConcat(
	a: number | string | boolean,
	b: number | string | boolean
): number | string {
	if (typeof a === 'number' && typeof b === 'number') return a + b;
	return `${a}${b}`;
}

console.log(addOrConcat(10, 20)); //30
console.log(addOrConcat('10', '20')); // 1020
console.log(addOrConcat(10, '20')); // 1020
console.log(addOrConcat('10', 20)); // 1020
console.log(addOrConcat(true, true)); //trutrue
