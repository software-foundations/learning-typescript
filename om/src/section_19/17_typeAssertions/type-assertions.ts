// document.querySelector('body') can returns HTMLBodyElement | null
// it can bring problems if we try access something in a null
// We can check if body exists before trying acces something inside it
const body = document.querySelector('body')

////////////////////
// Type narrowing //
////////////////////

// here, TS knows that body is HTMLBodyElement if it is not null
// Then, it provides autocomplete
// RECOMMENDED
if (body) body.style.background = 'red'

////////////////////////////
// non null assertion (!) //
////////////////////////////

// assert that an object is not null
// RECOMMENDED
const body2 = document.querySelector('body')!
body2.style.background = 'red'

////////////////////
// Type assertion //
////////////////////

// Here, we assert that document.querySelector('body')
// return a HTMLBodyElement
// if not, it throws an error

// RECOMMENDED
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

const input = document.querySelector('.input') as HTMLInputElement

//////////////////////////////////////////////////////
// (HTMLBodyElement | null) is disjoint from number //
//////////////////////////////////////////////////////
//               It will not work                   //
//////////////////////////////////////////////////////
// const body4 = document.querySelector('body') as number

//////////////////////////////////////////////////////////////////////////
//           It works, because number is a subtype of unknown           //
// as asserts that a value has the type or the subtype of another value //
//////////////////////////////////////////////////////////////////////////

// It is not useful. We are loose the power of the typescript
const body5 = (document.querySelector('body') as unknown) as number
