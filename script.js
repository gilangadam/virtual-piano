let pianoKeys = new Set('ASDFGHJWETYU');

document.addEventListener("keydown", function (e) {
    if (pianoKeys.has(e.key.toUpperCase())) {
        new Audio("audio/" + e.key.toUpperCase() + ".mp3").play();
    } else {
        console.warn(`Unexpected keypress: '${event.code}'`);
    }
});