type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = { username: string, password: string }

const verifyUser: VerifyUserFn = (user, sentValue) => {
	return (
		user.username === sentValue.username &&
		user.password === sentValue.password
	)
}

// They both works even if we put : 
const bdUser = { username: 'John', password: '123'}
const sentUser = { username: 'John', password: '123', permissions: []}

// TS doesn't care if bdUser and sentUser are of User type
// TS care if the object keys are the same
// and if the type of the key values are string

// Then, the restriction is a object that has username and password keys
// And that both keys have string values
// Then, the User type is just an alias for the restriction
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn)
