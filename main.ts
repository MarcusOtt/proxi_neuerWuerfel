function image () {
    if (wuerfel == 1) {
        led.plot(2, 2)
    }
    if (wuerfel == 2) {
        led.plot(1, 3)
        led.plot(3, 1)
    }
    if (wuerfel == 3) {
        led.plot(0, 4)
        led.plot(2, 2)
        led.plot(4, 0)
    }
    if (wuerfel == 4) {
        led.plot(1, 1)
        led.plot(1, 3)
        led.plot(3, 1)
        led.plot(3, 3)
    }
    if (wuerfel == 5) {
        led.plot(1, 1)
        led.plot(1, 3)
        led.plot(2, 2)
        led.plot(3, 1)
        led.plot(3, 3)
    }
    if (wuerfel == 6) {
        led.plot(1, 0)
        led.plot(1, 2)
        led.plot(1, 4)
        led.plot(3, 0)
        led.plot(3, 2)
        led.plot(3, 4)
    }
}
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
basic.forever(function () {
    if (Proxi.RBlock(512)) {
    	
    } else {
        music.playMelody("C5 B C5 B C5 B C5 B ", 120)
    }
})
