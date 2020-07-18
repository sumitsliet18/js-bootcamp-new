const products=[{name:'sumit'}]
const product=products[0]

//1. Truthy - Values that resolve to true in boolean context
//2. Falsy - Values that resolve to false in boolean context
// Truthy values - everything else except values mentioned in falsy,is truthy value
// Falsy values - false,0,empty string,null,undefined,Nan(not a number)-1/0
if (product){
    console.log('product found')
}else{
    console.log('product not found')
}

// Truthy falsy not apply when comparing numbers
