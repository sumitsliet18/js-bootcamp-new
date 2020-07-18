//Global scope->(fahrenheitToCelsius,tempOne,tempTwo)
  //Local scope->(fahrenheit,celsius)
    //Local scope->(isFreezing)

let fahrenheitToCelsius=function(fahrenheit){
    let celsius=(fahrenheit-32)*5/9
    if (celsius==0){
        let isFreezing=true
    }
    return celsius
}
tempOne=fahrenheitToCelsius(32)
tempTwo=fahrenheitToCelsius(68)
console.log(tempOne)
console.log(tempTwo)