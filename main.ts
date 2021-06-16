let item = 0
basic.forever(function () {
    item = input.lightLevel()
    if (item < 10) {
        basic.showLeds(`
            . . # # .
            . # # . .
            . # # . .
            . # # . .
            . . # # .
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
