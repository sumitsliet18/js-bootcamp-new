//multiple arguments
let add=function(a, b){
    return a + b
}
let result=add(10,15)
console.log(result)

//
let getScoreTest=function(name='Anonymous', score=0){
    //return 'Name: '+name + '-> Score: '+score
    return `Name: ${name}  Score:${score}`
}
let scoreTest=getScoreTest('sumit')
console.log(scoreTest)

//challenge area
//total,tipPercent=.1
// A 25% tip on $40 would be $10 

let getTip=function(total, tipPercent=.2){
    let percent=tipPercent*100
    let tip= total*tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}
let tip=getTip(60)
console.log(tip)
