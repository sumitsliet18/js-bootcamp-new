const data={
    locations:[],
    get location(){
        return this._location
    },
    set location(value){
        this._location=value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data object
data.location='  Bhagalpur  '
data.location=' Delhi'
console.log(data)