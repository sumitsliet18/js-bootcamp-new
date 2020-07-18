// function= input(arguments),code(to do something meaningful),output(return value)

let greetUser=function(){
    console.log('Welcome User!')
}
greetUser()
greetUser()
greetUser()

let square=function(num){
    let result=num*num
    return result
}
let value=square(3)
let otherValue=square(10)
console.log(value)
console.log(otherValue)

//challenge area

//convertFahrenheitToCelsius
//call a couple of times(32->0)(68->20)
//print the converted value

let fahrenheitToCelsius=function(fahrenheit){
    let celsius=(fahrenheit-32)*5/9
    return celsius
}
convertedValue=fahrenheitToCelsius(32)
convertedValueOther=fahrenheitToCelsius(68)
console.log(convertedValue)
console.log(convertedValueOther)