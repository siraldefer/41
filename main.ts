input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
radio.onReceivedString(function (receivedString) {
    let receivedNumber = 0
    if (1 == receivedNumber) {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(10)
basic.forever(function () {
	
})
