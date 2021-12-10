/*
'unknown'
- acts like a secure 'any'
*/

let x: unknown;

x = 100;
x = 'Bruno';
x = 900;
x = 10;

const y = 800;

// Operator '+' cannot be applied to types 'unknown' and '800'.
console.log(x + y); // 810

if (typeof x === 'number') console.log(x + y); // 810

export default 1;
