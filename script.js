onEvent("button2", "click",
    function () {
        penColor("red");
        penWidth(3);
        timedLoop(100, function () {
            setProperty("screen1", "background-color", rgb(randomNumber(0, 255), 0, 75, 0.5));
            moveForward(25);
            turnRight(randomNumber(1, 50));
        });
        hideElement("button2");
    });