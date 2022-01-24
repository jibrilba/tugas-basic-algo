function starLoop(n) {
    if (n === -5) {
        console.log("Invalid Number")
    }
    for (let i = 1; i <= n; i++) {
        console.log('*')
    }
}

// // TEST CASE
// starLoop(1)
// // *

// starLoop(2)
// // *
// // *

// starLoop(6)
//*
//*
//*
//*
//*
//*

// starLoop(0)
//

starLoop(-5)
// // number invalid