//Methods

function calculateFun() {
    // get the speed input value
    var speed = parseInt(document.getElementById("speedInput").value);

    // define the thresholds for different levels of fun
    var funLevels = [
        { speed: 0, fun: "Can't get any slower than this" },
        { speed: 20, fun: "Mildly fun" },
        { speed: 40, fun: "Quite fun" },
        { speed: 60, fun: "Very fun!" },
        { speed: 80, fun: "Super fun!!" },
        { speed: 100, fun: "SLOW DOWN!!! NOT FUN!" }
    ];

    // find the appropriate fun level based on the speed
    var funLevel = "Unknown";
    for (var i = 0; i < funLevels.length; i++) {
        if (speed < funLevels[i].speed) {
            funLevel = funLevels[i].fun;
            break;
        }
    }

    // display the result
    document.getElementById("funResult").textContent = "At " + speed + " MPH, it's " + funLevel;
}