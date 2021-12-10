// never -> the function will never have any return
export function createError(): never {
	throw new Error('Some Error');
}

createError();

// Module mode
export default 1;
