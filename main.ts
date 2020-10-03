basic.forever(function () {
    if (input.acceleration(Dimension.X) > -60 && input.acceleration(Dimension.X) < 60) {
        basic.showIcon(IconNames.Yes)
    } else if (input.acceleration(Dimension.X) > 60) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.X) < -60) {
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    }
})
