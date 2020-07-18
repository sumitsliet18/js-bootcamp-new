// const age=12
// const message=age>=18 ? 'you can vote!' : "you can't vote"
// console.log(message)
// const myAge=20
// const showPage=()=>{
//     console.log('Showing the page')
// }
// const showErrorPage=()=>{
//     console.log('Showing the error page')
// }
// myAge>=21?showPage():showErrorPage()
const myAge=20
const showPage=()=>{
    return 'Showing the page'
}
const showErrorPage=()=>{
    return 'Showing the error page'
}
const message=myAge>=21?showPage():showErrorPage()
console.log(message)

// A game
const team=['sumit','pooja','chandan','ajay','saurabh']
console.log(team.length<=4?`Team Size: ${team.length}` : 'To many people in the team')