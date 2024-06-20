document.addEventListener("DOMContentLoaded", function() {
    const lightbulb = document.getElementById("lightbulb");
    const toggleButton = document.getElementById("toggleButton");

    let isOn = false;

    toggleButton.addEventListener("click", function() {
        isOn = !isOn;
        if (isOn) {
            lightbulb.src = "bulb-on.png";
            toggleButton.textContent = "Turn Off";
        } else {
            lightbulb.src = "bulb-off.png";
            toggleButton.textContent = "Turn On";
        }
    });
});
