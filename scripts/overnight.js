window.onload = init;

function init() {
    let form = document.getElementById("form")
    form.onsubmit = createReservation

}


function getRoomRate() {

    let queenRoom = document.getElementById("roomQueen")
    let kingRoom = document.getElementById("roomKing")
    let bed2Room = document.getElementById("room2Bedroom")

    if(queenRoom.checked) return 150
    else if(kingRoom.checked) return 150    
    else return 210
}


function getDiscount() {

    let basicDiscount = document.getElementById("aSDiscount")
    let militaryDiscount = document.getElementById("militaryDiscount")

    if(basicDiscount.checked) return .1 * getRoomRate()
    else if(militaryDiscount.checked) return .2 * getRoomRate()
    else return 0
}


function capacity(){
    let adults = +document.getElementById("numberOfAdults").value
    let children = +document.getElementById("numberOfChildren").value
    let people = adults + children 
    let messageAlert = document.getElementById("messageAlert")
    let queenRoom = document.getElementById("roomQueen")
    let kingRoom = document.getElementById("roomKing")
    let bed2Room = document.getElementById("room2Bedroom")

    
if (queenRoom.checked){
    if (people > 5) document.getElementById("messageAlert").hidden = false
    else document.getElementById("messageAlert").hidden = true
}
else if (kingRoom.checked){
    if (people > 2) document.getElementById("messageAlert").hidden = false
    else document.getElementById("messageAlert").hidden = true
}
else if (bed2Room.checked){
    if (people > 6) document.getElementById("messageAlert").hidden = false
    else document.getElementById("messageAlert").hidden = true
}
return document.getElementById("messageAlert")
}

function createReservation(event) {
    event.preventDefault()

    let roomRate = getRoomRate()
    let numberOfNights = document.getElementById("numberOfNights").value
    let messageAlert = capacity()
    let discount = getDiscount() * numberOfNights
    let discountedPrice = roomRate - discount

    //let checkIn = document.getElementById("checkInDate").value
    //let discount = document.getElementById("").value

    let subtotal = roomRate * numberOfNights - discount

    let taxes = subtotal * .12
    let total = subtotal + taxes

    display(roomRate, discountedPrice, discount, taxes, total)
}

function display(roomRate, discountedPrice, discount, taxes, total) {
    document.getElementById("roomRateDisplay").innerText = `$ ${roomRate.toFixed(2)}`
    document.getElementById("discountedPriceDisplay").innerText = `$ ${discountedPrice.toFixed(2)}`
    document.getElementById("discountDisplay").innerText = `$ ${discount.toFixed(2)}`
    document.getElementById("taxesDisplay").innerText = `$ ${taxes.toFixed(2)}`
    document.getElementById("totalDisplay").innerText = `$ ${total.toFixed(2)}`

    if (document.getElementById("messageAlert") == true) {

        document.getElementById("totalDisplay").hidden = false
    }
    else document.getElementById("totalDisplay").hidden = true
}
