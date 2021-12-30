img = "";
status = "";

function preload(){
    img = loadImage('bottles.jpeg');

}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
     
    fill("#FF0000");
    text("Bottles", 310, 115);
    noFill();
    stroke("#FF0000");
    rect(290, 100, 320, 300);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}


function back() {
    window.location = "index.html";
}