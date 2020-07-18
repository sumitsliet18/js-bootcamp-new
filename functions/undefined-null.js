//undefined for variable
let name
//name='sumit'
if (name===undefined){
    console.log('please provide a name')
}else{
    console.log(name)
}


// undefined for functions
let square=function(num){
    console.log(num)
}
let result=square()
console.log(result)
//
let age=21
age=undefined
console.log(age)
//null as assigned value
let age=21
age=null
console.log(age)