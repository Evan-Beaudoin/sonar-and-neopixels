let distance2 = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance2 > 6) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (distance2 < 6 || distance2 == 6) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance2 < 3 || distance2 == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    basic.pause(200)
})
