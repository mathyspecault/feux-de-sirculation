function feu_O () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(2000)
    strip.clear()
    strip.show()
}
function countdown () {
    if (t > 0) {
        basic.showNumber(t)
        t = t - 1
        basic.pause(1000)
    } else if (t == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        strip.clear()
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        Etat = 0
    } else {
    	
    }
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
function feu_R () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(10000)
    strip.clear()
    strip.show()
}
function feu_V () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(10000)
    strip.clear()
    strip.show()
}
let Etat = 0
let t = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
t = 10
Etat = 1
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
	
})
