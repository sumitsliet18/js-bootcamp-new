//const todo=['sleep','code','bath','eat','excersice']

const todo=[{
    text:'sleep',
    completed: true
}, {
    text:'code',
    completed: true
}, {
    text:'bath',
    completed: false
}, {
    text:'eat',
    completed: false
}, {
    text:'excercise',
    completed: true
}]
const sortTodo=function(todo){
    todo.sort(function(a,b){
        if (a.completed===true && b.completed===false){
            return -1
        }else if (b.completed===false && a.completed===true){
            return 1
        }else{
            return 0
        }
    })
}
// const deleteTodo=function(todo,todoText){
//     const index=todo.findIndex(function(todo){
//         return todo.text.toLowerCase()===todoText.toLowerCase()
//     })
//     if (index> -1){
//         todo.splice(index,1)
//     }
// }
// const getThingsToDo=function(todo){
//     return todo.filter(function(todo){
//         return !todo.completed
//     })
// }
//console.log(getThingsToDo(todo))
sortTodo(todo)
console.log(todo)
