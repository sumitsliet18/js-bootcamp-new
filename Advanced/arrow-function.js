const square=(num)=>num*num

const squareLong=(num)=>{
    return num*num
}
console.log(square(5))

const people=[{
    name:'sumit',
    age:26
},{
    name:'pooja',
    age:25
},{
    name:'chandan',
    age:31
}]
// const under30=people.filter(function(person){
//     return person.age<30
// })

const under30=people.filter((person)=>person.age<30)
console.log(under30)
//1. Find the person with age 31
//2. Print that persons name
const person=people.find((person)=>person.age===31)
console.log(person.name)