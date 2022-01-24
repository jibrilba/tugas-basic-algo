function trafficLight(color) {
    switch (color) {
        case "red":
            console.log("stop")
            break
        case "orange":
            console.log("careful")
            break
        case "green":
            console.log("go")
            break
        case "blue":
            console.log("color invalid")
            break
        case "purple":
            console.log("color invalid")
            break
        case "axew":
            break
        default:
            console.log("please insert color")
    }
}


// TEST CASE
console.log(trafficLight("red")) // stop
console.log(trafficLight("orange")) // careful
console.log(trafficLight("green")) // go
console.log(trafficLight("blue")) // color invalid
console.log(trafficLight("purple")) // color invalid
console.log(trafficLight("axew")) // color invalid
console.log(trafficLight("")) // please insert color