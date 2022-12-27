type MyDocument = {
    title: string
    text: string
    date?: Date
}

const myDocument: MyDocument = {
    title: 'Title',
    text: 'Text'
}

const myDocument2: MyDocument = {
    title: 'Title',
    text: 'Text',
    date: new Date()
}


// myDocument.date === undefined here
// Then, it throws an error
// Then, we use ? to check if the date exists

console.log(myDocument.date?.toDateString()) // undefined
console.log(myDocument2.date?.toDateString()) // current date - Wed Dec 28 2022


// Null coalescence operator
console.log(
    myDocument.date?.toDateString() ?? 'null or undefined') // null | undefined

console.log(
    myDocument2.date?.toDateString() ?? 'null pr undefined') // current date - Wed Dec 28 2022

console.log(false ?? 'null or undefined') // false

console.log(0)

console.log('' ?? 'null or undefined') //

console.log('-' ?? 'null or undefined') // -