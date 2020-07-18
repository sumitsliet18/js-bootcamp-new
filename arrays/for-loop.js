const notes=['note 1','note 2','note 3']
for (let count=notes.length-1;count>=0;count--){
    console.log(notes[count])
}

const todo=['sleep','study','bath','eat','excersice']
for (let count=0; count<todo.length; count++){
    const num=count+1
    const todos=todo[count]
    console.log(`${num}.${todos}`)

}