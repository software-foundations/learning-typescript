/*
seams (a little bit) dict in python

We can have
- numeric enum
- string enum
- ...

*/

const print = (title?: string) => console.log(`\n-----${title || ''}-----\n`);

enum Colors {
    RED, // 0
    BLUE, // 1
    YELLOW, // 2
}

enum ColorsTwo {
    RED = 100,
    BLUE = 200,
    YELLOW = 300,
}

print('Colors');

console.log(Colors);

print('ColorsTwo');

console.log(ColorsTwo);

print('Colors');

console.log(Colors.RED);
console.log(Colors.BLUE);
console.log(Colors.YELLOW);

print();

console.log(Colors[0]);
console.log(Colors[1]);
console.log(Colors[2]);

print('ColorsTwo');

console.log(ColorsTwo.RED);
console.log(ColorsTwo.BLUE);
console.log(ColorsTwo.YELLOW);

print();

console.log(ColorsTwo[100]);
console.log(ColorsTwo[200]);
console.log(ColorsTwo[300]);

print('merge with old Colors');

enum Colors {
    PURPLE = 'PURPLE',
    ORANGE = 'SOMETHING',
    BLACK = 201,
    ROSA, // Only set to 202 'cause BLACK is a number
}

print('Colors');

console.log(Colors);

export function chooseAColor(color: Colors): void {
    console.log(Colors[color]);
}

print('chooseAColor');

// it is so strange
chooseAColor(123456); // returns undefined
