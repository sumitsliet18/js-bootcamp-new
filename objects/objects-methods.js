let restaurant={
    name:'ABC',
    guestCapacity:75,
    guestCount:0,
    checkAvailablity: function(partySize){
        //console.log(this)
        let seatsLeft=this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount=this.guestCount+partySize
    },
    removeParty: function(partySize){
        this.guestCount=this.guestCount-partySize
    }
}
//seatParty
// removeParty
restaurant.seatParty(72)
console.log(restaurant.checkAvailablity(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailablity(4))
