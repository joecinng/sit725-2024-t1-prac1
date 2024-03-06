function changeTime() {
    var selectElement = document.getElementById("selectedLocation");
    var selectedOption = selectElement.value;

    var timeZone = "Australia/" + selectedOption;

    var auDate = new Date().toLocaleString("en-US", { timeZone: timeZone });

    if (auDate) {
        var locationBox = document.getElementById("locationBox");
        locationBox.style.display = "block";
        document.getElementById("locationName").innerHTML = selectedOption;
        document.getElementById("locationDateTime").innerHTML = auDate;
    }
}

setInterval(changeTime, 1000);
