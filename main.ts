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
    z = 0
})
input.onGesture(Gesture.Shake, function () {
    z = 1
    w = 1
    basic.clearScreen()
})
let y = 0
let z = 0
let wuerfel = 0
let w = 0
music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.OnceInBackground)
w = 0
wuerfel = 0
z = 0
basic.forever(function () {
    if (z == 0) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
    } else {
        if (w == 1) {
            for (let index = 0; index < 10; index++) {
                wuerfel = 1 + randint(0, 5)
                music.playTone(523, music.beat(BeatFraction.Sixteenth))
                if (wuerfel == y) {
                    if (wuerfel > 1 == wuerfel < 6) {
                        wuerfel = wuerfel + 1
                    }
                    if (wuerfel == 6) {
                        wuerfel = 5
                    }
                    if (wuerfel == 1) {
                        wuerfel = 2
                    }
                }
                image()
                basic.pause(200)
                basic.clearScreen()
                y = wuerfel
            }
            wuerfel = 1 + randint(0, 5)
            music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
            image()
            w = 0
        }
    }
})
