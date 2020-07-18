//logical And operator= True if both sides are true. false otherwise
// logical OR operator =True if at least one side is true . false otherwise
let temp=55
if (temp>=60 && temp<=90){
    console.log('it is pretty nice out')
}else if (temp<=0 || temp>=120){
    console.log('do not go outside')
}else{
    console.log('Eh, do what you want')
}
// challenge area
let isGuestOneVegan=false
let isGuestTwoVegan=false

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
//Else,Offer up anything on the menu.
if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options')
}else{
    console.log('Else,Offer up anything on the menu')
}
