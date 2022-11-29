function feu_O () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(2000)
    strip.clear()
    strip.show()
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
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
basic.forever(function () {
    feux_c1()
})
