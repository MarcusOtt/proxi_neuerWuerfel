input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    wuerfel = randint(1, 6)
    if (wuerfel == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (wuerfel == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (wuerfel == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (wuerfel == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (wuerfel == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
let wuerfel = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    `)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("links", Proxi.Lese_LBlock())
    serial.writeValue("rechts", Proxi.Lese_RBlock())
    serial.writeValue("licht", 0)
    if (Proxi.RBlock(150) && Proxi.LBlock(150)) {
        Proxi.rückwärts()
    } else if (Proxi.RBlock(150) && !(Proxi.LBlock(150))) {
        Proxi.linksdrehung()
    } else if (!(Proxi.RBlock(150)) && Proxi.LBlock(150)) {
        Proxi.rechtsdrehung()
    } else if (!(Proxi.RBlock(150)) && !(Proxi.LBlock(150))) {
        if (input.lightLevel() > 0) {
            Proxi.vorwärts()
        }
        basic.pause(100)
        Proxi.drehungsstopp()
        Proxi.stehenbleiben()
    } else {
    	
    }
})
