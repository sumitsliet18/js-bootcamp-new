notes=[{
    title:'my next trip',
    body:'I would like to go Delhi'
},{
    title:'Habits to work on',
    body:'coding , eating'
},{
    title:'Office modifications',
    body:'Get a new seat'
}]
const sortNotes=function(notes){
    notes.sort(function(a,b){
        if (a.title.toLowerCase()<b.title.toLowerCase()){
            return -1
        }else if (b.title.toLowerCase()<a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })

}
const findNote=function(notes,noteTitle){
    return notes=notes.find(function(note,index){
        return note.title.toLowerCase()===noteTitle.toLowerCase()
    })  
}
const findNotes=function(notes,query){
    return filterNotes=notes.filter(function(note,index){
        const isTitleMatch=note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch=note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch

})
}
// console.log(findNotes(notes,'eating'))
// const note=findNote(notes,'some other Office modifications')
// console.log(note)

sortNotes(notes)
console.log(notes)