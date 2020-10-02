// Created By: Evan
// 
// Created on: Oct. 2020
// 
// This program: Uses sonar to change color of neopixels
let distance2 = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance2 > 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance2 <= 4 && distance2 > 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        if (distance2 == 3) {
            strip.clear()
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
        } else if (distance2 == 2) {
            strip.clear()
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
        }
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    basic.pause(100)
})
