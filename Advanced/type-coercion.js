// Type coercion--> a string, a number, a boolean(saw in truthy falsy)
// (==) -> not take type into account (of different type) 
//(===) -> strict equality
// console.log('5'+5)
// console.log('5'-5)
// console.log('5'===5)

const value=true+12
const type=typeof value
console.log(type)
console.log(value)
