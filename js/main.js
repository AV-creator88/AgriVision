function predictCrop() {

    let crop = document.getElementById("crop").value;
    let area = document.getElementById("area").value;
    let year = document.getElementById("year").value;
    let land = document.getElementById("land").value;


    if (crop === "" || area === "" || year === "" || land === "") {

        document.getElementById("result").innerHTML =
            "<h3>Please fill all the fields.</h3>";

        return;
    }


    document.getElementById("result").innerHTML =

        "<h3>Input Received</h3>" +

        "<p>Crop: " + crop + "</p>" +

        "<p>Area: " + area + "</p>" +

        "<p>Year: " + year + "</p>" +

        "<p>Land Area: " + land + " hectares</p>";
}