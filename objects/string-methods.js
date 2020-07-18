let name='    Sumit Kumar   '

//Length property
console.log(name.length)

// Convert to upper case  toUpperCase method
console.log(name.toUpperCase())
//convert to lower case
console.log(name.toLowerCase())

// include method
//let password='abc123pword'
//console.log(password.includes('password'))

// trim method--> deleting whitespaces or senitizing data
console.log(name.trim())

// challenge area

//isValidPassword
// length is more than 8 and it does not contain character password
let isValidPassword=function(password){
    return password.length > 8 && !password.includes('password')
}
console.log(isValidPassword('abcsn'))
console.log(isValidPassword('sdahlkhal123@'))
console.log(isValidPassword('aspasswordsds'))
         