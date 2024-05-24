input.onButtonPressed(Button.A, function () {
    bias += 1
    if (bias >= 0) {
        JoyCar.bias(LRDirection.Right, bias)
    } else if (bias < 0) {
        JoyCar.bias(LRDirection.Left, bias * -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    JoyCar.stop(StopIntensity.Soft)
    if (bias >= 0) {
        basic.showString("R")
        basic.showNumber(bias)
    } else {
        basic.showString("L")
        basic.showNumber(bias * -1)
    }
    basic.showString("%")
})
input.onButtonPressed(Button.B, function () {
    bias += -1
    if (bias >= 0) {
        JoyCar.bias(LRDirection.Right, bias)
    } else if (bias < 0) {
        JoyCar.bias(LRDirection.Left, bias * -1)
    }
})
let bias = 0
bias = 0
basic.forever(function () {
    JoyCar.drive(FRDirection.Forward, 80)
})
