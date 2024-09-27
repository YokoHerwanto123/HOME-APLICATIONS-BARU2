const endpoint = "http://192.168.133.172";

function getLampuDapur() {
    fetch(endpoint + "/Dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            LampuDapur.style.backgroundColor = "blue";
            DapurImage.src = "./assets/Lampu-On.png";
        } else {
            LampuDapur.style.backgroundColor = "darkblue";
            DapurImage.src = "./assets/Lampu-Off.png";
        }
    });
}

function setLampuDapur() {
    fetch(endpoint + "/Dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}



/* Setting On Click Lampu */


function setLampuTeras() {
    LampuTeras.style.backgroundColor = "blue";
    TerasImage.src = "./assets/Lampu-On.png";
}

function setLampuKamar1() {
    LampuKamar1.style.backgroundColor = "blue";
    kamar1Image.src = "./assets/Lampu-On.png";
}

getLampuDapur();