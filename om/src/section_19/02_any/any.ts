// Here, both message and showMessage return type are any
// It happens because the return type cannot be inferred. Then, it's any

// We could explicity use message: any to make explicity the type

// But, use any type in last case
function showMessage(message: string) {
    return message
}


// console.log(showMessage([1, 2, 3])) // Argument of type 'number[]' is not assignable to parameter of type 'string'

console.log(showMessage('Bruno'))
