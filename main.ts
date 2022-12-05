enum RadioMessage {
    message1 = 49434
}
function feu_O () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(2000)
    strip.clear()
    strip.show()
}
function countdown () {
    basic.showNumber(t)
    basic.pause(1000)
    t = t - 1
    if (t == 7) {
        radio.sendString("Fo")
    } else if (t == 0) {
        Etat = 0
        feu_V_2()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Sy")
})
function feu_R_2 () {
    strip.clear()
    strip.show()
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function feux_c2 () {
    if (Etat == 1) {
        countdown()
    } else {
        basic.pause(5000)
        strip.clear()
        strip.show()
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        Etat = 1
        t = 10
    }
}
function feux_c1 () {
    feu_V()
    feu_O()
    feu_R()
}
function initi_neo () {
    strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
    strip.setBrightness(32)
    strip.clear()
    strip.show()
}
function feu_O_2 () {
    strip.clear()
    strip.show()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
}
function feu_R () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(10000)
    strip.clear()
    strip.show()
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Fo") {
        feu_O_2()
        basic.pause(2000)
        feu_R_2()
        t = 42
        Etat = 1
    }
    if (receivedString == "Sy") {
        t = 10
        Etat = 1
    }
})
function feu_V () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(10000)
    strip.clear()
    strip.show()
}
function feu_V_2 () {
    strip.clear()
    strip.show()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
let t = 0
let strip: neopixel.Strip = null
let Etat = 0
radio.setGroup(10)
initi_neo()
Etat = 2
feu_R_2()
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.forever(function () {
    if (Etat == 1) {
        countdown()
    } else {
    	
    }
})
