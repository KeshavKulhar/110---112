prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_url + '"/>';
    });
}
console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2dTy4FtCf/model.json', modelloaded);

function modelloaded() {
    console.log("modelloaded");
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("emotion_name1").innerHTML = results[0].label;
        document.getElementById("emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        if (results[0].label == "victory") {
            document.getElementById("emoji_1").innerHTML = "&#9996;";
        }
        if (results[0].label == "best") {
            document.getElementById("emoji_1").innerHTML = "&#128077;";
        }
        if (results[0].label == "super") {
            document.getElementById("emoji_1").innerHTML = "&#128076;";
        }

        if (results[1].label == "victory") {
            document.getElementById("emoji_1").innerHTML = "&#9996;";
        }
        if (results[1].label == "best") {
            document.getElementById("emoji_1").innerHTML = "&#128077;";
        }
        if (results[1].label == "super") {
            document.getElementById("emoji_1").innerHTML = "&#128076;";
        }
    }
}