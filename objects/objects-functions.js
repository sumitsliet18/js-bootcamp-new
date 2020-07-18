let myBook={
    title:'1984',
    author:'Rahul Jain',
    pageCount:320
}
let otherBook={
    title:'srm',
    author:'Thrl Jain',
    pageCount:620
}
let getSummary=function(book){
    return{
       summary: `${book.title} by ${book.author}`,
       pageSummary:`${book.title} is ${book.pageCount} pages long`
    }    
}
let summaryMyBook=getSummary(myBook)
let summaryOtherBook=getSummary(otherBook)
console.log(summaryOtherBook.pageSummary)
//challenge area
//create function-take fahrenheit in-return object with all three 
let convertFahrenheit=function(fahrenheit){
    return{
        fahrenheit: fahrenheit,
        kelvin:(fahrenheit+459.67)*(5/9),
        celsius:(fahrenheit-32)*(5/9)
    }
}
let temps=convertFahrenheit(74)
console.log(temps)